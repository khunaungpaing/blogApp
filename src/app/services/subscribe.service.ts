import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  private _collectionName = 'subscribers';

  constructor(private afs: AngularFirestore) {
  }

  saveSub(subData: any) {
    this.afs.collection(this._collectionName).add(subData).then(() => {
      console.log('sub successful')
    })
  }

  checkSub(subEmail: string) {
    return this.afs.collection(this._collectionName, ref =>
      ref.where('email', '==', subEmail)).get();
  }
}
