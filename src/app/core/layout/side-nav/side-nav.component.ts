import { Component, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

@Output() CloseSidenav = new EventEmitter<void>();
constructor() { }
onClose(){
  this.CloseSidenav.emit();
}

ngOnInit(): void {
}

}
