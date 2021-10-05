import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { NgxMaskModule } from 'ngx-mask';
import { UserDaoService } from './services/dao/user-dao.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [UserDaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
