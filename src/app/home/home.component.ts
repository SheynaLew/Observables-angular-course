import { Component, OnInit, OnDestroy } from '@angular/core';
import { count } from 'console';

import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private countingObservableSubscription: Subscription;
  private customCountingObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const customCountingObservable = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count)
        count++;
      }, 1500);
    });

    this.countingObservableSubscription = interval(1000).subscribe(count => {
      console.log(count)
    })

    this.customCountingObservableSubscription = customCountingObservable.subscribe(data => {
      console.log(data);
    })
  }

  ngOnDestroy() {
    this.countingObservableSubscription.unsubscribe();
    this.customCountingObservableSubscription.unsubscribe();
    // Remember to unsubscribe from anything not provided by Angular!
  }

}
