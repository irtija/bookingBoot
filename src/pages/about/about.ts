import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  orders: FirebaseListObservable<any>
  arr = [];
  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {
    this.orders = this.db.list('/orders',{preserveSnapshot: true});
    this.orders.subscribe(snapshots =>{
      this.arr = [];
      snapshots.forEach(element => {
        this.arr.push(element.val());
      });
    })
  }

}
