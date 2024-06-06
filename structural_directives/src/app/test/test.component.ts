import { Component ,OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
     <h2 *ngIf="displayName;else elseBlock">
     Sathwika
    </h2>

    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>

    </ng-template> 

     <!-- #Example for ngIf in other way -->
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Sathwika</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>
    

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchCase="'yellow'">You picked yellow color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <div *ngFor="let color of colors,index as i">
      <h2>{{i}}{{color}}</h2>
    </div>
    <h1>{{"Hello" + parentData}}</h1>

    <button (click)="fireEvent()">Send Event</button>
    

    <!--Demo for pipes-->
    <h3>{{name}}</h3>
    <h3>{{name | lowercase}}</h3>
    <h3>{{name | uppercase}}</h3>
    <h3>{{message |titlecase}}</h3>
    <h3>{{name | slice:3:5}}</h3>
    <h4>{{person | json}}</h4>

    <h2>{{5.678 | number :'1.2-3'}}
    <h2>{{5.678 | number :'3.4-5'}}
    <h2>{{5.678 | number :'3.1-2'}}

    <h4>{{0.25 | percent}}</h4>

    <h4>{{0.25 | currency:'EUR'}}

    <h6>{{date}}</h6>
    <h6>{{date | date: 'short'}}</h6>
    <h6>{{date | date: 'shortDate'}}</h6>
    <h6>{{date | date: 'shortTime'}}</h6>

  `,
  styles:[]
})
export class TestComponent {
  public displayName=false;
  public color="yellow";
  public colors=["pink","violet","Blue","green","Yellow"];

  @Input() public parentData:string='';
  @Output() public childEvent=new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hey Buddy!");
  }

  public name="Sathwika";
  public message="Demo for pipes in Angular";
  public person = {
    "firstname":" John",
    "lastName": "Doe"
  }

  public date=new Date();

}

