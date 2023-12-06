import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  apidata:any;
  constructor(private http:HttpClient) {
    this.http.get('https://dummyjson.com/products').subscribe(response =>{
      this.apidata=response;
      console.log(this.apidata,"before")
      this.apidata = this.apidata.map(item => ({
        ...item,
        showMore:false,
      }));
      console.log(this.apidata,"after");
      
    });
  }
  trimString(string, length) {
    return string.length > length ? 
           string.substring(0, length) + '...' :
           string;
}
}
