import { Injectable } from '@angular/core';

export interface Info {
  date: string;
  name: string;
  topic: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor() {}

  getInfo(): Info {
    return {
      date: '07.08.2025',
      name: 'Ангеліна',
      topic: 'Практична робота з InfoService'
    };
  }
}