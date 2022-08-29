import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clienteDTO, creacionClienteDTO } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private router: Router, 
    private clienteService: ClientesService,
    private activatedRoute: ActivatedRoute) { }

  modelo: clienteDTO;
  errores: string[] = [];
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.clienteService.buscarClientePorId(params.id)
      .subscribe(categoria => {
        this.modelo = categoria;
      }, () => this.router.navigate(['/listado-clientes']))
    });
  }

  guardarCambios(producto: creacionClienteDTO){
      this.clienteService.editarCliente(this.modelo.id, producto)
      .subscribe(() => {
        this.router.navigateByUrl('/listado-clientes');
      }, error => console.log(error))
  }

}
