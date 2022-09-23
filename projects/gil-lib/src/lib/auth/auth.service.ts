import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Auth } from "./auth.model";

const AUTH_RESOURCE_URL = 'https://qbotech-gil-api.herokuapp.com/api/v1/userauthentications/login'

@Injectable()
export class AuthService {
  constructor(
    private httpClient: HttpClient
  ) { }

  async login(credentials: Auth): Promise<Observable<any>> {

    const headers = { 'content-type': 'application/json' }
    console.log(`${credentials} desde GIL-LIB`)
    return this.httpClient.post(AUTH_RESOURCE_URL, credentials)
  }
}
