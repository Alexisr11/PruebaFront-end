import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productoDTO } from '../producto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  constructor(private productoService: ProductosService) { }

  productosDto: productoDTO[];
  paginaActual = 1;
  cantidadDeRegisrtosAMostrar = 5;

  columnasAMostrar = ['id','nombre', 'valor','acciones'];

  ngOnInit(): void {
    //this.mostrarRegisros(this.paginaActual, this.cantidadDeRegisrtosAMostrar);
    this.obtenerTodos();
  }

  obtenerTodos(){
    this.productoService.obtenerTodo()
      .subscribe(productos => {
        this.productosDto = productos;
        console.log(productos);
      }, error => console.error(error));
  }
  

  mostrarRegisros(pagina: number, cantidadElementosAMostrar: number){
      
  }

  borrar(id: number){
    this.productoService.borrarProducto(id).subscribe(() => {
        this.obtenerTodos()
    }, error => console.error(error))
    console.log(id);
  }
}
