import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../core-service/http.service';

@Injectable({
  providedIn: 'root'
})

export class CloudinaryService {
  constructor(private httpService: HttpService) { }

  postCloudinary(payload: any): Observable<any> {
    return this.httpService.postCloudinary(payload);
  }
}
