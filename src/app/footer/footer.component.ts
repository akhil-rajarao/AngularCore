import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  constructor(private ts: TestServiceService) {}
  userslisting: any;
  ngOnInit(): void {
    console.log('sdsdss');

    this.ts.usersArray.subscribe((data) => {
      console.log(data);
      this.userslisting = data
    });
    this.ts.sendusers();
  }
}
