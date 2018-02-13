//test

import {  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild } from '@angular/core';

@Component({
  selector: 'app-component-data-sharing',
  templateUrl: './component-data-sharing.component.html',
  styleUrls: ['./component-data-sharing.component.css'],
  //encapsulation:ViewEncapsulation.native None Emulated(default)
})
export class ComponentDataSharingComponent implements   OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  element: {type: string, name: string, content: string};
   name: string;
  header="test";
   paragraph="test";
  constructor() { }


    ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges called!');
      console.log(changes);
    }

    ngOnInit() {
      console.log('ngOnInit called!');
      console.log('Text Content: ' + this.header);
      console.log('Text Content of paragraph: ' + this.paragraph);
    }

    ngDoCheck() {
      console.log('ngDoCheck called!');
    }

    ngAfterContentInit() {
      console.log('ngAfterContentInit called!');
      console.log('Text Content of paragraph: ' + this.paragraph);
    }

    ngAfterContentChecked() {
      console.log('ngAfterContentChecked called!');
    }

    ngAfterViewInit() {
      console.log('ngAfterViewInit called!');
      console.log('Text Content: ' + this.header);
    }

    ngAfterViewChecked() {
      console.log('ngAfterViewChecked called!');
    }

    ngOnDestroy() {
      console.log('ngOnDestroy called!');
    }

}
