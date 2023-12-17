import { Component } from '@angular/core';
import { NoteservService } from './noteserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp1';
  text='';
  note:string='';
  notes:string[]=[];
  cond:boolean=false;
  constructor(private service:NoteservService){}
  ajouter(){
    this.service.ajouternot(this.note);
    this.note='';
  }
  afficher(){
    if (this.cond==false){
      this.notes=this.service.notes;
      this.cond=true;
    }
    else{
      this.notes=[];
      this.cond=false;}
    }
    effacertout(){
      this.service.effacertous();
    }
    supprimer(i:number){
      this.service.deleteNote(i);
    }

}
