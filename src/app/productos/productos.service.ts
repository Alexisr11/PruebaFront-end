import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { creacionProductoDTO, productoDTO } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + 'productos';

  public obtenerTodo(): Observable<productoDTO[]>{
    return this.http.get<productoDTO[]>(this.apiUrl);
  }

  public obtenerTodos1(pagina: number, cantidadElementosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('registrosPorPagina', cantidadElementosAMostrar.toString());
    return this.http.get<productoDTO[]>(this.apiUrl, {observe: 'response', params});
  }

  public crearProducto(producto: creacionProductoDTO){
    console.log(producto);
    return this.http.post(this.apiUrl, producto);
  }

  public buscarProductoPorId(id: number): Observable<productoDTO>{
    return this.http.get<productoDTO>(`${this.apiUrl}/${id}`);
}

public editarProducto(id: number, creacionProductoDto: creacionProductoDTO){
    return this.http.put(`${this.apiUrl}/${id}`, creacionProductoDto);
}

public borrarProducto(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
}

public buscarProductoPorNombre(nombrePro: string){
  this.apiUrl = this.apiUrl  + '/producto-nombre'
  console.log(this.apiUrl)
  return this.http.get<productoDTO>(`${this.apiUrl}/${nombrePro}`);
}
}
