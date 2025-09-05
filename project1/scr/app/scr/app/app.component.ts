import { Component, OnInit } from '@angular/core';
import { InfoService, Info } from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  info!: Info;

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.info = this.infoService.getInfo();
  }
}