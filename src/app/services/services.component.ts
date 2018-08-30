import { Component, OnInit } from '@angular/core';
import {NgwWowService} from 'ngx-wow';
import {Router} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private wowService: NgwWowService,
              private router: Router) { }

  ngOnInit() {
    this.wowService.init()
  }

  goService(service: string){
    this.router.navigate(['/service', service])
  }

}
