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
      description: '230 km',
    },
    {
      id: 2,
      author: 'mohamed',
      brand: 'volkswagen',
      model: 'Passat',
      image:
        'https://png2.cleanpng.com/sh/23242d0c1ba4af4ad2ea981483d3b8c6/L0KzQYi4UsAyN5VofJGAYUK0RLTrgsA4QWU8SpC6M0m1R4K3WcE2OWM2S6MDMEOzQ4K4TwBvbz==/5a214cdb079472.1392710915121318030311.png',
      category: 'vente',
      description: '230 km',
    },
    {
      id: 3,
      author: 'ahmed',
      brand: 'Porsche',
      model: 'Cayenne',
      image:
        'https://banner2.cleanpng.com/20171220/ske/porsche-logo-png-5a3a1bdf5e2e58.06891294151375766338584256.jpg',
      category: 'rent',
      description: '230 km',
    },
  ];
  

  getAllAnnonces() {
    return this.allAnnonces;
  }

  getAnnonceById(id : any) {
    return this.allAnnonces.find((element) => element.id == id);
  }
  getAnnonceByCathegorie(category : any){
    return this.allAnnonces.filter((element) => element.category === category);
  }
  getAnnonceByAuthor(author : any){
    return this.allAnnonces.filter((element) => element.author === author);
  }
  deleteAnnonce(annonce : any) {
    let i = this.allAnnonces.indexOf(annonce);
    this.allAnnonces.splice(i, 1);

   
  }

  addAnnonce(newAnnonce : any) {
    newAnnonce.id = this.allAnnonces[this.allAnnonces.length - 1].id + 1;
    
    this.allAnnonces.push(newAnnonce);
  }
}
