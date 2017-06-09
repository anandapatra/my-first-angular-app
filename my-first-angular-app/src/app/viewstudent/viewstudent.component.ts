import { Component, OnInit } from '@angular/core';
import {TodoComponent} from '../component/todo.component';
import {ToDoService} from '../service/todo.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styles: [],
  providers: [TodoComponent, ToDoService]
})
export class ViewstudentComponent implements OnInit {
  entries : Student[];
  student : Student;
  constructor(private tocomponent : TodoComponent) { 
         console.log('ViewstudentComponent intialized');
         console.log(tocomponent.entries);
         this.entries = tocomponent.entries;
        for (var i = 1; i <5; i++ ) {
          this.student = {
            firstname: 'Ananda',
            emailId:'Patra.ananda@yahoo.in',
            phoneNumber:'1123124',
            address: {
                streetAddress1: '116 Winding Wood Dr',
                streetAddress2: '2A',
                city: 'Sayreville',
                county: 'USA',
                state:'NJ',
            }
        } 

        this.entries.push(this.student); 
  }

}

 deleteEntry(i: number) {
         console.log("index of the row is  ",i)
         this.entries.splice(i,1);

}



  ngOnInit() {
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