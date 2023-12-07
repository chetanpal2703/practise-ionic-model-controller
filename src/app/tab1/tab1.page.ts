import { Component ,ViewChild, afterNextRender} from '@angular/core';
import { IonInput } from '@ionic/angular';
import {  FormBuilder, FormGroup, } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModelcomponentComponent } from '../modelcomponent/modelcomponent.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    modelinput:any;
    testing:any;
    observablearray:any[]=[];
    sendingdatatohttp:any;         
    @ViewChild('myInput') Input!: IonInput ;
    ionicForm: FormGroup;
    formdata:any;
    constructor(public formBuilder: FormBuilder,private modalCtrl: ModalController,private http:HttpClient,private navCtrl: NavController) {
      this.ionicForm = this.formBuilder.group({
        productname:"",
        productprice:"",
        productquantity:"",
        productdiscount:""
      });

    //   this.http.post('https://ionic-angular-project-4eae1-default-rtdb.firebaseio.com/offered-project.json',{price:"5000",product:"bulb",brand:"syska"}).subscribe((response)=>{
    //   console.log("data stored successfully", response)
    // },(error)=>{
    //   console.error('Error storing data:', error);
    // });

    this.http.get('https://dummyjson.com/products').subscribe(response =>{
      console.log(response)
    })

    }
    observ=new Observable((obs)=>{
      obs.next(1);
      obs.next(2);
      obs.next(3);
      obs.next(4);
      obs.next(5);

    })

    getDataViaObservable(){
      this.observ.subscribe({
        next:(val:any)=>{
          console.log("came")
          this.observablearray.push(val);
          console.log(this.observablearray,"dat");
        },
        error(err){
          console.log(err);
        },
        complete(){
          console.log("all data received ")
        }
      }
      )
    }
    navigatetotab(){
      this.navCtrl.navigateForward('/tabs/tab2');
    }
      myfunction(){
        console.log(this.Input.value);
        this.testing=this.Input.value;
        console.log(this.testing)
      }
      mynewfunction(){
        console.log(this.modelinput,"via ngmodel")
      }
      postDataToFirebase() {
        console.log("inside postdatatofirebase")
        const data = { price: '5000', product: 'mixer', brand: 'sujata'};
    
        this.http.post('https://your-firebase-project.firebaseio.com/offered-project.json', data)
          .subscribe(
            (response) => {
              console.log('Data stored successfully', response);
            },
            (error) => {
              console.error('Error storing data:', error);
            }
          );
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

