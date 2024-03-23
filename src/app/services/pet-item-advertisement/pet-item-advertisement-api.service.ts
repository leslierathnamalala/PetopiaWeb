import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../models/core/response.model';
import { HttpService } from '../core-service/http.service';
import { Endpoint } from 'src/app/utils/api-endpoint-type';

@Injectable({
  providedIn: 'root'
})

export class PetItemAdvertisementApiService {
  constructor(private httpService: HttpService) { }

  ItemsAdd(payload: any): Observable<any> {
    return this.httpService.post(Endpoint.PetShopItemsCrud, payload);
  }

  GetAllItems(page: number, pageSize: number, filter: any): Observable<ResponseModel> {
    return this.httpService.post(Endpoint.GetAllItems + `?page=${page}&pageSize=${pageSize}`, filter);
  }
}
