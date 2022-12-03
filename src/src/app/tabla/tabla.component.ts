import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

/* Tabla */
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{
  
  title = 'TrabajoFinal';

  displayedColumns: string[] = ['userName', 'date', 'sexo', 'edad', 'mensaje', 'accion'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /* Constructor */
  constructor(
    private dialog: MatDialog,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '50%'
    }).afterClosed().subscribe(val => {
      if (val === 'guardar') {
        this.getAllUsuarios();
      }
    });
  }

  getAllUsuarios() {
    this.api.getUsuario()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          /* console.log(res); */
        },
        error: (err) => {
          alert("¡Error al obtener los registros!")
        }
      })
  }

  editUsuario(parametro: any) {
    this.dialog.open(DialogComponent, {
      width: '50%',
      data: parametro
    }).afterClosed().subscribe(val => {
      if (val === 'actualizar') {
        this.getAllUsuarios();
      }
    })
  }

  deleteUsuario(id: number) {
    this.api.deleteUsuario(id)
      .subscribe({
        next: (res) => {
          alert("Usuario eliminado correctamente");
          this.getAllUsuarios();
        },
        error: () => {
          alert("¡Error al eliminar el usuario!");
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
