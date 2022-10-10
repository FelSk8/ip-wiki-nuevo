import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticlesI, Wiki } from '../interface/wiki';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private readonly http: HttpClient

  ) { }

 getSearch(search: string):Observable<ArticlesI[]>{
  const params = {
    antion : 'query',
    format : 'json',
    list : 'search',
    srsearch : search,
    srlimit : '10',
    utf8 : '1',
    origin : '*'
  }
   return this.http.get<Wiki>(environment.api, {params}).pipe(
      map(res=>res.query.search)
   )
 }
}
