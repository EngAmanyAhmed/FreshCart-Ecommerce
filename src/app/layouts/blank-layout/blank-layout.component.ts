import { Component } from '@angular/core';
import { NavBlankComponent } from "../../componets/nav-blank/nav-blank.component";
import { FooterComponent } from "../../componets/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [NavBlankComponent, FooterComponent,RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

  
}
