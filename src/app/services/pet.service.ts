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
  orderBy,
} from '@angular/fire/firestore';
import { Storage, deleteObject, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  //ATRIBUTOS DA CLASSE PET SERVICE
  firestore = inject(Firestore);
  storage = inject(Storage);
  petsColletion = collection(this.firestore, 'pets');

  //MÉTODO QUE OBTEM OS PETS ORDENADOS POR DATA DE CRIAÇÃO
  async getPets(): Promise<Pet[]> {
    const q = query(this.petsColletion, orderBy("dataCriacao", "desc"));
    const petsSnap = await getDocs(q);
    return petsSnap.docs.map((doc) => {
      const petData: Pet = doc.data() as Pet;
      petData.id = doc.id
      return petData;
    });
  }
  // MÉTODO QUE OBTEM UM PET POR ID
  async getPet(id: string): Promise<Pet> {
    const docRef = doc(this.firestore, 'pets', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Promise<Pet>;
  }
  // MÉTODO QUE DELETA UM PET POR ID
  async deletePet(id: string): Promise<void> {
    const imgRef = ref(this.storage, id);
    await deleteObject(imgRef);
    const docRef = doc(this.firestore, 'pets', id);
    await deleteDoc(docRef);
  }

  // MÉTODO QUE CRIA UM NOVO PET
  async newPet(pet: Pet, image: File): Promise<void> {
    const docRef = await addDoc(this.petsColletion, pet);
    const storageRef = ref(this.storage, docRef.id);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);
    pet.img = imageUrl;
    pet.dataCriacao = new Date();
    await setDoc(docRef, pet);
  }
  // MÉTODO QUE OBTEM OS PETS FILTRADOS POR PORTE
  async getPetsByPorte(portes: string[]): Promise<Pet[]> {
    const q = query(this.petsColletion, where('porte', 'in', portes));
    const petsSnap = await getDocs(q);
    return petsSnap.docs.map((doc) => {
      const petData: Pet = doc.data() as Pet;
      petData.id = doc.id
      return petData;
    });
  }
}
