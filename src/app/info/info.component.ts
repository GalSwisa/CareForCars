import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
actSerialNumber:any
product=[]
current:any
  constructor(private actRoute: ActivatedRoute,private pService : ProductService) { }
  Search(){
    this.product.forEach(i => {
      if(i.SerialNumber==this.actSerialNumber){
        this.current=i;
      }
    });
  }
  ngOnInit(): void {
    this.actSerialNumber = this.actRoute.snapshot.params["SerialNumber"];
    this.product = this.pService.getAll()
    this.Search();
  }

}
