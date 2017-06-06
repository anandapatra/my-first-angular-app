import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'  
})
export class TodoComponent {

    name : string;
    email : string;
    phonenumber : string;  
    student: Student; 
    entries : Student[];
   
    constructor() {
        console.log('Student Component Intialized..')
        this.name = 'Ananda Patra';
        this.email = 'patra.ananda@gmail.com';
        this.phonenumber = '+1-721-666-7238';
        this.student = {
            firstname: '',
            emailId:'',
            phoneNumber:''
        }  
        this.entries =[];        
    } 

    saveData(form : NgForm) {
        console.log('Calling Save Data' , form.value);
        this.student.firstname = form.value.firstName;
        this.student.emailId = form.value.emailId;
        this.student.phoneNumber = form.value.phoneNumber;

        this.entries.push(this.student);

        console.log(this.entries);
        
    }    

    deleteEntry(i: number) {
         console.log("index of the row is  ", i);
         this.entries.splice(i, 1);
    }
}

export interface Student {
    firstname : string;
    emailId : string;
    phoneNumber : string;
}

