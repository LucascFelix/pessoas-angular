import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { Pessoa } from './components/pessoa/pessoa';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar';
import { Cadastro } from './components/cadastro/cadastro';

@NgModule({
  declarations: [
    App,
    Pessoa,
    Home,
    Footer,
    NavBar,
    Cadastro
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
