import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { creacionProductoDTO } from '../producto';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  form: FormGroup;

  @Input()
  errores: string[] = [];
  
  @Input()
  modelo: creacionProductoDTO;

  @Output()
  onSubmit: EventEmitter<creacionProductoDTO> =  new EventEmitter<creacionProductoDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      valor: ['', {
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

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
        return 'El campo Nombre es Requerido !!';
    }else if(campo.hasError('minLength')){
        return 'El nombre debe de tener minimo 3 caracteres.!!';
    }

    return '';
  }

  obtenerErrorCampoValor(){
    var campo = this.form.get('valor');
    if (campo.hasError('required')){
        return 'El campo Valor es Requerido !!';
    }
    return '';
  }

}
