import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  sexo = ["Masculino", "Femenino"];

  productForm !: FormGroup;

  actionBtn: string = "Guardar";

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      userName: ['', Validators.required],
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      mensaje: ['', Validators.required],
      date: ['', Validators.required],
    });

    console.log(this.editData);

    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.productForm.controls['userName'].setValue(this.editData.userName);
      this.productForm.controls['sexo'].setValue(this.editData.sexo);
      this.productForm.controls['edad'].setValue(this.editData.edad);
      this.productForm.controls['mensaje'].setValue(this.editData.mensaje);
      this.productForm.controls['date'].setValue(this.editData.date);
    }

  }

  addUsuario() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postUsuario(this.productForm.value)
          .subscribe({
            next: (res) => {
              alert("Usuario agregado correctamente");
              this.productForm.reset();
              this.dialogRef.close('guardar');
            },
            error: () => {
              alert("¡Error al agregar el usuario!");
            }
          })
      }
      /* console.log(this.productForm.value); */
    } else {
      this.updateUsuario()
    }
  }

  updateUsuario() {
    this.api.putUsuario(this.productForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Usuario actualizado correctamente");
          this.productForm.reset();
          this.dialogRef.close('actualizar');
        },
        error: () => {
          alert("¡Error al actualizar el registro!");
        }
      })
  }

}
