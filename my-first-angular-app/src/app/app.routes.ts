import {Routes, RouterModule} from '@angular/router';

import { TodoComponent } from './component/todo.component';
import {ViewstudentComponent } from './viewstudent/viewstudent.component';


const approutes : Routes = [
   {path:'', redirectTo:'/adddata', pathMatch: 'full'},
   {path:'adddata', component: TodoComponent},
   {path:'viewdata', component:ViewstudentComponent}  
];

export const routing = RouterModule.forRoot(approutes);
