import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { PersonaleListaComponent } from './components/personale-lista/personale-lista.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { PersonaleDetailComponent } from './components/personale-detail/personale-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaleListaComponent,
    HomePageComponent,
    HeaderComponent,
    PostsComponent,
    PersonaleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
