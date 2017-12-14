import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes;
  constructor(private _service:NoteService) { }

  ngOnInit() {
    this._service.noteObserver.subscribe(
      (result) => this.notes = result   
    
    );   
    this._service.getAll();
  }

}
