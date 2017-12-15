import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';
import { Note } from './note';

@Injectable()
export class NoteService {
  noteObserver = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  createNote(note: any) {
    this._http.post('/create', note).subscribe(
      (response) => this.getAll(),
      errorResponse => console.log(errorResponse)
    );
  }

  getAll() {
    this._http.get('/all').subscribe(
      (response: any) => {
        this.noteObserver.next(response);
      },
      (errorResponse) => console.log(errorResponse)
    );
  }

  getNote(id: string) {
    return this._http.get('/note/' + id)    
  }

  updateNote(note: any) {
    console.log("in service");
    console.log(note);
    return this._http.put('/note/'+note._id, note)
  }

  deleteNote(id: string){
    console.log("in service"+id);
    return this._http.delete('/note/'+id).subscribe(
      (result : any) => this.getAll()
    )
  }
}
