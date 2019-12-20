import { Injectable } from '@angular/core';
import Dog from '../models/Dog';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  get members(): Dog[] {
    return [
      {
        name: 'Rex',
        age: 5,
        favoritePark: 'Central Park, New York',
        profilePicture: 'assets/sereja-ris-zGyG2OyLu4k-unsplash.jpg',
      },
      {
        name: 'Max',
        age: 2,
        favoritePark: 'Treptower Park, Berlin',
      },
      {
        name: 'Carabas',
        age: 7,
        favoritePark: 'Özgürlük, Istanbul',
        profilePicture: 'assets/jack-brind-rmvG_oHzCNA-unsplash.jpg',
      },
      {
        name: 'Tom',
        age: 4,
        favoritePark: 'Bois de Boulogne, Paris',
        profilePicture: 'assets/charles-zqhe4qjVTJI-unsplash.jpg'
      },
      {
        name: 'Fitz',
        age: 4,
        favoritePark: 'Englisher Garten, Munich',
      },
    ];
  }
}
