import {Injectable,} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _collectionName: string = 'posts';

  constructor(private afs: AngularFirestore) {
  }

  loadData() {
    return this.afs.collection(this._collectionName).snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data};
        })
      })
    );
  }

  loadFeatures() {
    return this.afs.collection(this._collectionName, ref =>
      ref.where('isFeatured', '==', true).limit(4))
      .snapshotChanges().pipe(
        map(action => {
          return action.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, data};
          })
        })
      );
  }

  loadLatest() {
    return this.afs.collection(this._collectionName, ref =>
      ref.orderBy('createdAt'))
      .snapshotChanges().pipe(
        map(action => {
          return action.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, data};
          })
        })
      );
  }

  loadCategoryPost(id: string, limit: number) {
    return this.afs.collection(this._collectionName, ref =>
      ref.where('category.categoryId', '==', id).limit(limit))
      .snapshotChanges().pipe(
        map(action => {
          return action.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, data};
          })
        })
      );
  }

  findById(id: string) {
    return this.afs.doc(`${this._collectionName}/${id}`).valueChanges();
  }


}
