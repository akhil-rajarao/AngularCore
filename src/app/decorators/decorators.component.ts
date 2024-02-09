import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.css'
})
export class DecoratorsComponent {
dataFromDecorator = "decorator Data"
datatochild = "this is from parent header"
@Output() decoratoremitter = new EventEmitter()
passtoAppcomponent = ()=>{
  this.decoratoremitter.emit(this.dataFromDecorator)
}
updatetext = ()=>{
  this.datatochild = "data updated in parent and reflected in child and displayed in parent componenet"
}
}
