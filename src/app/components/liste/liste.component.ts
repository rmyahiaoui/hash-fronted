import { Component, OnInit } from '@angular/core';
import {HashService} from '../../services/bash.service';
import {Site} from '../../models/site.interface';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  results: Site[];
  constructor(private hashService: HashService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.hashService.getAll().subscribe(
      data => {
        this.results = data;
      },
      err => console.error(err),
    );
  }

}
