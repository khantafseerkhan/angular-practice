import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
    templateUrl:"./child.component.html",
    selector:"app-child",
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class Child {
    constructor(){

    }
    @Input() parentCounter:any;
    counter:number=0;

    ngOnInit(){
        setInterval(()=>{
            this.counter++;
        },1000)
    }

}