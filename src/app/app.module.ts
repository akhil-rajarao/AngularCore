import { NgModule, Component } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { CustomPipePipe } from './custom-pipe.pipe';
import { DecoratorsComponent } from './decorators/decorators.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { TestServiceService } from './test-service.service';

const customRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
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
  }

  ,{
    path: '**',
    component: DecoratorsComponent,
  }
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(customRoutes),
  ],
  providers: [provideClientHydration(),TestServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
