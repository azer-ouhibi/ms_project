import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [NavBarComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr' // 'de' for Germany, 'fr' for France ...
     }]
  ,
  bootstrap: [AppComponent]
  
})
export class AppModule { }
