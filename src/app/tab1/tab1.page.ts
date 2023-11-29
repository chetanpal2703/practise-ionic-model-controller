import { Component ,ViewChild} from '@angular/core';
import { IonInput } from '@ionic/angular';
import {  FormBuilder, FormGroup, } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModelcomponentComponent } from '../modelcomponent/modelcomponent.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  modelinput:any;
  testing:any;
  @ViewChild('myInput') Input!: IonInput ;
  ionicForm: FormGroup;
  formdata:any;
  constructor(public formBuilder: FormBuilder,private modalCtrl: ModalController) {
    this.ionicForm = this.formBuilder.group({
      productname:"",
      productprice:"",
      productquantity:"",
      productdiscount:""
    });
  }
  myfunction(){
    console.log(this.Input.value);
    this.testing=this.Input.value;
    console.log(this.testing)

  }
  mynewfunction(){
    console.log(this.modelinput,"via ngmodel")
  }
  async openModal() {
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
    const modal = await this.modalCtrl.create({
      component: ModelcomponentComponent,
      componentProps: { value: this.formdata },
      // componentProps: { value: {names:"vishaka Mam",age:"don't know",departement:"ionic",Experience:"More than 2 years "} }
    });
    modal.present();
  }
  // referncefunction(inputEL:HTMLInputElement){

  // }
  //   submitForm = () => {
  //   console.log("inside submit form")
  //   if (this.ionicForm.valid) {
  //   let user = {
  //     productname:this.ionicForm.value.productname,
  //     productprice:this.ionicForm.value.productprice,
  //     productquantity:this.ionicForm.value.productquantity,
  //     productdiscount:this.ionicForm.value.productdiscount,
  //   }
  //   console.log(user,"user")
  //   this.formdata=user;
  //   console.log(this.formdata,"formdata")
  //   console.log(JSON.stringify(user),"stringify")
  //   }  
  // };

}
}

