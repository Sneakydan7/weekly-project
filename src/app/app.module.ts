import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { CompletedPageComponent } from './components/completed-page/completed-page.component';

const routes: Route[] = [
  {
    path: '',
    component: FirstPageComponent,
  },
  {
    path: 'comp',
    component: CompletedPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstPageComponent,
    CompletedPageComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
