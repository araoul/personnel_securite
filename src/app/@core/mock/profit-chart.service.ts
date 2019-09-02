import { Injectable } from '@angular/core';
import { PeriodsService } from './periods.service';
import { ProfitChart, ProfitChartData } from '../data/profit-chart';

@Injectable()
export class ProfitChartService extends ProfitChartData {

  private year = [
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
  ];

  private data = { };

  constructor(private period: PeriodsService) {
    super();
    this.data = {
      semaine: this.getDataForWeekPeriod(),
      mois: this.getDataForMonthPeriod(),
      annee: this.getDataForYearPeriod(),
    };
  }

  private getDataForWeekPeriod(): ProfitChart {
    const nPoint = this.period.getWeeks().length;

    return {
      chartLabel: this.period.getWeeks(),
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getDataForMonthPeriod(): ProfitChart {
    const nPoint = this.period.getMonths().length;

    return {
      chartLabel: this.period.getMonths(),
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getDataForYearPeriod(): ProfitChart {
    const nPoint = this.year.length;

    return {
      chartLabel: this.year,
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 500);
    });
  }

  getProfitChartData(period: string): ProfitChart {
    return this.data[period];
  }
}
