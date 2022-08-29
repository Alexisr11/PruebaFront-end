import { Component, enableProdMode, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clienteDTO } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { productoDTO } from 'src/app/productos/producto';
import { ProductosService } from 'src/app/productos/productos.service';
import { detalleDto } from '../venta';

@Component({
  selector: 'app-formulario-venta',
  templateUrl: './formulario-venta.component.html',
  styleUrls: ['./formulario-venta.component.css']
})
export class FormularioVentaComponent implements OnInit {

  clienteDto: clienteDTO;
  productoDto: productoDTO;
  detalle: detalleDto = {producto: 'Arroz',cantidad: 2,valorUni: 1200,valorTol: 2400};; 

  form: FormGroup;
  paginaActual = 1;
  columnasAMostrar = ['Producto','Cantidad','Valor Unitario', 'Valor Total'];
  cantidadDeRegisrtosAMostrar = 5;

  constructor(private formBuilder: FormBuilder, 
    private clienteService: ClientesService,
    private productoService: ProductosService) { }

  ngOnInit(): void {

    this.clienteDto = {
      id: 0,
      cedula: '',
      nombre: '',
      apellido: '',
      telefono: 0
    };

    this.productoDto = {
        id: 0,
        nombre: '',
        valor: 0
    }

    this.form = this.formBuilder.group({
      cedula: ['', {
        Validators:[Validators.required]
      }],
      nombre: '',
      apellido: '',
      nombrePro:['',{
        Validators:[Validators.required]
      }],
      cantidad: 0
    })
  }

  buscarClientePorCedula(){
    console.log(this.form.value.cedula)
    this.clienteService.buscarCleintePorCedula(this.form.value.cedula)
    .subscribe(cliente => {
      this.clienteDto = cliente;
      console.log(this.clienteDto)
    }, error => console.error(error));
  }

  buscarProducto(){
    this.productoService.buscarProductoPorNombre(this.form.value.nombrePro)
    .subscribe(producto => {
      this.productoDto = producto;
    }, error => console.error(error));
  }

  agrergarProducto(){
    console.log(this.detalle);
  }
}
