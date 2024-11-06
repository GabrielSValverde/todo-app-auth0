import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'Ydev-2bshirpfyn6sx7ip.us.auth0.com',
      clientId: 'R9pn00wI4gUrXwuNZA9pVCtgxmGwpSx2',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
