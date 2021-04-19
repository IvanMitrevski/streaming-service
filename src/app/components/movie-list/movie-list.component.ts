import { IMovie } from './../../../models/movie.model';
import { FilterService } from './../../services/filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: IMovie[];

  constructor(private _filterService: FilterService) { }

  ngOnInit(): void {
    this.movies = this._filterService.getMovies();
    console.log(this.movies);
  }

}
