import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { clienteDTO, creacionClienteDTO } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + 'clientes';

  public obtenerTodo(): Observable<clienteDTO[]>{
    return this.http.get<clienteDTO[]>(this.apiUrl);
  }

  public obtenerTodos1(pagina: number, cantidadElementosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('registrosPorPagina', cantidadElementosAMostrar.toString());
    return this.http.get<clienteDTO[]>(this.apiUrl, {observe: 'response', params});
  }

  public crearCliente(cliente: creacionClienteDTO){
    console.log(cliente);
    return this.http.post(this.apiUrl, cliente);
  }

  public buscarClientePorId(id: number): Observable<clienteDTO>{
    return this.http.get<clienteDTO>(`${this.apiUrl}/${id}`);  
  }

  public editarCliente(id: number, creacionClienteDto: creacionClienteDTO){
      return this.http.put(`${this.apiUrl}/${id}`, creacionClienteDto);
  }

  public borrarCliente(id: number){
      return this.http.delete(`${this.apiUrl}/${id}`);
  }

  public buscarCleintePorCedula(cedula: number){
    this.apiUrl = this.apiUrl  + '/cliente-cedula'
    console.log(this.apiUrl)
    return this.http.get<clienteDTO>(`${this.apiUrl}/${cedula}`);
  }
}
