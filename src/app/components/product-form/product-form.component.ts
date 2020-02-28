import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/interfaces/Product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public product: ProductI = {
    name: '', description: '', imagenURL: '', price: 0
  };

  public resP: any;

  private edit: Boolean = false;

  constructor(
    private productServices: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.productServices.getProduct(params.id).subscribe(
        res => {
          this.resP = res;
          this.product = this.resP.product;
          this.edit = true;
          console.log(this.resP.message);
        },
        err => console.log(err)
      );
    }
  }

  submitProduct() {
    this.productServices.createProducts(this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  updateProduct() {
    delete this.product.createdAt;
    this.productServices.updateProducts(this.product._id, this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/'])
      },
      err => console.log(err)
    );
  }

}
