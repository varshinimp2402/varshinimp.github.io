import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  
  template: `
    <h2>
    Welcome {{ name }}
    </h2>
    <input #myVar type="text">
    <button (click)="logMessage(myVar.value)">Log</button>
    {{greeting}}
    <h2 *ngIf="true; else elseblock"> CodeEvolution </h2>
    <ng-template #elseblock>
    <h2> Now you know</h2>
    </ng-template>
    <div [ngSwitch]="color">
      <div [style.color] = "'red'" *ngSwitchCase = "'red'"> You chose Gobi Manchurian </div>
      <div [style.color] = "'orange'" *ngSwitchCase = "'yellow'"> You chose MasalaPuri </div>
      <div [style.color] = "'green'" *ngSwitchCase = "'green'"> You chose Golgappa </div>
    </div>
  `
  ,
  styles: []
})
export class TestComponent implements OnInit{
public name ="Varsh";
public hasError = false;
public isSpecial = true;
public greeting = "";
public color = "green";

  logMessage(value: any){
    console.log(value);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
