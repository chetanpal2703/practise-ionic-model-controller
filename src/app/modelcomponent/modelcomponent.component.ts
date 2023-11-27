import { Component, OnInit ,Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {  FormBuilder, FormGroup, } from '@angular/forms';
@Component({
  selector: 'app-modelcomponent',
  templateUrl: './modelcomponent.component.html',
  styleUrls: ['./modelcomponent.component.scss'],
})
export class ModelcomponentComponent  implements OnInit {
  @Input() value: any;
  name: any;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  ngOnInit() {
    console.log("inside the modelcomponent")
    console.log(this.value)
  }

}
