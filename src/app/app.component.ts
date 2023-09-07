import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce';
  url: string = "../assets/phone.jpg";
    imageChange(event: any){
        this.url = event.target.src;
    }
}
