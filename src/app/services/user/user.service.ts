import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../models/core/response.model';
import { HttpService } from '../core-service/http.service';
import { Endpoint } from 'src/app/utils/api-endpoint-type';

@Injectable({
  providedIn: 'root'
})

export class UserApiService {
  constructor(private httpService: HttpService) { }

  GetUserByEmail(email: any): Observable<ResponseModel> {
    return this.httpService.post(Endpoint.GetUserByEmail, email);
  }

  UsersAdd(payload: any): Observable<any> {
    return this.httpService.post(Endpoint.UsersCrud, payload);
  }

  UsersUpdate(userId: string, payload: any): Observable<any> {
    return this.httpService.put(Endpoint.UsersCrud + userId, payload);
  }

}
