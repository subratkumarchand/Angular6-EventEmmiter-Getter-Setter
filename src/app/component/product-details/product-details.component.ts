import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  _product: any;
  get() {
    return this._product;
  }
  //From product-list getting object mouseover event 
  @Input() set product(value: any) {
    this._product = value;
  }

  constructor() { }

  ngOnInit() {
    // initialize on load default data into _product object
    this._product = {
      "imageUrls":{
        "md":"https://mobileimages.lowes.com/product/converted/887276/887276250946md.jpg"
      },
      "marketingBullets":[
        "VRT Plus Technology - Reduces vibration 40% more than standard VRT for quiet washing",
        "Smart Care - Smart Care interacts with your washer to perform an immediate diagnosis and offer quick solutions",
        "4.5 cu ft Capacity - Fewer washes, less time in the laundry room, and more time for you",
        "Self Clean+ - Keeps your laundry drum fresh and odor-free",
        "Diamond Drum Design - Extends clothing life by treating fabrics gently"
      ],
      "brand": "Samsung",
      "description": "4.5-cu ft High Efficiency Stackable Front-Load Washer (Merlot) ENERGY STAR",
      "networkPrice":"999.00"
    }
  }
  //Add to Cart button alert
  getPrice(){
    alert("Cart Price is $"+ this._product.networkPrice)
  }

}
