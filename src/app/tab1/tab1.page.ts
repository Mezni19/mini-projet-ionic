import { Component, Injectable } from '@angular/core';
import { AnnoncesSerService } from '../annonces-ser.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
    tabAnnonces : any ;
    constructor(private annonceSer : AnnoncesSerService) {}
   
  category : any ;
 
  author : any; 
  ngOnInit() {
    this.filterAnnoncesbyCategory();
    this.filterAnnoncesbyAuthor();
    console.log(this.category);
  }
  filterAnnoncesbyCategory() {
    console.log(this.category);
    if (this.category != undefined) {
      this.tabAnnonces = this.annonceSer.getAnnonceByCathegorie(this.category);
    } else {
      this.tabAnnonces = this.annonceSer.getAllAnnonces();
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
