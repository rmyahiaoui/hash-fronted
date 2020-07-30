import {NgForm} from '@angular/forms';
import {HashService} from '../../services/bash.service';
import {Site} from '../../models/site.interface';
import { Subscription } from "rxjs";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-hash',
  templateUrl: './create-hash.component.html',
  styleUrls: ['./create-hash.component.css']
})
export class CreateHashComponent implements OnInit {
  site: Site|string;
  errorMsg: string;

  @Output()
  reload = new EventEmitter<any>();

  constructor(private hashService: HashService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.hashService.createHash(f.value).subscribe(
      data => {
        this.errorMsg = '';
        this.site = data;
        this.reload.emit();
      },
      err => {
        this.errorMsg = err.error;   
        this.site = '';
      }
    );
  }

}
