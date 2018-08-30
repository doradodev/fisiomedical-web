import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../dataServices/data-services.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent implements OnInit {

  img:string;
  description:string;
  service:string;
  tittle:string;

  constructor(private route: ActivatedRoute,
              private dataService: DataServicesService) { }

  ngOnInit() {
    this.service = this.route.snapshot.params['service'];
    this.dataService.getLocalData().subscribe( data => {
      data = data[this.service]
      this.img = data.img;
      this.tittle = data.tittle;
      this.description = data.description;
    });

  }

}
