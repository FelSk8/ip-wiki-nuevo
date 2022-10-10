import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuariosI } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios$ :Observable<UsuariosI[]> |  undefined;
  constructor(
    private http: HttpClient
  
  ) { }

  getAllUsuarios():Observable<UsuariosI[]> {
   this.usuarios$= this.http.get<UsuariosI[]>(environment.baseUrl+'/user');
    return this.usuarios$;
  }

  delete(id:String):Observable<UsuariosI | void>{
    return this.http.delete<UsuariosI | void>(`${environment.baseUrl}/user/${id}`).pipe(
      map((res:UsuariosI)=>{
        return res;
      })
    );

        
  }
}
