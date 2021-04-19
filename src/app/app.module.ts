import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FilterComponent } from './components/filter/filter.component';

import { FilterService } from './services/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
