import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../services/apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiservice: ApiserviceService) { }

  getUser(id, type, offset): Observable <any> {
    
    let page = '?page='+offset+ '&limit=10';
    let param = type == 'get' ? '/users' + page : '/user/' +id;

    return this.apiservice.get(param)
  }
}
