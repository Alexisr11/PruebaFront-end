import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { creacionProductoDTO, productoDTO } from '../producto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  constructor(private router: Router, 
    private productoService: ProductosService,
    private activatedRoute: ActivatedRoute) { }

  modelo: productoDTO;
  errores: string[] = [];
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productoService.buscarProductoPorId(params.id)
      .subscribe(categoria => {
        this.modelo = categoria;
      }, () => this.router.navigate(['/listado-productos']))
    });
  }

  guardarCambios(producto: creacionProductoDTO){
      this.productoService.editarProducto(this.modelo.id, producto)
      .subscribe(() => {
        this.router.navigateByUrl('/listado-productos');
      }, error => console.log(error))
  }

}
