import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem implements OnInit {  
  @Input() name: string = '';  // <-- aggiunta la proprietà name con @Input

  constructor() {     
  }  

  ngOnInit() {  
  }
}
