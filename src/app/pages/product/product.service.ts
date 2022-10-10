import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserResponseI } from 'src/app/auth/interfaces/user';
import { environment } from 'src/environments/environment';
import { ProductI } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products$ :Observable<ProductI[]> |  undefined;
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts():Observable<ProductI[]>{
    this.products$=this.http.get<ProductI[]>(environment.baseUrl+'/product');
    return this.products$
  }

  delete(id:String):Observable<UserResponseI | void>{
    return this.http.delete<UserResponseI | void>(`${environment.baseUrl}/product/${id}`).pipe(
      map((res:UserResponseI)=>{
        return res;
      })
    );
        
  }

  // editar servicio


     
        
  }
 




    
    

  

