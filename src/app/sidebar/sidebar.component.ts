import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { 
  }
  selectedCategory : String ="Addons"
  ngOnInit(): void {
    this.selectedCategory ="Addons"

  }
  showAddons()
  {
    this.selectedCategory = "Addons"
  }
  showOils()
  {
    this.selectedCategory = "Oils"
  }
  showTires()
  {
    this.selectedCategory = "Tires"
  }
  showBatterys()
  {
    this.selectedCategory = "Batterys"
  }
}
