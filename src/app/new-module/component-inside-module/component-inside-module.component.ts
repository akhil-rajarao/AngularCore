import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-component-inside-module',
  templateUrl: './component-inside-module.component.html',
  styleUrl: './component-inside-module.component.css',
})
export class ComponentInsideModuleComponent implements OnChanges, OnInit, DoCheck {
  @Input() cdatat: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes called', changes);
  }

  ngOnInit(): void {
    console.log(this.cdatat);
  }
  ngDoCheck(): void {
    console.log("co check called")
  }
}
