import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CatalogsService } from '../../services/catalogs.service';
import { CatalogsInterface } from '../../interfaces/catalogs.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { AddItemCatalogFormComponent } from '../add-item-catalog-form/add-item-catalog-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-catalogs',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss'],
})
export class CatalogsComponent implements OnInit {
  catalogsList: CatalogsInterface[] = [];
  loading: boolean = true;

  displayedColumns: string[] = [
    'name',
    'height',
    'mass',
    'birth_year',
    'gender',
    'hair_color',
    'skin_color',
    'eye_color',
  ];

  constructor(
    private catalogService: CatalogsService,
    public modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCatalog();
  }

  getCatalog() {
    this.catalogService.getCatalog().subscribe({
      next: (result) => {
        this.catalogsList = result;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      },
    });
  }

  openAddCatalogDialog(): void {
    const modalRef = this.modal.open(AddItemCatalogFormComponent, {
      width: '400px',
    });

    modalRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getCatalog();
      }
    });
  }
}
