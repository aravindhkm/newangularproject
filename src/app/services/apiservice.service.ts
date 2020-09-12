import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable,throwError } from 'rxjs';
import {map,catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseUrl;
  constructor(public http: HttpClient) { 
    this.baseUrl = environment.base_url;
  }
  private formatErrors(error: any){
    return throwError(error);
  }


  get(path: any, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.baseUrl}${path}`, {params})
    .pipe(
      map((res: Response) => {
        return res;
      }),
      catchError(this.formatErrors.bind(this))
    )
  }
}
