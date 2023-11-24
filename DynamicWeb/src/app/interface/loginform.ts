
export interface FormField {
  data: FormFieldJSON[];
  // formControls: IFormControl[];
  // formTitle?: string;
  // saveBtnTitle?: string;
  // resetBtnTitle?: string;
  //  imageUrl?: string;
}

export interface FormFieldJSON {
  name: string;
  label: string;
  value: string;
  // placeholder: string
  // class: string
  type: string;
  validators: ValidatorJSON[];
  options : OptionJSON[];
}

export interface ValidatorJSON {
  // validatorName: string
  // message?: string
  required?: boolean;
  email?:boolean;
  minLength?:boolean;
  maxLength?:boolean;
  pattern?:string;
}
export interface OptionJSON{
  label:string;
  value:string;

}
