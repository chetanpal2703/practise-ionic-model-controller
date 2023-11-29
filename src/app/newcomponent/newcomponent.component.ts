import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, } from '@angular/core';
import { IonText } from '@ionic/angular';
@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.scss'],
})
export class NewcomponentComponent  implements OnInit {
  // @ContentChild('myInput') mycontent!:ElementRef;
 
  // @ContentChild('paragraph') checkingion!: IonText;
@ContentChildren('paragraph') checkingion!:QueryList<IonText>
  
  mydata:string="";
  constructor() { }

  // ngAfterContentInit() {
  //   console.log("inside ngAfterContentInit");
  //   console.log(this.mycontent);
  // }
  ngOnInit() {
    console.log("inside the ngonit")
  }
  
  clickbtn(){
    // console.log(this.mycontent.nativeElement.innerText,"clickbtn");
    // this.mydata=this.mycontent.nativeElement.innerText;
    // console.log(this.mydata)

    console.log(this.checkingion)
    this.checkingion.forEach((el)=>{console.log(el['el'].innerText)})
    // console.log(this.checkingion['el'].innerText,"chekingion")
  }

}
