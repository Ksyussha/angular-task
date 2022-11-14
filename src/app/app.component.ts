import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // name: string = "alex" 
  names:string[] = ['alex', 'bob', 'carl'] 
  nameTmp: string = "" 
  ngOnInit(): void { 
  } 
 
  addName() { 
    this.names.push(this.nameTmp) 
    this.nameTmp="" 
  } 
  deleteName(idx:number){ 
    this.names.splice(idx,1) 
} 
}

