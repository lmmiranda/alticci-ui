import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlticciComponent } from './alticci/alticci.component';
import { AlticciService } from './alticci/alticci.service';


@NgModule({
  declarations: [
    AppComponent,
    AlticciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlticciService],
  bootstrap: [AppComponent]
})
export class AppModule { }
