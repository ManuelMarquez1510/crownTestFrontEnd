import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CatalogsService } from '../../services/catalogs.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CatalogsPostInterface } from '../../interfaces/catalogs.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-item-catalog-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  templateUrl: './add-item-catalog-form.component.html',
  styleUrls: ['./add-item-catalog-form.component.scss'],
})
export class AddItemCatalogFormComponent {
  catalogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalRef: MatDialogRef<AddItemCatalogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private catalogService: CatalogsService,
    private messageFeedback: MatSnackBar
  ) {
    this.catalogForm = this.formBuilder.group({
      name: ['', Validators.required],
      birth_year: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.catalogForm.valid) {
      const catalogData: CatalogsPostInterface = {
        name: this.catalogForm.value.name,
        birth_year: this.catalogForm.value.birth_year,
        gender: this.catalogForm.value.gender,
      };
      this.messageFeedback.open('Personaje agregado correctamente!', 'Cerrar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['success-snackbar'],
      });
      this.close();
      this.catalogService.addCatalog(catalogData).subscribe({
        next: (response) => {
          this.messageFeedback.open(
            'Personaje agregado correctamente!',
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: ['success-snackbar'],
            }
          );
          this.close();
        },
        error: (error) => {
          this.messageFeedback.open(
            'Error al agregar personaje. Intenta nuevamente.',
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: ['error-snackbar'],
            }
          );
        },
      });
    }
  }

  close() {
    this.modalRef.close();
  }
}
