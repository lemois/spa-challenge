import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
@Injectable()
export class CounterService {
  public stream: BehaviorSubject<number> = new BehaviorSubject(0);

  countUp() {
    this.stream.next(this.stream.getValue() + 1);
  }
}
