import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities: { name: string; image: string; alt: string }[] = [];
  constructor(private homeService: HomeService) {}

  async ngOnInit() {
    this.cities = (await this.homeService.getCities()) as {
      name: string;
      image: string;
      alt: string;
    }[];
  }
}
