import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioIntroComponent } from './portfolio-intro/portfolio-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeaderComponent,
    PortfolioIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
