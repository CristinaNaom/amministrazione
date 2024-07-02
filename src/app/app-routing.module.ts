import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaleListaComponent } from './components/personale-lista/personale-lista.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PersonaleDetailComponent } from './components/personale-detail/personale-detail.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: "", component:HomePageComponent
  },
  {
    path: "listaPersonale", component:PersonaleListaComponent
  },
  {
    path:"dettaglioPersonale/:id", component:PersonaleDetailComponent
  },
  {
    path:"posts/:id", component:PostsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
