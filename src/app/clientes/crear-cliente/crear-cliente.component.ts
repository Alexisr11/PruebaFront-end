import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { creacionClienteDTO } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  constructor(private router: Router, private clienteService: ClientesService) { }

  guardarCambios(clienteDto: creacionClienteDTO){
    this.clienteService.crearCliente(clienteDto).subscribe(() => {
      this.router.navigate(["/listado-clientes"]);
    },error => console.log(error)
    //(error) => this.errores = parsearErroresApi(error)
    );    
  }

}
