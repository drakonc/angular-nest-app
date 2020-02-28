import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductI } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public listProduct: ProductI[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      res => {
        this.listProduct = res;
      },
      err => console.log(err)
    );
  }

  deleteProduct(_id: String) {
    this.productService.deleteProducts(_id).subscribe(
      res => {
        this.getProducts();
      },
      err => console.log(err)
    );
  }

}
