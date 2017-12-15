import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
  path:'edit/:id',
  pathMatch: 'full',
  component: NoteEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
