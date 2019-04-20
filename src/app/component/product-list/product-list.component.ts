import { Component, OnInit } from '@angular/core';
import { ProductSrvcService } from 'src/app/services/product-srvc.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: any;
  loader: boolean = false;
  resolution: string = "";
  selectedItem: any;

  constructor(private _productSrvc: ProductSrvcService) { }

  ngOnInit() {
    this.productList();
    this.getResolution()
  }

 //To fetch the list of product
  productList() {
    this.loader = true;
    this._productSrvc.getProducts().subscribe((resp) => {
      this.products = resp.productList
    },
      (error) => {
        console.error(error)
      },
      () => {
        this.loader = false
      }
    );
  }

  //Hover event  
  mouserEnter(product) {
    this.selectedItem = product;
  }

 // Set images based on the device resolution default desktop image (sm)
  getResolution() {
    if (window.innerWidth < 767) {
      this.resolution = "lg"
    } else if (window.innerHeight > 1024) {
      this.resolution = "sm";
    } else {
      this.resolution = "sm";
    }
  }

}