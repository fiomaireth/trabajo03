import { Component } from '@angular/core';
import Swal from 'sweetalert2';

interface IRegisterForm {
  name: string;
  dni: string,
  email: string;
  mensaje: string;
}

@Component({
  selector: 'app-mi-proyeto-template-form',
  templateUrl: './mi-proyeto-template-form.component.html',
  styleUrls: ['./mi-proyeto-template-form.component.css']
})
export class MiProyetoTemplateFormComponent {

    register: IRegisterForm = {
      name: "",
      dni: "",
      email: "",
      mensaje: "",
    };
    
    element = false;

    constructor() {}
    submit() {
      // Llegados a este punto, ya hemos podido validar todo excepto las contraseñas y ya recibimos los datos
      console.log("Datos de inicio de sesión");
      console.log(this.register.name);
      console.log(this.register.email);
      console.log(this.register.mensaje);
      
      Swal.fire(
        'REGITRASDO!',
        'Se comunicaran con usted',
        'success'
      )
      this.reset();
      }
      reset(){
        this.register.name= "";
        this.register.dni= "";
        this.register.email= "";
        this.register.mensaje= "";
      }
}
