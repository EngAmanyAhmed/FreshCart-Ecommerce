import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Ibrands } from '../../core/interfaces/ibrands';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent implements OnInit, OnDestroy {
  private readonly _BrandsService = inject(BrandsService);
  allBrands: Ibrands[] = [];
  specificBrands: Ibrands = {} as Ibrands;
  modalMy: boolean = true;
  cleanBrands!: Subscription;
  cleanspecific!: Subscription;

  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next: (res) => {
        console.log(res);
        this.allBrands = res.data;
      },
    });
  }
  getSpecificBrands(id: string): void {
    this._BrandsService.getSpecificBrands(id).subscribe({
      next: (res) => {
        console.log(res.data);
        this.specificBrands = res.data;
      },
    });
  }

  ngOnDestroy(): void {
    this.cleanBrands?.unsubscribe();
    this.cleanspecific?.unsubscribe();
  }
}
