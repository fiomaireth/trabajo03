import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; // Icon
import { MatButtonModule } from '@angular/material/button'; // Button
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Input
import { MatSelectModule } from '@angular/material/select'; // Select
import { MatDatepickerModule } from '@angular/material/datepicker'; // Datepicker
import { MatNativeDateModule } from '@angular/material/core' // tb para le fecha
import { MatRadioModule } from '@angular/material/radio'; // Radio button

import {MatSortModule} from '@angular/material/sort'
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogComponent } from './dialog/dialog.component'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { MiProyetoTemplateFormComponent } from './mi-proyeto-template-form/mi-proyeto-template-form.component'


@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    CabeceraComponent,
    HomeComponent,
    UsuariosComponent,
    DialogComponent,
    TablaComponent,
    MiProyetoTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CdkTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
