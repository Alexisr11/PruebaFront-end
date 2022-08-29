import { Component, OnInit } from '@angular/core';
import { clienteDTO } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})
export class ListadoClienteComponent implements OnInit {

  constructor(private clienteService: ClientesService) { }

  clientesDto: clienteDTO[];
  paginaActual = 1;
  cantidadDeRegisrtosAMostrar = 5;

  columnasAMostrar = ['id','cedula','nombre', 'apellido','telefono','acciones'];

  ngOnInit(): void {
    //this.mostrarRegisros(this.paginaActual, this.cantidadDeRegisrtosAMostrar);
    this.obtenerTodos();
  }

  obtenerTodos(){
    this.clienteService.obtenerTodo()
      .subscribe(clientes => {
        this.clientesDto = clientes;
        console.log(clientes);
      }, error => console.error(error));
  }
  

  borrar(id: number){
    this.clienteService.borrarCliente(id).subscribe(() => {
        this.obtenerTodos()
    }, error => console.error(error))
    console.log(id);
  }

}
