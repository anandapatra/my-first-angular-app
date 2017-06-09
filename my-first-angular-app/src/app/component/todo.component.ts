import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToDoService} from '../service/todo.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html', 
  providers: [ToDoService]

})
@Injectable()
export class TodoComponent {

    name : string;
    email : string;
    phonenumber : string;  
    student: Student;
    title: string;
    body: string;
    address:Address;
    entries : Student[];
    toDoService;
    message : string = '';
   
    constructor(private todoService : ToDoService ) {
        console.log('Student Component Intialized..')
        this.name = 'Ananda Patra';
        this.email = 'patra.ananda@gmail.com';
        this.phonenumber = '+1-721-666-7238';
        this.toDoService = todoService;
        this.entries =[]; 

        todoService.getPosts().subscribe( posts => {
            console.log(posts);
        });
                  
    } 
  
    postData() {
        console.log("Posting Data to Server");
        this.todoService.doPost(); 
        console.log("Data is posted");      
                
                // this.body = results.body;
                // this.title = results.title;

        this.message ="Data Successfully Added!";
        
    }

    saveData(form : NgForm) {
        console.log('Calling Save Data' , form.value);
        this.student = {
            firstname: '',
            emailId:'',
            phoneNumber:'',
            address: {
                streetAddress1: '',
                streetAddress2: '',
                city: '',
                county: '',
                state:'',
            }
        }  
        this.student.firstname = form.value.firstName;
        this.student.emailId = form.value.emailId;
        this.student.phoneNumber = form.value.phoneNumber;
        this.student.address.streetAddress1 = form.value.streetAddress1;
        this.student.address.streetAddress2 = form.value.streetAddress2;
        this.student.address.city = form.value.city;
        this.student.address.county = form.value.county;
        this.student.address.state = form.value.state;


        this.entries.push(this.student);

        console.log(this.entries);

         this.message ="Data Successfully Added!";

         this.reset (form);
        
    }  

    reset (form: NgForm) {
        console.log("resetting the data");
        // form.value.emailId = '';
        // form.value.firstName = '';
        // form.value.phoneNumber ='';
        // form.value.streetAddress1 ='';
        // form.value.streetAddress2 ='';
        // form.value.city ='';
        // form.value.county ='';
        // form.value.state = '';
    }  

    deleteEntry(i: number) {
         console.log("index of the row is  ",i)
         this.entries.splice(i,1);

    }
}

export interface Student {
    firstname : string;
    emailId : string;
    phoneNumber : string;
    address : Address;
}

export interface Address {
    streetAddress1:string
    streetAddress2:string;
    city: string;
    county: string;
    state:string;
}

