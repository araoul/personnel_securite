import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Profits du jour',
      value: 572900,
      activeProgress: 70,
      description: 'Mieux que la semaine dernière (70%)',
    },
    {
      title: 'Nouvelles Commandes',
      value: 6378,
      activeProgress: 30,
      description: 'Mieux que la semaine dernière (30%)',
    },
    {
      title: 'Nouveaux Commentaires',
      value: 200,
      activeProgress: 55,
      description: 'Mieux que la semaine dernière (55%)',
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}
