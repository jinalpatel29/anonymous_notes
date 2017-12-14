import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  newNote:Note = new Note();
  constructor(private _service: NoteService) { }

  onSubmit(note: Note){
    this._service.createNote(this.newNote);
    this.newNote = new Note();
  }

  ngOnInit() {
  }

}
