import { Component, OnInit, OnDestroy } from '@angular/core';
import { count } from 'console';

import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private countingObservableSubscription: Subscription

  constructor() { }

  ngOnInit() {
    this.countingObservableSubscription = interval(1000).subscribe(count => {
      console.log(count)
    })
  }

  ngOnDestroy() {
    this.countingObservableSubscription.unsubscribe();
  }

}
