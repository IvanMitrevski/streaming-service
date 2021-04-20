import { IFilterState } from './../../../models/filterState.model';
import { FilterService } from './../../services/filter.service';
import { ICategory } from './../../../models/categories.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: ICategory[];
  filterState: IFilterState;

  constructor(private _filterService: FilterService) {
    //to prevent crash from the start
    this.filterState = {};
   }

  ngOnInit(): void {
    this.categories = this._filterService.getCategories();
    console.log(this.categories);
  }

  onFilterClick(categoryId) {
    this.filterState = this._filterService.onFilterChange(categoryId);
    console.log(this.filterState);
  }

}
