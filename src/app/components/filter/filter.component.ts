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

  constructor(private _filterService: FilterService) { }

  ngOnInit(): void {
    this.categories = this._filterService.getCategories();
    console.log(this.categories);
  }

  onFilterClick(categoryId) {
    this._filterService.onFilterChange(categoryId);
  }

}
