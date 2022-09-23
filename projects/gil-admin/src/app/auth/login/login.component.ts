import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Auth } from 'projects/gil-lib/src/lib/auth/auth.model';
import { AuthService } from 'projects/gil-lib/src/lib/auth/auth.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() error: string | null | undefined;
  @Output() submitEM = new EventEmitter();
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService
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
        return throwError(err);
      })).subscribe((response: any) => {
        localStorage.setItem('AccessToken', response.accessToken)
      });
  }
}
