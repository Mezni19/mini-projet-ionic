import { Component, OnInit } from '@angular/core';
import { AnnoncesSerService } from '../annonces-ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  constructor(private annonceSer: AnnoncesSerService, private router: Router) {}

  ngOnInit() {}

  onSubmit(newAnnonce : any) {
    this.annonceSer.addAnnonce(newAnnonce);
    this.router.navigateByUrl('/tab1');
  }
}
