import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note';


@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  note:any = new Note();
  constructor(private _service: NoteService, private _route: ActivatedRoute, private router:Router) { }

  onSubmit(){
    this._service.updateNote(this.note).subscribe(
      (result) => {this.router.navigate([""])
    this._service.getAll()}
    )
    

  }
  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._service.getNote(params.get('id')).subscribe(
        (result) => {this.note = result
        console.log(this.note)}
      )
    })
  }

}
