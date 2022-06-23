import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  { path: 'message/:id', component: MessagePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MessagePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
