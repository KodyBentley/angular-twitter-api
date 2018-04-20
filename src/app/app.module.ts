import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { ParticlesModule } from 'angular-particle';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { TweetsComponent } from './tweets/tweets.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SearchComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    ParticlesModule
  ],
  providers: [HttpService, SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
