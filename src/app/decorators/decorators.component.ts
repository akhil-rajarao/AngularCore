import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
  ViewChildren

} from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.css',
})
export class DecoratorsComponent {
  ngAfterViewInit() {
    // console.log(this.childvalue.nativeElement);
    console.log(this.cd._results)
  }
  @ViewChild(HeaderComponent) child: any;
   @ViewChildren("childheading")cd:any
  dataFromDecorator = 'decorator Data';
  datatochild = 'this is from parent header';
  @Output() decoratoremitter = new EventEmitter();
  @ViewChild('childComponent') childvalue: any;
  passtoAppcomponent = () => {
    this.decoratoremitter.emit(this.dataFromDecorator);
  };
  gethtmlvalue = () => {
    this.childvalue.nativeElement.style.color == 'red'
      ? (this.childvalue.nativeElement.style.color = 'green')
      : (this.childvalue.nativeElement.style.color = 'red');
  };
  updatetext = () => {
    this.datatochild =
      'data updated in parent and reflected in child and displayed in parent componenet';
  };
}
