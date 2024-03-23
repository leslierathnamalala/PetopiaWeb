import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../../models/core/response.model';
import { AuthenticationService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  get(url: string): Observable<ResponseModel> {
    const header: any = this.createHeader();
    return this.http.get<ResponseModel>(`${environment.petopiaApiUrl + url}`, { headers: header, observe: 'response' });
  }

  post(url: string, body: any): Observable<any> {
    const header: any = this.createHeader()
    return this.http.post(`${environment.petopiaApiUrl + url}`, body, { headers: header });
  }

  put(url: string, body: any): Observable<ResponseModel> {
    const header: any = this.createHeader()
    return this.http.put<ResponseModel>(`${environment.petopiaApiUrl + url}`, body, { headers: header, observe: 'response' });
  }

  delete(url: string): Observable<ResponseModel> {
    const header: any = this.createHeader()
    return this.http.delete<ResponseModel>(`${environment.petopiaApiUrl + url}`, { headers: header, observe: 'response' });
  }

  patch(url: string, body: any): Observable<ResponseModel> {
    const header: any = this.createHeader()
    return this.http.patch<ResponseModel>(`${environment.petopiaApiUrl + url}`, body, { headers: header, observe: 'response' });
  }

  loadImageV1(url: string): Observable<any> {
    const headers = this.createHeader();
    return this.http.patch(`${environment.petopiaApiUrl + url}`, null, {
      headers,
      responseType: 'blob'
    }).pipe(map(response => {
      const reader = new FileReader();
      reader.readAsDataURL(response);
      reader.onloadend = () => {
        const base64data = reader.result;
        return base64data;
      };
    })
    );
  }

  loadImage(url: string): Observable<string> {
    const headers = this.createHeader();
    return this.http.patch(`${environment.petopiaApiUrl + url}`, null, {
      headers,
      responseType: 'blob'
    }).pipe(
      switchMap(response => {
        return new Observable<string>(observer => {
          const reader = new FileReader();
          reader.readAsDataURL(response);
          reader.onloadend = () => {
            const base64data = reader.result as string;
            observer.next(base64data);
            observer.complete();
          };
          reader.onerror = (error) => {
            observer.error(error);
          };
        });
      })
    );
  }

  postCloudinary(body: any): Observable<any> {
    return this.http.post(`${environment.cloudinaryUrl}`, body)
  }

  private createHeader(): any {
    const token: string = this.authenticationService.token;
    return {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
  }
}
