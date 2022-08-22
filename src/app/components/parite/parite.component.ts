import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-parite',
  templateUrl: './parite.component.html',
  styleUrls: ['./parite.component.css']
})
export class PariteComponent implements OnInit {

  nbr: number;

  constructor(private route: ActivatedRoute) {
    this.nbr = route.snapshot.params['nbr'];
  }

  ngOnInit(): void {
  }

}
