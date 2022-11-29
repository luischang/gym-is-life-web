import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'projects/gil-lib/src/lib/auth/auth.model';
import { AuthService } from 'projects/gil-lib/src/lib/auth/auth.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Input() messageResponse: string | null | undefined;
  @Output() submitEM = new EventEmitter();
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  bgColorResponse: string = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
    const auth = {
      Email: this.form.value.email,
      Password: this.form.value.password
    }
    this.UserLogin(auth)
  }

  async UserLogin(credentials:Auth){
    (await this.authService
      .login(credentials))
      .pipe(catchError(err => {
        localStorage.removeItem('AccessToken')
        this.messageResponse='Email or password invalid'
        this.bgColorResponse = '#FF0000'
        setTimeout( () =>{
          this.messageResponse=undefined
      }, 5000 );
        return throwError(err);
      })).subscribe((response: any) => {
        this.messageResponse='Success authentication'
        this.bgColorResponse = '#00A000'
        localStorage.setItem('AccessToken', response.accessToken)
        this.router.navigate(['/dashboard'])
      });
  }

}
