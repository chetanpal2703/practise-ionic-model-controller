import { Component, ContentChild, ElementRef, OnInit, } from '@angular/core';
import { IonText } from '@ionic/angular';
@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.scss'],
})
export class NewcomponentComponent  implements OnInit {
  @ContentChild('myInput') mycontent!:ElementRef;
  // @ContentChild('paragraph') checkingion!:IonText;
  @ContentChild('paragraph') checkingion!: IonText;
  // @ContentChild(IonText, { read: ElementRef }) ionTextContent!: ElementRef;
  
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
    console.log(this.mycontent.nativeElement.innerText,"clickbtn");
    this.mydata=this.mycontent.nativeElement.innerText;
    console.log(this.mydata)
    console.log(this.checkingion)
    console.log(this.checkingion['el'].innerText,"chekingion")
  }

}
