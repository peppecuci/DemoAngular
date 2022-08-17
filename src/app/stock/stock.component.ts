import { Component, OnInit } from '@angular/core';
import {Produit} from "./produit";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  tableau: Produit[] = [

    { id: 1, name: 'strawberry', description: 'fruit', imagePath: 'https://th.bing.com/th/id/R.f4228baaf3518e944dd0a4535420c7ad?rik=tDHsRTg%2frPP6dA&pid=ImgRaw&r=0', price: 5.00, quantity: 10},
    { id: 2, name: 'apple', description: 'fruit', imagePath: 'https://th.bing.com/th/id/R.a607947135561dfddc2bdfaf7be0aebb?rik=xsK4AZuk8QRNHQ&riu=http%3a%2f%2fwww.thetreefarm.com%2fmedia%2fcatalog%2fproduct%2fcache%2f1%2fthumbnail%2f9df78eab33525d08d6e5fb8d27136e95%2fa%2fp%2fapple-gala-pixabay.jpg&ehk=a1ifrGTR3u3O8z3clgUeBMKjOIaW8Ppw2hDbTk8%2b1gw%3d&risl=&pid=ImgRaw&r=0', price: 3, quantity: 15},
    { id: 3, name: 'orange', description: 'fruit', imagePath:'https://th.bing.com/th/id/R.6a4a376363293b6c68f872ec9d892f8a?rik=hjs%2fw8tdtLCrlA&riu=http%3a%2f%2fchristmasstockimages.com%2ffree%2ffood-dining%2foranges.jpg&ehk=eyyaqItd45Id6caiRaKkn0XCsN8gBvw%2bz%2fPySwlMuD4%3d&risl=&pid=ImgRaw&r=0', price: 2.5, quantity: 3},
    { id: 4, name: 'cherry', description: 'fruit', imagePath:'https://th.bing.com/th/id/R.8961f0767e6ea1369eb7dcda687f1e8d?rik=RVgtJlZKoe0sbw&pid=ImgRaw&r=0', price: 7.5, quantity: 4},
    { id: 5, name: 'peer', description: 'fruit', imagePath:'https://th.bing.com/th/id/R.51bf2ba177f01f190c1856057f71cf84?rik=%2fDaUw0fkaBnrgw&pid=ImgRaw&r=0', price: 1.5, quantity: 6}

  ];

  constructor() { }

  ngOnInit(): void {
  }

  buy(p: Produit): void {

    p.quantity-- ;
    console.log(p.quantity)

  }

  outOfStock(): void{

  }
}
