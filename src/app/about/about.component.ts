import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  queryName:any;
  constructor(
    private route: ActivatedRoute,
    private newts: TestServiceService
  ) {


    this.route.queryParamMap.subscribe((query)=>{
      let names = query.get("name")
      if (names) {
        alert(names)
      }
    })
  }


  uservalue: any;
  usernames: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let userId = params.get('id');
      let dsbsdgb = params.get('name');
      if (dsbsdgb) {
        this.queryName = dsbsdgb;
      }

      this.queryName = dsbsdgb;
      console.log(userId);
      console.log(this.queryName);
      this.uservalue = userId;
      this.usernames = this.newts.userDetails.find((e) => e.id == userId);
    });

  }
  newMobiles = this.newts.mobileName;
}
