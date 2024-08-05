import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '../interfaces/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationObject = new BehaviorSubject<Notification>({
    message: '',
    isShown: false,
  });
  notification$ = this.notificationObject.asObservable();

  show(message: string): void {
    this.notificationObject.next({ message, isShown: true });
  }

  dismiss(): void {
    this.notificationObject.next({ message: '', isShown: false });
  }
}
