import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'Demo-Application';
  titles: string = 'New application initilisation';
  timer: string = new Date().toLocaleTimeString();
  buttonhide: boolean = false;
  isactive: boolean = true;
  path: string = '../assets/img2.jpg';
  grass:boolean = false
  counter :number = 0
  city: string = "Hyderabad"
  name:any = "(input)=changeName($event)"
  increment = ()=>{
this.counter = this.counter + 1
}
decrement = ()=>{
  this.counter = this.counter -= 1
}

onchangeFunction =(e:any)=>{
 this.name = e.target.value
}

inputchangeFUnction = (e:any)=>{
  this.city = e.target.value
}

changecity = ()=>{
  this.city = this.city == "Bangalore" ? "Hyderabad" : "Bangalore"
}

}
