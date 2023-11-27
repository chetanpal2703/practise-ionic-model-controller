import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ionicForm: FormGroup;
  formdata:any;
  constructor(public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      productname:"",
      productprice:"",
      productquantity:"",
      productdiscount:""
    });
  }
  submitForm = () => {
    console.log("inside submit form")
    if (this.ionicForm.valid) {
    let user = {
      productname:this.ionicForm.value.productname,
      productprice:this.ionicForm.value.productprice,
      productquantity:this.ionicForm.value.productquantity,
      productdiscount:this.ionicForm.value.productdiscount,
    }
    console.log(user,"user")
    this.formdata=user;
    console.log(this.formdata,"formdata")
    console.log(JSON.stringify(user),"stringify")
    }  
  };

}
