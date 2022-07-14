import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  a =10;
  ngOnInit(): void {
    
    var interval = setInterval(()=>{
      this.a-=1
    },1000)
    
    if(this.a==0){
      clearInterval(interval)
      this.a = 999999
    }
  }
  getMin(a:any,b:any){  
    if(a>b){
        return b
    }
    return a
  }


}
