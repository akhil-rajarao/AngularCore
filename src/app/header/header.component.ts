import { TestServiceService } from './../test-service.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { emit } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private r: Router, public ts: TestServiceService) {}
  showChild = () => {
    this.r.navigate(['home/homechild1']);
  };
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
  onclicking = (el: any) => {
    console.log(el.control.value);
  };
}
