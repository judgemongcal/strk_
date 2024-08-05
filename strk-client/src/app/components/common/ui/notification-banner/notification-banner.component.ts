import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-notification-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-banner.component.html',
  styleUrl: './notification-banner.component.css',
})
export class NotificationBannerComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}
  message: string = '';
  isShown: boolean | null = null;
  isError: boolean | null = null;

  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notification: any) => {
      this.message = notification.message;
      this.isShown = notification.isShown;
      this.isError = notification.isError;
    });
  }

  dismissNotification(): void {
    this.notificationService.dismiss();
  }
}
