import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { MiProyetoTemplateFormComponent } from './mi-proyeto-template-form/mi-proyeto-template-form.component';
import { PieComponent } from './pie/pie.component';
import { TablaComponent } from './tabla/tabla.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Cabecera', component: CabeceraComponent},
  { path: 'Pie', component: PieComponent},
  { path: 'Usuarios', component: UsuariosComponent},
  { path: 'Dialog', component: DialogComponent},
  {path: 'Tabla',component: TablaComponent},
  { path: 'Miproyeto', component: MiProyetoTemplateFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
