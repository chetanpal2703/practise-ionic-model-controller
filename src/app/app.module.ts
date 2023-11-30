import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ModelcomponentComponent } from './modelcomponent/modelcomponent.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { Tab1Page } from './tab1/tab1.page';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent,ModelcomponentComponent],
  imports: [BrowserModule, IonicModule.forRoot({ scrollAssist: false }), AppRoutingModule,FormsModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
