import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiemthiComponent } from './components/diemthi/diemthi.component';
import { LichthiComponent } from './components/lichthi/lichthi.component';
import { TkbComponent } from './components/tkb/tkb.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DiemthiComponent,
    LichthiComponent,
    TkbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'tkb', component:TkbComponent},
      {path: 'lichthi', component: LichthiComponent},
      {path: 'diemthi', component: DiemthiComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
