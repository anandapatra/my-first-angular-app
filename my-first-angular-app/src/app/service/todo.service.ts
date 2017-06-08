import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ToDoService {
    constructor (private http: Http) {
        console.log("Service Initialized");
    }

    getPosts() {
        return this.http.get(' https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    }
    
    // call is from the component and then subscribe to retrieve the response.
    doPost() {
//         let body = {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   };
        let body = {
    "id": 4,
    "name": "Ankush",
    "streetAddress": "119 Winding Wood Dr",
    "phoneNumber": "732-308-5995"
};
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     //    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');

        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post('http://localhost:8080/students/add', body, options); // ...using post request
                        

    }

}