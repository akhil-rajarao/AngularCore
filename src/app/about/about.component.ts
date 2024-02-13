import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private newts:TestServiceService){}
  newMobiles = this.newts.mobileName
}
