//model can be component or service or something else!

export interface IFilterState {
  //here I have a dynamical number of parameters(meaning I have 1, 100, 100000+), thats why I use the middle parenthesis []. Where categoryId is of a type number, but its value will be od a type boolean.
  //With this I have successfully made the FilterState functional
  [categoryId: number]: boolean;
}
