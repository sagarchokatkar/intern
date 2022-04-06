import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit {
  
  @Input() item:string | undefined;
  @Output() itemEvent = new EventEmitter<string>();


  // <variable name>: datatype = value;
  constructor() {}
  ngOnInit(): void {

  }
  addNewItem(value:string){
   this.itemEvent.emit(value);

  }

}
