import { ComponentInsideModuleComponent } from './new-module/component-inside-module/component-inside-module.component';
import { NgModule, Component } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { CustomPipePipe } from './custom-pipe.pipe';
import { DecoratorsComponent } from './decorators/decorators.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TestServiceService } from './test-service.service';
import { Homechild1Component } from './homechild1/homechild1.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponentComponent } from './form-component/form-component.component';
import { AnyncpipeComponent } from './anyncpipe/anyncpipe.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewModuleModule } from './new-module/new-module.module';

const customRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'home',
    component: HeaderComponent,
    children: [
      {
        path: 'homechild1',
        component: Homechild1Component,
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },

  {
    path: 'about/:id',
    component: AboutComponent,
  },

  {
    path: '**',
    component: DecoratorsComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomPipePipe,
    DecoratorsComponent,
    FooterComponent,
    AboutComponent,
    ContactUsComponent,
    Homechild1Component,
    FormComponentComponent,
    AnyncpipeComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(customRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    NewModuleModule,
  ],
  providers: [provideClientHydration(), TestServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
