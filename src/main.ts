import { Component, enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular23';
}

platformBrowserDynamic().bootstrapModule(AppModule);
// bootstrapApplication(AppModule);
