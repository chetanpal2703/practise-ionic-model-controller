import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs';
import { usingService } from '../services/myservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ionicForm: FormGroup;
  data:any;
  showdata:any;
  constructor(public formBuilder: FormBuilder,private http:HttpClient,private navCtrl: NavController) {
    this.ionicForm = this.formBuilder.group({
      productname:"",
      productprice:"",
      productquantity:"",
      productdiscount:""
    });
  }
  // ngOnChanges(){
  //   this.makingrequest();
  // }
  makingrequest(){
    console.log("just making a  post request");
    this.http.post('https://checkingnew-4006b-default-rtdb.firebaseio.com/products.json',this.data).subscribe((res)=>{
      console.log(res);
    })
    // this.http.post('https://angularprocdemy-default-rtdb.firebaseio.com/products.json',this.data).subscribe((res)=>{
    //   console.log(res);
    // });
    // console.log("made a post request");
  }
  fethingdetails(){
    this.http.get('https://checkingnew-4006b-default-rtdb.firebaseio.com/products.json').pipe(map((res)=>{
      console.log(res,"responce before transformation")
      // return res;
      const products=[];
      for(const key in res){
        console.log(key,"keyy")
        console.log(res[key])
        products.push(res[key])
        // console.log({...res[key]})
        // products.push({...res[key],id:key})
      }
      return products;
    })).subscribe((res)=>{
      console.log(res,"getting data from firebase using get api");
      this.showdata=res;

    })
  }

  formdata(){
    console.log(this.ionicForm.value,"getting data of form ")
    this.data=this.ionicForm.value;
    console.log(this.data)
    this.makingrequest();
    
    console.log("hi")
    this.ionicForm.reset();
  }


  getdataviaservice(){
    let subservice=new usingService();
    subservice.getdataviaservice();
  }

}
