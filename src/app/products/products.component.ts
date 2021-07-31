import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  
  @ViewChild (SidebarComponent) selectedCategory: SidebarComponent
  
  ngOnInit(): void {
  }

}
