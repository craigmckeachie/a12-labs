import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    HttpClientModule,
    HomeModule,
    AccountModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     allowedDomains: ['localhost:3000'],
    //     disallowedRoutes: [
    //       // '//localhost:4200/home/',
    //       // '//localhost:4200/account/',
    //     ],
    //   },
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
