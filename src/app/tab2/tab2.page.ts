import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnnoncesSerService } from '../annonces-ser.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  selectedannonce : any;
    

  constructor(
    private activatedRoute: ActivatedRoute,
    private annonceSer: AnnoncesSerService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        let id = p.get('id');
        console.log(id);
        this.selectedannonce = this.annonceSer.getAnnonceById(id);
      },
    });
 
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes vous sûr de vouloir supprimer cette annonce ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.annonceSer.deleteAnnonce(this.selectedannonce);
            this.router.navigateByUrl('/tab1');
          },
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
}
