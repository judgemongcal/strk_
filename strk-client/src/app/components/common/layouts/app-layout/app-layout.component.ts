import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NotificationBannerComponent } from '../../ui/notification-banner/notification-banner.component';
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, NotificationBannerComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
})
export class AppLayoutComponent {}
