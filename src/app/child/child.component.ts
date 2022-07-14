import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>()
  constructor() { }
  message="su2"
  ngOnInit(): void {
  }
  sendMessage(){
    this.messageEvent.emit("message is emmited")
  }
}
