import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { CustomPipePipe } from './custom-pipe.pipe';
import { DecoratorsComponent } from './decorators/decorators.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomPipePipe,
    DecoratorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
