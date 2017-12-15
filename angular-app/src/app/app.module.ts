import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoteNewComponent } from './note-new/note-new.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteService } from './note.service';
import { NoteEditComponent } from './note-edit/note-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteNewComponent,
    NoteListComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
