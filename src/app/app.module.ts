import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AfterBuyingAssistanceComponent } from './after-buying-assistance/after-buying-assistance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AfterBuyingAssistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
