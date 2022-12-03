import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  dataSource = new MatTableDataSource<Usuario>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  constructor(private _usuarioService:UsuarioService) {}
  ngOnInit(): void {
    
  }

  listar(){
    this._usuarioService.getUsuarios().subscribe(
      usuarios => this.dataSource.data = usuarios
    )
  }

  announceSortChange(sortState: Sort) {
    /*if (sortState.direction) {
      this._usuarioService.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._usuarioService.announce('Sorting cleared');
    }
  }*/

  

}
}
