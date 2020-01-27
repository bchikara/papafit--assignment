import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  keySubscription: Subscription
  filteredStates;

  tasks;
  keys = [];
  keys1;

  constructor(public service: ServiceService,public router:Router) {
  }

  ngOnInit() {
    this.service.getTasks().subscribe(res => {
      this.keys1 = this.keys = [...Object.keys(res.payload.val())]
      console.log(res.payload.val())
      this.tasks = res.payload.val()
      this.sortByName()
    })    
  }

 

  sortByName() {
    this.keys.sort((a, b) => {
      if (this.tasks[a].name < this.tasks[b].name) { return -1; }
      if (this.tasks[a].name > this.tasks[b].name) { return 1; }
      return 0;
    })
  }

  edit(id){
    this.router.navigate(['/edit/'+id])
  }

  delete(id){
    this.service.remove(id)
  }

  update(id,value){
    this.service.updateImportant(id,value)
  }

  filter(query: string) {
    let q = query.toLowerCase();
    console.log(q)
    this.keys = this.keys1;
    this.keys = (query) ?
      this.keys.filter(p => this.tasks[p].name.toLowerCase().includes(q)) : this.keys1;
  }





}
