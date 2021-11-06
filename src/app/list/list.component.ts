import { ɵparseCookieValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

class Task{
  todo:any;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('tasks')!== null){
    this.taskList = JSON.parse(localStorage.getItem('tasks'));
    }else{
      this.taskList= [];
    }
  }



  inputTask: any;

  error:string;
  

  taskList: Task[] = [
  ]

  onAdd(){

    let task = new Task();

    task.todo=this.inputTask;

    if(task.todo){
      this.taskList.push(task);
      this.error= "";
      localStorage.setItem('tasks',JSON.stringify(this.taskList)); 
    }else{
      this.error= "This field must be completed"
    }

    
    console.log(task);
  }


  onDelete(i){

    const index = this.taskList.indexOf(i);

    this.taskList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));

  }



}//NE RIEN ECRIRE EN DESSOUS
