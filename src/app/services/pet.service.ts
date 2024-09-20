import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import {
  collection,
  collectionData,
  addDoc,
  doc,
  Firestore,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
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
    const docRef = doc(this.firestore, 'pets', id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    return docSnap.data() as Promise<Pet>;
  }

  async deletePet(id: string): Promise<void> {
    const docRef = doc(this.firestore, 'pets', id);
    await deleteDoc(docRef);
  }

  // Criando pet
  async newPet(pet: Pet): Promise<void> {
    await addDoc(this.petsColletion, pet);
  }

  async getPetsByPorte(portes: string[]): Promise<Pet[]> {
    const q = query(this.petsColletion, where('porte', 'in', portes));
    const petsSnap = await getDocs(q);
    return petsSnap.docs.map((doc) => doc.data()) as Pet[];
  }
}
