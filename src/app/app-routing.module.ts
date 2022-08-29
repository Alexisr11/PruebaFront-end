import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent} from './productos/listado-productos/listado-productos.component';
import { CrearProductoComponent} from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent} from './productos/editar-producto/editar-producto.component';
import { ListadoClienteComponent} from './clientes/listado-cliente/listado-cliente.component';
import { CrearClienteComponent} from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent} from './clientes/editar-cliente/editar-cliente.component';
import { FormularioVentaComponent} from './ventas/formulario-venta/formulario-venta.component';

const routes: Routes = [
  {path: 'listado-productos', component: ListadoProductosComponent},
  {path: 'productos/crear-producto', component: CrearProductoComponent},
  {path: 'productos/editar-producto/:id', component: EditarProductoComponent},
  {path: 'listado-clientes', component: ListadoClienteComponent},
  {path: 'clientes/crear-cliente', component: CrearClienteComponent},
  {path: 'clientes/editar-cliente/:id', component: EditarClienteComponent},
  {path: 'venta', component: FormularioVentaComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
