import { TestServiceService } from './../test-service.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public ts: TestServiceService) {}
  mobiles = this.ts.mobileName;
  changeName = () => {
    this.ts.mobileName = 'Upgraded to Apple';
  };
  @Input() place: any;
  area = 'chittoor';
  places: any = 'rayalaseema';
  changevillagename = (e: any) => {
    this.area = e.target.value;
  };
  buttonclick = () => {
    return (this.area = 'penumuru');
  };
  @Input() childTitle: any;

  childMessageToParent: string = 'this is from child component';
  msg: number = 32546;

  @Output() customEvent = new EventEmitter();

  passToParent = () => {
    this.customEvent.emit(this.childMessageToParent);
  };
}
