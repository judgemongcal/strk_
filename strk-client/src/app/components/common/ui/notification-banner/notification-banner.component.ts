import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-notification-banner',
  standalone: true,
  imports: [],
  templateUrl: './notification-banner.component.html',
  styleUrl: './notification-banner.component.css',
})
export class NotificationBannerComponent implements OnInit {
  private notificationService = inject(NotificationService);
  message: string = '';
  isShown: boolean = false;

  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notification: any) => {
      this.message = notification.message;
      this.isShown = notification.isShown;
    });
  }

  dismissNotification(): void {
    this.notificationService.dismiss();
  }
}
