import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { creacionClienteDTO } from '../cliente';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {

  form: FormGroup;

  @Input()
  errores: string[] = [];
  
  @Input()
  modelo: creacionClienteDTO;

  @Output()
  onSubmit: EventEmitter<creacionClienteDTO> =  new EventEmitter<creacionClienteDTO>();
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cedula: ['', {
        validators: [Validators.required, Validators.minLength(8), Validators.pattern(/^[1-9]/)]
      }],
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      apellido: ['', {
        validators: [Validators.required]
      }],
      telefono: ['', {
        validators: [Validators.required]
      }]
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoCedula(){
    var campo = this.form.get('cedula');
    if (campo.hasError('required')){
        return 'El campo Cedula es Requerido !!';
    }else if(campo.hasError('minLength')){
        return 'La Cedula debe de tener minimo 8 Numeros.!!';
    }else if(campo.hasError('pattern')){
      return 'Solo debe de ingresar Numeros..!! ';
    }

    return '';
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
        return 'El campo Nombre es Requerido !!';
    }else if(campo.hasError('minLength')){
        return 'El nombre debe de tener minimo 3 caracteres.!!';
    }

    return '';
  }

  obtenerErrorCampoApellido(){
    var campo = this.form.get('apellido');
    if (campo.hasError('required')){
        return 'El campo Apellido es Requerido !!';
    }
    return '';
  }

  obtenerErrorCampoTelefono(){
    var campo = this.form.get('telefono');
    if (campo.hasError('required')){
        return 'El campo Apellido es Requerido !!';
    }
    return '';
  }

}
