import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { UserAccount } from '../Models/user-account';
import { 
  doc, 
  docData, 
  Firestore,
  setDoc,
  collectionData,
  collection,
  updateDoc,
  addDoc,
  getDocs
 } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(
    private auth: Auth,
    private firestore: Firestore 
  ) { }

  
  getUserProfile() {
    const userID = this.auth.currentUser?.uid;
    const userDocRef = doc(this.firestore, `users/${userID}`);
    return docData(userDocRef, { idField: 'id' });
  } 

// Qualification
  addQualification(data:any){ 
    const uid = this.auth.currentUser?.uid;
    const addRef = collection(this.firestore, `users/${uid}`, `qualifications`); 
    return addDoc(addRef, data);  
  }
  getQualification() {
    const userID = this.auth.currentUser?.uid;
    const userDocRef = collection(this.firestore, `users/${userID}/qualifications`);
    return collectionData(userDocRef, { idField: 'id' });
  } 

// Experiences
  addExperiences(data:any){ 
    const uid = this.auth.currentUser?.uid;
    const addRef = collection(this.firestore, `users/${uid}`, `experiences`); 
    return addDoc(addRef, data);  
  }
  
  getExperiences() {
    const userID = this.auth.currentUser?.uid;
    const userDocRef = collection(this.firestore, `users/${userID}/experiences`);
    return collectionData(userDocRef, { idField: 'id' });
  } 

  updateProfile(user:UserAccount) {   
    const data = doc(this.firestore, `users/${user.id}`);
      return updateDoc(data,{
      firstname: user.firstname,
      lastname: user.lastname, 
      phone: user.phone,  
      location: user.location,  
      idnum: user.idnum,   
      gender: user.gender, 
      dob: user.dob,  
      language: user.language,  
      date: user.date,    
    })
 
  }
}
