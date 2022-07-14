import { Component } from "@angular/core";
@Component({
    selector:'app-hello-world',
    template:'<h1>{{tittle}}<h1>',
    styles:[`
    h1{
        color:blue;
    }`]
})

export class hellow {
    tittle ="我是誰"
    
}