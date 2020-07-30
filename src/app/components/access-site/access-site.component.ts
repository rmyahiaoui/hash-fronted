import { Component, OnInit,Input } from '@angular/core';
import {Site} from '../../models/site.interface';

@Component({
  selector: 'app-access-site',
  templateUrl: './access-site.component.html',
  styleUrls: ['./access-site.component.css']
})
export class AccessSiteComponent implements OnInit {
  @Input()
  site: Site;
  constructor() {     
  }

  ngOnInit(): void {
  }

  goToUrl(site: any){
    window.open(site.url, "_blank");
  }

}
