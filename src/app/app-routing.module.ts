import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: SearchComponent},
  {path: 'gallery', component: GalleryComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
