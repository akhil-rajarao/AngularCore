import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  constructor(private r: Router, private http: HttpClient) {}
  recievedData:any;
  getRequest = () => {
    this.http
      .get('https://fakestoreapi.com/products?limit=5')
      .subscribe((data) => {
        console.log(data);
        this.recievedData = data;
      });
  };
  moveToHome = () => {
    this.r.navigate(['/home']);
  };
}
