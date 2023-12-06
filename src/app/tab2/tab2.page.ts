import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  apidata:any;
  ngOnInit(){
      this.fetchproducts()
  }
  constructor(private http:HttpClient){
    this.http.get('https://dummyjson.com/products').subscribe(response =>{
      this.apidata=response;
      console.log(this.apidata,"before")
      this.apidata = this.apidata.map(item => ({
        ...item,
        showMore:false,
      }));
      console.log(this.apidata,"after");
    });
    console.log("using the firebase ")
    // --------------->>>>>>>>>>>>>>sending data using  firebase(angularprocademy) <<<<<<<<<--------------------------------


    // this.http.post('https://angularprocdemy-default-rtdb.firebaseio.com/products.json',{Name:"iphone",price:"100000",model:"xyz"}).subscribe((data)=>{
    //   console.log(data)
    // });
  }
  private fetchproducts(){
    this.http.get('https://angularprocdemy-default-rtdb.firebaseio.com/products.json').pipe(map((res)=>{
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
    })
  }
  trimString(string, length){
      return string.length > length ? 
          string.substring(0, length) + '...' :
          string;
  }
}
