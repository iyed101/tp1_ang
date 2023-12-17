import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteservService {

  constructor() { }
  notes:string[]=[];
  ajouternot(note:string){
    this.notes.push(note);
  }
  effacertous(){
    this.notes=[];
  }
  deleteNote(i: number) {
    if (i >= 0 && i < this.notes.length) {
      this.notes.splice(i,1); 
      
    }
  }
}
