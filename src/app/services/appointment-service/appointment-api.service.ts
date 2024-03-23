import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../models/core/response.model';
import { HttpService } from '../core-service/http.service';
import { Endpoint } from 'src/app/utils/api-endpoint-type';

@Injectable({
  providedIn: 'root'
})

export class AppointmentApiService {
  constructor(private httpService: HttpService) { }

  AppointmentAdd(payload: any): Observable<any> {
    return this.httpService.post(Endpoint.AppointmentCrud, payload);
  }

  AppointmentUpdate(appointmentId: string, payload: any): Observable<any> {
    return this.httpService.put(Endpoint.AppointmentCrud + `/${appointmentId}`, payload);
  }

  AppointmentDelete(appointmentId: string): Observable<any> {
    return this.httpService.delete(Endpoint.AppointmentCrud + `/${appointmentId}`);
  }

  GetAllAppointments(userId: number): Observable<ResponseModel> {
    return this.httpService.get(Endpoint.GetAllAppointments + `?userId=${userId}`);
  }
}
