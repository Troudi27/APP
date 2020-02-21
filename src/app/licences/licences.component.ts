import { Component, OnInit } from '@angular/core';
import { LicenceService } from '../services/licence.service';

@Component({
  selector: 'app-licences',
  templateUrl: './licences.component.html',
  styleUrls: ['./licences.component.css']
})
export class LicencesComponent implements OnInit {

  constructor(private licenceService: LicenceService) { }

  ngOnInit(): void {
    this.licenceService.getLicences().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.error(err);
      }

    );
  }

}
