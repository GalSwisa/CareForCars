import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  onsell = []
  new=[]
  imgsell="http://cdn.onlinewebfonts.com/svg/img_163761.png";
  imgnew="https://image.flaticon.com/icons/png/512/650/650058.png";
  onSell(){
    for (let i = 4,k=0; i < this.pService.getAll().length; i+=5) {
      this.onsell[k++]=this.pService.getAll()[i];
      console.log(this.onsell[i])
    }
  }
  onNew(){
    for (let i = 0,k=0; i < this.pService.getAll().length; i+=5) {
      this.new[k++]=this.pService.getAll()[i];
      console.log(this.new[i])
    }
  }

  constructor(private pService : ProductService) {
   }

  ngOnInit(): void {
    this.onSell()
    this.onNew()
  }
}
