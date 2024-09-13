import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CategoriService } from '../../core/services/categori.service';
import { Icatgories } from '../../core/interfaces/icatgories';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private readonly _CategoriService = inject(CategoriService);
  allCatagories: Icatgories[] = [];
  specificCategori: Icatgories[] = [];

  cleanSpecific!: Subscription;
  cleanCategor!: Subscription;

  getSpecificCategories(id: string): void {
    this.cleanSpecific = this._CategoriService
      .getSpecificCategori(id)
      .subscribe({
        next: (res) => {
          console.log(res);

          this.specificCategori = res.data;
        },
      });
  }

  ngOnInit(): void {
    this.cleanCategor = this._CategoriService.getCategori().subscribe({
      next: (res) => {
        console.log(res);
        this.allCatagories = res.data;
      },
    });
  }
  ngOnDestroy(): void {
    this.cleanCategor?.unsubscribe();
    this.cleanSpecific?.unsubscribe();
  }
}
