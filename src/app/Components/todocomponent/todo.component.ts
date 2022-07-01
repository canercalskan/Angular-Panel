import { Component } from '@angular/core';
import { Model } from '../model';
@Component({
  selector: 'todo', // <todo></todo>
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class ToDoComponent {
  //declaring the days array to match them with the getDay() function's return value.
  days = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
  //declaring a constructor for literally no purpose
  constructor() {}
  model = new Model();
  inp = document.getElementById('input');
  addItem(input: any) {
    //creating an date element 
    let date = new Date();
    //calculating the stringal representation of a return value of a getDay() function
    let day = this.days[date.getDay()-1]
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let fullDate = day + ', ' + hours + ':' + minutes;

    //not allowing the user to enter an empty data
    //we could use required tag easily, but i just wanted to do it this way.
    if (input.value.length === 0) {
      alert('Enter some data');
    } else {
      this.model.items.push({ description: input.value , done:false , id: Math.acos(Math.random()) * 100 , date : fullDate.toString()});
      
    }
    //reseting the input field after the user clicked at the add new item button 
    input.value = '';
  }
  display = false;
  //this handler function determines the value of a boolean display variable,
  //if it is false when the user has clicked at the add new item button, it will be reversed to false and same for the otherwise.
  displayAllHandler() {
    if (this.display === false) {
      this.display = true;
    } else if (this.display === true) {
      this.display = false;
    }
  }
  //this function will simply display the list of items, each <li> item in the list according to the display boolean variable's value.
  getItems() {
    if (this.display) return this.model.items;
    else {
      return;
    }
  }
  doneCounter = 0;
  itemDone(item:any) {
    console.log(item.id + ' done ' )
    console.warn(item)
    console.error(item.description)
    if(!item.done) {
      this.doneCounter++;
      item.done = true;
    }
    else if(item.done) {
      //counter cannot be lower than 0.
      if(this.doneCounter > 0) {
        this.doneCounter--;
      }
      else {
        this.doneCounter = 0;
      }
      item.done = false;
    }
  }

  clearAllInputs() {
    this.model.items.length = 0;
   }

  deleteItem(item:any) {
    //filtering the items array in order to update the list by checking the id of each item
    this.model.items = this.model.items.filter(i => i.id != item.id) 
    //counter cannot be lower than 0.
    if(this.doneCounter > 0) {
    this.doneCounter--
    }

    else {
      this.doneCounter = 0;
      
    }
  }
}
