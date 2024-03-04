import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Facebook', onclick: 'https://www.facebook.com/?locale=es_LA', icon: 'logo-facebook' },
    { title: 'Twitter', url: '/folder/twitter', icon: 'twitter' },
    { title: 'Instagram', url: '/folder/instagram', icon: 'instagram' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
