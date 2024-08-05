import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '../interfaces/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationObject = new BehaviorSubject<Notification>({
    message: '',
    isShown: null,
    isError: null,
  });
  notification$ = this.notificationObject.asObservable();

  show(message: string, isError: boolean): void {
    this.notificationObject.next({ message, isShown: true, isError });

    setTimeout(() => {
      this.dismiss();
    }, 3000);
  }

  dismiss(): void {
    this.notificationObject.next({
      message: '',
      isShown: false,
      isError: null,
    });
  }
}
