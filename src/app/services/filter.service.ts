import { IFilterState } from './../../models/filterState.model';
import { IMovie } from './../../models/movie.model';
import { ICategory } from './../../models/categories.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterState: IFilterState;

  constructor() {
    //initialize filterState to an empty object
    this.filterState = {};
   }

  // By putting the type IMovie[] this service will now know the needed variables so you cannot make a mistake when entering a data
  getMovies() : IMovie[] {
    return [
      {
        "id": 0,
        "name": "Zack Snyder's Justice League",
        "categoryId": 0,
        "posterUrl": "https://img.yts.mx/assets/images/movies/zack_snyders_justice_league_2021/medium-cover.jpg"
      },
      {
        "id": 1,
        "name": "Star Wars: Episode VI - Return of the Jedi",
        "categoryId": 1,
        "posterUrl": "https://img.yts.mx/assets/images/movies/Star_Wars_Episode_VI_Return_of_the_Jedi_1983/medium-cover.jpg"
      },
      {
        "id": 2,
        "name": "Star Wars: Episode V - The Empire Strikes Back",
        "categoryId": 1,
        "posterUrl": "https://img.yts.mx/assets/images/movies/Star_Wars_Episode_V_The_Empire_Strikes_Back_1980/medium-cover.jpg"
      },
      {
        "id": 3,
        "name": "Avenger: Endgame",
        "categoryId": 2,
        "posterUrl": "https://img.yts.mx/assets/images/movies/avengers_endgame_2019/medium-cover.jpg"
      },
      {
        "id": 4,
        "name": "The Dark Night",
        "categoryId": 0,
        "posterUrl": "https://img.yts.mx/assets/images/movies/The_Dark_Knight_2008/medium-cover.jpg"
      },
      {
        "id": 5,
        "name": "Thor",
        "categoryId": 2,
        "posterUrl": "https://img.yts.mx/assets/images/movies/Thor_2011/medium-cover.jpg"
      }
    ];
  }

  // Same goes here, it will know that needs just an id and a name, nothing more, nothing less
  getCategories() : ICategory[] {
    return [
      { "id": 0, "name": "DC" },
      { "id": 1, "name": "Star Wars" },
      { "id": 2, "name": "Marvel" }
    ];
  }
  //^^^^ this is why we use TypeScript, we use the types(IMovie[] and ICategory[]) to improve our experience! ^^^^

  onFilterChange(categoryId) {

    //making sure if I get an undefined value, to transform it to true or else return whetever it is true/false!
    const boolValue = this.filterState[categoryId] === undefined ? true : this.filterState[categoryId];
    // I use !boolValue cause I want to get the inverse value out of the filterState
    this.filterState[categoryId] = !boolValue;
    return this.filterState;

  }

}
