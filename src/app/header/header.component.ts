import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Market', routerLink:"products" },
            { label: 'Product', routerLink:"details" },
            { label: 'Cart', routerLink:"cart" },
        ];
    }

}
