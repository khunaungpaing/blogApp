import {Injectable, Signal, signal} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, single} from "rxjs/operators";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private _collectionName = 'comment';

  constructor(private afs: AngularFirestore) {
  }

  saveComment(cmtData: any) {
    this.afs.collection(this._collectionName).add(cmtData).then(() => {
      console.log('cmt successful');
    });
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

  loadComment(id: string, limit: number) {
   return this.afs.collection(this._collectionName, ref =>
      ref.where('postId', '==', id).limit(limit))
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
}
