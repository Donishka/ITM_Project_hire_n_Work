import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  add(worker: string, client: string, message: any) {
  }

  get() {
    return this.db.database.ref('chat').orderByValue();
  }
}
