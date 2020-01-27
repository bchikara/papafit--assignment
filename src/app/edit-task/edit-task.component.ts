import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../Service/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router,private route:ActivatedRoute) { }
  phone;
  name;
  description;
  url;
  email;
  number;
  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') 
    if(this.id){
     console.log();
     this.service.getTask(this.id).subscribe(res=>{
       console.log(res.payload.val())
       this.name=res.payload.val()['name']
       this.url=res.payload.val()['url']
       this.email=res.payload.val()['email']
       this.phone=res.payload.val()['number']
       this.description=res.payload.val()['description']
     })
    }
  }

  submit(value){
    let number={
      name:this.name,
      date:new Date().getTime(),
      description:this.description,
      url:this.url,
      number:this.phone,
      email:this.email,
      important:false
    }
    console.log(number)
    if(this.id)
    this.service.update(number,this.id);
    else
    this.service.add(number);

    this.router.navigate(['/'])
    }




}
