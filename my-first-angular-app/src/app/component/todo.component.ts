import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'  
})
export class TodoComponent {

    name : string;
    email : string;
    phonenumber : string;
   
    constructor() {
        console.log('Student Component Intialized..')
        this.name = 'Ananda';
        this.email = 'patra.ananda@gmail.com';
        this.phonenumber = '+1-721-666-7238';      
    } 
}

interface address {
    city : string;
    state : string;
}
