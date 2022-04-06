import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  gridData='grid table data';
  title = 'intern';


  outputData:string|undefined;

  addItem(data:string): void{
    this.outputData=data;
  }
  
  ngOnInit(){
  console.log("ng on inti called");
  }

}
