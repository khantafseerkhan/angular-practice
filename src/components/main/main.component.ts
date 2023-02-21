import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";


@Component(
    {
        selector:"app-main",
        templateUrl:"./main.component.html",
        changeDetection:ChangeDetectionStrategy.OnPush

    }
)

export class Main  {
    constructor(public cd:ChangeDetectorRef){
        this.cd.reattach();
    }

    counter:number=0;

    ngOnInit(){
        setInterval(()=>{
            this.counter++;
          //  this.cd.detectChanges();
        },1000)
    }

}