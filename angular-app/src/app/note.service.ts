import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Note } from './note';

@Injectable()
export class NoteService {
  noteObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  createNote(note: any){   
    this._http.post('/create', note).subscribe(
      (response) => this.getAll(),
      errorResponse => console.log(errorResponse)
    );
  }

  getAll(){   
    this._http.get('/all').subscribe(
      (response: any) => {        
        this.noteObserver.next(response.json());
      },
      (errorResponse) => console.log(errorResponse)
    );
  }

}
