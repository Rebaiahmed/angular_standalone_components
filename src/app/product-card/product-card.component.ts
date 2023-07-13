import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Product{
  name?:string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor() { }
}
