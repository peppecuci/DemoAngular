import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premiere',
  templateUrl: './premiere.component.html',
  styleUrls: ['./premiere.component.css']
})
export class PremiereComponent implements OnInit {

  private _typeFontStyle = ['normal', 'italic'];

  set random(value: number) {
    console.log(value);
    this._random = value;
    this.fontStyle = this._typeFontStyle[Math.random() > 0.5 ? 1 : 0];
    this._pathImage = "http://picsum.photos/id/" + value + "/200/150";
  }
  get random(): number {

    return this._random;
  }

  get pathImage(): string {
    console.log(this._pathImage)
    return this._pathImage
  }

  private _random: number = Math.floor((Math.random()*1000)+1)
  private _pathImage: string = "http://picsum.photos/id/" + this._random + "/200/150";

  donneesCarte: {
    titre: string,
    description : string
  } = {
    titre: 'Titre de la carte',
    description: 'Celle ci est la description'
  }
  fontStyle: any;

  tableau = [0,1,2,3,4,5,6,7,8,9];


  constructor() { }

  ngOnInit(): void {
  }

  showAlert(): void {

    alert('This is an alert');

  }
}
