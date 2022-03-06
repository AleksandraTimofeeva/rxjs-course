import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    concat,
    fromEvent,
    interval,
    noop,
    observable,
    Observable,
    of,
    timer,
    merge,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {response} from "express";


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {
      const http$ = createHttpObservable('/api/courses');

      const courses$ = http$
        .pipe(
          map(res => Object.values(res["payload"]) )
        )

      courses$.subscribe(
        courses => console.log(courses),
        noop(),
        () => console.log('completed')
      );
    }
}






