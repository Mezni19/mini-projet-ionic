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
  //la methode onsubit et declancher lorsque on clic sur le boutton add pour recuperer les donner enregistrer dans nesannonce

  onSubmit(newAnnonce : any) {
    //ajouter les nouveaux donnees avec la methode addannonce
    this.annonceSer.addAnnonce(newAnnonce);
    //rediriger vers tab1
    this.router.navigateByUrl('/tab1');
  }
}
