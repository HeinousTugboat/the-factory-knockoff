import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval as intervalRx } from 'rxjs/observable/interval';
import { takeWhile, timeInterval } from 'rxjs/operators';
import { animationFrame } from 'rxjs/scheduler/animationFrame';
import { TimeInterval } from 'rxjs/operators/timeInterval';

@Injectable()
export class UpdateService {
  private killSwitch = false;
  public tick = 0;
  private running = true;
  public loop$: Observable<TimeInterval<number>> = intervalRx(0, animationFrame).pipe(
    takeWhile(() => this.running),
    timeInterval(animationFrame)
  );
  public start = performance.now();
  public time = this.start;
  public lastSaved = 0;
  @Output() public log = new EventEmitter;

  constructor() {
    const savePeriod = 5000;

    this.loop$.subscribe(({value, interval}) => {
      this.tick = value;
      this.time = performance.now();

      if (this.tick % 100 === 0) {
        this.log.emit('tick! (' + interval + 'ms) ' + this.tick);
      }
      if (this.time - this.lastSaved > savePeriod) {
        this.lastSaved = this.time;
        this.log.emit('Pretending to save...');
      }
      if (this.killSwitch && this.tick >= 500) {
        this.running = false;
        this.log.emit('Killswitch Engaged.');
      }
    });
  }

}
