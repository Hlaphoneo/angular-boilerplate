import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message: any;

  constructor(private nav : NavigationService) {

   }


   loadUser() { 
    this.nav.goto('/about',{
      key : "testData",
      data : this.message
    });
   }

}
