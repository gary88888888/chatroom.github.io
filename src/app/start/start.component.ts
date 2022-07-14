import { Component, ComponentFactoryResolver, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { WebSocketService } from '../web-socket.service';





@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  
  text:string ='';
  id:string ="";
  inputId:string ="";
  isLogin:boolean=false
  users:Array<any>=[]
  htmlToAdd = '';
  myDiv=null
  chatHistory:Array<any>=[];
  constructor(
    private WebSocketService: WebSocketService,
   
    ) { }

  

  ngOnInit(): void {
    

    this.WebSocketService.socket.on('recieveMessage',(data:any)=>{
      console.log(data)
      this.chatHistory.push(data)
      console.log(this.chatHistory)
    

    })

    this.WebSocketService.socket.on('loginSuccess',(data:any) =>{
      
      if(data.userName == this.inputId){
        console.log("login success")
        this.isLogin = true
        this.id = this.inputId
        this.users = data.users
      }
      
      
    })
    this.WebSocketService.socket.on('getUsers',(data:any)=>{
      
      this.users = data
      console.log("get users")
    })



    this.WebSocketService.socket.on('userJoin',(data:any)=>{
      
      this.users = data
      console.log("user Join")
    })

  }
  
  ;
  
  emit():void{
    this.WebSocketService.emit('sendMessage',{userName:this.id,text:this.text})
    this.text = ""
    
  }

  
  login():void{
    let data = {"userName":this.inputId}
    
    this.WebSocketService.emit('login',data)
  }

  
}
