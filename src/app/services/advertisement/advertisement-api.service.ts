import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../models/core/response.model';
import { HttpService } from '../core-service/http.service';
import { Endpoint } from 'src/app/utils/api-endpoint-type';

@Injectable({
  providedIn: 'root'
})

export class AdvertisementApiService {
  constructor(private httpService: HttpService) { }

  AdvertisementAdd(payload: any): Observable<any> {
    return this.httpService.post(Endpoint.AdvertisementCrud, payload);
  }

  GetAdsByUserId(userId: number, page: number, pageSize: number): Observable<ResponseModel> {
    return this.httpService.get(Endpoint.GetAdsByUserId + `?userId=${userId}&page=${page}&pageSize=${pageSize}`);
  }

  GetAllAds(page: number, pageSize: number): Observable<ResponseModel> {
    return this.httpService.get(Endpoint.GetAllAds + `?page=${page}&pageSize=${pageSize}`);
  }
}
