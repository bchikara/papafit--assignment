import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private dB: AngularFireDatabase) { }
  
  add(value){ 
    console.log(value)
    return this.dB.list('/phone').push(value)
  }

  update(task,key){
    let items = this.dB.object('/phone/' + key);
    items.update({ 'name': task.name,'url':task.url,'description':task.description,'date':task.date })
  }

  remove(key){
    return this.dB.list('/phone/' + key).remove();
  }

 

  getTasks(){
    return this.dB.object('/phone').snapshotChanges()
  }

  updateImportant(key,value){
    let items = this.dB.object('/phone/' + key);
    items.update({ 'important': !value })
  }

  getTask(key){
    return this.dB.object('/phone/'+key).snapshotChanges()
  }

}
