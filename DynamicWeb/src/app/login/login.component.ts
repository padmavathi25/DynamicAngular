import { Component } from '@angular/core';
import { FormField, FormFieldJSON } from '../interface/loginform';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../Service/formservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formFields : FormFieldJSON[]=[];
  dynamicForm = this.fb.group({});

  constructor(private formservice : FormService,private fb : FormBuilder){}
  ngOnInit(): void {
    this.getDynamicFormFields()
  }

  getDynamicFormFields(){
    this.formservice.getFormFields().subscribe(
     (response:FormField)=>{
      this.formFields= response.data;
      this.setDynamicForm(response.data)
     }
    )
  }

  setDynamicForm(controls:FormFieldJSON[]){
    for(const control of controls){
      this.dynamicForm.addControl(control.name , this.fb.control(control.value))
    }
  }

  saveForm(){
    console.log(this.dynamicForm.value)
  }

}
