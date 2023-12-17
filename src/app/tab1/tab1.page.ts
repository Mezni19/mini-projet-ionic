import { Component, Injectable } from '@angular/core';
import { AnnoncesSerService } from '../annonces-ser.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
    tabAnnonces : any ; //contient la liste des annonces
    constructor(private annonceSer : AnnoncesSerService) {} //injection de de service
   
  category : any ;
 
  author : any; 
  ngOnInit() {
    this.filterAnnoncesbyCategory(); //appel de methode de filtrage
    this.filterAnnoncesbyAuthor();//appel de methode de filtrage
    console.log(this.category);
  }
  filterAnnoncesbyCategory() {
    console.log(this.category);
    if (this.category != undefined) { //methode de filtrage par category 
      this.tabAnnonces = this.annonceSer.getAnnonceByCathegorie(this.category); // si category != il recupere l 'annoce de cette category
    } else {
      this.tabAnnonces = this.annonceSer.getAllAnnonces();// sinon il recupere tous les annonces
    }
  }
  filterAnnoncesbyAuthor() {
    console.log(this.author);
    if (this.author != undefined) {
      this.tabAnnonces = this.annonceSer.getAnnonceByAuthor(this.author);
    } else {
      this.tabAnnonces = this.annonceSer.getAllAnnonces();
    }
  }
    

}
