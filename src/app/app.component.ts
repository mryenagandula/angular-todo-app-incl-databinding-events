import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos = [
    {
      id: 1,
      name: 'Complete Angular',
      description:'Follow youtube and medium totorials and complete the tutorial'
    },
    {
      id: 2,
      name: 'Complete Java',
      description:'Follow youtube and medium totorials and complete the tutorial'
    },
    {
      id: 3,
      name: 'Complete Spring',
      description:'Follow youtube and medium totorials and complete the tutorial'
    },
    {
      id: 4,
      name: 'Complete Hibernate',
      description:'Follow youtube and medium totorials and complete the tutorial'
    },
    {
      id: 5,
      name: 'Complete SQL',
      description:'Follow youtube and medium totorials and complete the tutorial'
    }
  ];

  public todoId: string | number;
  public todoName:string='';
  public todoDescription:string ='';

  constructor() {}

  public resetValues(){
    this.todoName= '';
    this.todoDescription ='';
  }

  public addTodo(){
    const number = this.randomNumber + this.randomNumber ;
    const todo = {
      id:number,
      name:this.todoName,
      description:this.todoDescription
    }
    this.todos.push(todo)
    this.resetValues();
  }

  public get randomNumber(){
    return Math.floor(Math.random() * 1000) + 1;
  }

  public removeTodo(id){
    this.todos =  this.todos.filter((todo) => todo.id !== id );
  }

  public editTodo(todo){
    this.todoId = todo.id;
    this.todoName = todo.name;
    this.todoDescription = todo.description;
  }

  public updateTodo(){
    this.todos.forEach((todo)=>{
      if(todo.id === this.todoId){
        todo.name= this.todoName;
        todo.description = this.todoDescription;
      }
    })

    this.resetValues();
    this.todoId=null;
  }
}
