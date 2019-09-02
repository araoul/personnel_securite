import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficBarData, TrafficBar } from '../data/traffic-bar';

@Injectable()
export class TrafficBarService extends TrafficBarData {

  private data = { };

  constructor(private period: PeriodsService) {
    super();
    this.data = {
      semaine: this.getDataForWeekPeriod(),
      mois: this.getDataForMonthPeriod(),
      annee: this.getDataForYearPeriod(),
    };
  }

  getDataForWeekPeriod(): TrafficBar {
    return {
      data: [1, 2, 5, 6, 10, 9, 7],
      labels: this.period.getWeeks(),
      formatter: '{c0} K.fCFA',
    };
  }

  getDataForMonthPeriod(): TrafficBar {
    return {
      data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
      labels: this.period.getMonths(),
      formatter: '{c0} M.fCFA',
    };
  }

  getDataForYearPeriod(): TrafficBar {
    return {
      data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
      labels: this.period.getYears(),
      formatter: '{c0} M.CFA',
    };
  }

  getTrafficBarData(period: string): Observable<TrafficBar> {
    return observableOf(this.data[period]);
  }
}
