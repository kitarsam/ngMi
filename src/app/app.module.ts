import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { SommeComponent } from './components/somme/somme.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { AmpouleComponent } from './directives/ampoule/ampoule.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowComponent } from './directives/rainbow/rainbow.component';
import { RainbowDirective } from './directives/rainbow.directive';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeAr from '@angular/common/locales/ar';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import { EmbaucheComponent } from './cv/components/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { AuthentificationInterceptorProvider } from './auth/interceptor/auth.interceptor';

registerLocaleData(localeFr);
registerLocaleData(localeAr);

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    SommeComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    NgStyleComponent,
    MiniWordComponent,
    AmpouleComponent,
    HighlightDirective,
    RainbowComponent,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    NavbarComponent,
    DetailCvComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    AddCvComponent,
    TestObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [
    /* [{ provide: LOCALE_ID, useValue: 'ar-AR' }] */
    AuthentificationInterceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
