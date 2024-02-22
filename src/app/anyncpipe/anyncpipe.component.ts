import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anyncpipe',
  templateUrl: './anyncpipe.component.html',
  styleUrls: ['./anyncpipe.component.css']
})
export class AnyncpipeComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

      this.users = this.http.get('https://jsonplaceholder.typicode.com/users')

  }
}
