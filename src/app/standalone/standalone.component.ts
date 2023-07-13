import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
imports: [ 
    CommonModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent {

}
