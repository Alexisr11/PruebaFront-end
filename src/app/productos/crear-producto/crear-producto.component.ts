import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { creacionProductoDTO } from '../producto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  errores: string[] = [];
  
  constructor(private router: Router, private productoService: ProductosService) { }

  guardarCambios(productoDto: creacionProductoDTO){
    this.productoService.crearProducto(productoDto).subscribe(() => {
      this.router.navigate(["/listado-productos"]);
    },error => console.log(error)
    //(error) => this.errores = parsearErroresApi(error)
    );    
  }

}
