import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesSerService {

  constructor() { }
  private allAnnonces = [
    {
      id: 1,
      author: 'mohamed',
      brand: 'audi',
      model: 'Q7',
      image:
        'https://banner2.cleanpng.com/20171201/7dd/audi-car-logo-png-brand-image-5a214d03605628.4914087715121318433946.jpg',
      category: 'vente',
      couleur: 'blue',
      annees: '150 000',
      description: 'compteur 100 000km ',
    },
    {
      id: 2,
      author: 'mohamed',
      brand: 'volkswagen',
      model: 'Passat',
      image:
        'https://png2.cleanpng.com/sh/23242d0c1ba4af4ad2ea981483d3b8c6/L0KzQYi4UsAyN5VofJGAYUK0RLTrgsA4QWU8SpC6M0m1R4K3WcE2OWM2S6MDMEOzQ4K4TwBvbz==/5a214cdb079472.1392710915121318030311.png',
      category: 'vente',
      couleur: 'blue',
      prix: '33000dt',
      description: 'compteur 100 000km ',
    },
    {
      id: 3,
      author: 'ahmed',
      brand: 'Porsche',
      model: 'Cayenne',
      image:
        'https://banner2.cleanpng.com/20171220/ske/porsche-logo-png-5a3a1bdf5e2e58.06891294151375766338584256.jpg',
      category: 'rent',
      couleur: 'noir',
      prix: '200 000dt',
      description: 'compteur 20 000km ',
    },
  ];
  
// afficher tout les annonces
  getAllAnnonces() {
    return this.allAnnonces;
  }

  // afficher les annonces par id
  getAnnonceById(id : any) {
    return this.allAnnonces.find((element) => element.id == id);
  }
  // afficher les annonces par category
  getAnnonceByCathegorie(category : any){
    return this.allAnnonces.filter((element) => element.category === category);
  }
  // afficher les annonces par author
  getAnnonceByAuthor(author : any){
    return this.allAnnonces.filter((element) => element.author === author);
  }
  //delete les annonces par annonce 
  deleteAnnonce(annonce : any) {
    let i = this.allAnnonces.indexOf(annonce);
    this.allAnnonces.splice(i, 1);

   
  }
// ajouter un annonce
  addAnnonce(newAnnonce : any) {
    newAnnonce.id = this.allAnnonces[this.allAnnonces.length - 1].id + 1;
    
    this.allAnnonces.push(newAnnonce);
  }
}
