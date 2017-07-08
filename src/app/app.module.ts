import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { MdToolbarModule, MdMenuModule, MdIconModule,  } from '@angular/material';
import { HttpModule } from '@angular/http';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdButtonModule,MdCardModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { AboutComponent } from './about/about.component';
import { TyruSeaComponent } from './tyru-sea/tyru-sea.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainCaruselComponent } from './main-carusel/main-carusel.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainUkrComponent } from './main-ukr/main-ukr.component';
import { SmallCaruselComponent } from './small-carusel/small-carusel.component';
import { VideoComponent } from './video/video.component';
import { SocSetiComponent } from './soc-seti/soc-seti.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TyruSeaComponent,
    HeaderComponent,
    FooterComponent,
    MainCaruselComponent,
    MainContentComponent,
    MainUkrComponent,
    SmallCaruselComponent,
    VideoComponent,
    SocSetiComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdCardModule,
    MdIconModule,
    routes
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
