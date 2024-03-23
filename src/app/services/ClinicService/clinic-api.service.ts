import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../models/core/response.model';
import { HttpService } from '../core-service/http.service';
import { Endpoint } from 'src/app/utils/api-endpoint-type';

@Injectable({
  providedIn: 'root'
})

export class ClinicApiService {
  constructor(private httpService: HttpService) { }

  GetAllClinicList(): Observable<ResponseModel> {
    return this.httpService.get(Endpoint.ClinicsCrud);
  }

  GetClinicById(clinicId: string): Observable<ResponseModel> {
    return this.httpService.get(Endpoint.ClinicsCrud + `/${clinicId}`);
  }

  GetClinicByUserId(userId: number): Observable<ResponseModel> {
    return this.httpService.get(Endpoint.GetClinicByUserId + `?userId=${userId}`);
  }

  ClinicAdd(payload: any): Observable<any> {
    return this.httpService.post(Endpoint.ClinicsCrud, payload);
  }

  ClinicUpdate(clinicId: string, payload: any): Observable<any> {
    return this.httpService.put(Endpoint.ClinicsCrud + `/${clinicId}`, payload);
  }

  ClinicDelete(clinicId: string): Observable<any> {
    return this.httpService.delete(Endpoint.ClinicsCrud + `/${clinicId}`);
  }

  GetAllClinics(page: number, pageSize: number): Observable<ResponseModel> {
    return this.httpService.get(Endpoint.GetAllClinics + `?page=${page}&pageSize=${pageSize}`);
  }
}
