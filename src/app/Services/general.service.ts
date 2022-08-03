import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore,collectionData, doc, docData, getDoc, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(
    private auth: Auth,
    private firestore: Firestore 
  ) { }

  
  getLanguages() {  
    const data=collection(this.firestore, 'languages');
    return collectionData(data, {idField: 'id'});
  }

  
  getGender() {  
    const data=collection(this.firestore, 'gender');
    return collectionData(data, {idField: 'id'});
  }
  
  getLocation() {  
    const data=collection(this.firestore, 'locations');
    return collectionData(data, {idField: 'id'});
  }

  getSkills() {  
    const data=collection(this.firestore, 'skills');
    return collectionData(data, {idField: 'id'});
  }

  getQualifications() {  
    const data=collection(this.firestore, 'qualifications');
    return collectionData(data, {idField: 'id'});
  }

}
