import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { collection, collectionData, doc, Firestore, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  firestore = inject(Firestore);
  petsColletion = collection(this.firestore, 'pets');

  getPets(): Observable<Pet[]> {
    return collectionData(this.petsColletion, {
      idField: 'id',
    }) as Observable<Pet[]>;
  }

  async getPet(id: string): Promise<Pet> {
    const docRef = doc(this.firestore, "pets", id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    return docSnap.data() as Promise<Pet>;
  }
}
