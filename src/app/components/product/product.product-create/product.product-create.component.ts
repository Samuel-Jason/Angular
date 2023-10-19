import { Product } from './product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product.product-create',
  templateUrl: './product.product-create.component.html',
  styleUrls: ['./product.product-create.component.css']
})
export class ProductProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Produto de teste',
    price: 125.64
  }

  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.ProductService.ShowMessage('Operacao com sucesso')
  }
 
  createProduct():void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.ShowMessage('Produto criado com sucesso')
    })
  }

  cancel():void {
    this.router.navigate(['/products']);
  }

}
