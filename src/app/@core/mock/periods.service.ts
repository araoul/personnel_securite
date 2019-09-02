import { Injectable } from '@angular/core';

@Injectable()
export class PeriodsService {
  getYears() {
    return [
      '2019', '2020', '2021',
      '2022', '2023', '2024',
      '2025', '2026', '2027',
    ];
  }

  getMonths() {
    return [
      'Jan', 'Fev', 'Mar',
      'Avr', 'Mai', 'Juin',
      'Juil', 'Aou', 'Sep',
      'Oct', 'Nov', 'Dec',
    ];
  }

  getWeeks() {
    return [
      'Lun',
      'Mar',
      'Mer',
      'Jeu',
      'Ven',
      'Sam',
      'Dim',
    ];
  }
}
