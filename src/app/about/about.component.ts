import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private newts: TestServiceService
  ) {}
  uservalue: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let userId = params.get('id');
      console.log(userId);
      this.uservalue = userId;
    });
  }
  newMobiles = this.newts.mobileName;
}
