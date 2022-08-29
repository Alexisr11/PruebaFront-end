import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatirialModule} from './material/material.module';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { FormularioProductoComponent } from './productos/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { FormularioClienteComponent } from './clientes/formulario-cliente/formulario-cliente.component';
import { ListadoClienteComponent } from './clientes/listado-cliente/listado-cliente.component';
import { FormularioVentaComponent } from './ventas/formulario-venta/formulario-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CrearProductoComponent,
    FormularioProductoComponent,
    ListadoProductosComponent,
    EditarProductoComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    FormularioClienteComponent,
    ListadoClienteComponent,
    FormularioVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatirialModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
