import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private tabTypeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setTabType(tabType: string): void {
    this.tabTypeSubject.next(tabType);
  }

  getTabType(): Observable<string> {
    return this.tabTypeSubject.asObservable();
  }
}