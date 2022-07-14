import { Injectable } from '@angular/core';
// import * as io from 'socket.io-client'
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
environment
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  readonly uri:string = "http://192.168.1.151:4440"
  socket:any
  constructor() {
    this.socket = io(this.uri)
   }
  listen(eventName: string){
    return new Observable((subsriber) =>{
      this.socket.on(eventName ,(data:any)=>{
        subsriber.next(data)
      })
    })
  }

  emit(eventName:string,data:any){
    this.socket.emit(eventName,data)
  }
}
