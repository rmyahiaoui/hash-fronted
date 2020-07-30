import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateHashComponent } from './components/create-hash/create-hash.component';
import {HashService} from './services/bash.service';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './components/liste/liste.component';
import { AccessSiteComponent } from './components/access-site/access-site.component';

const appRoutes: Routes = [
  { path: 'create', component: CreateHashComponent },
  // { path: '', component: AppareilViewComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CreateHashComponent,
    ListeComponent,
    AccessSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
