import { Injectable } from '@angular/core';
import { FormField } from '../interface/loginform';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(public http : HttpClient) { }

  getFormFields(): Observable<FormField>{
    return this.http.get<FormField>('../../assets/mockJson/loginForm.json')
  }
}
