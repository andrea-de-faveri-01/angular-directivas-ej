
import { avengersData } from '../../core/avenger.data';
import { Component } from '@angular/core';
import { AvengerI } from 'src/app/core/avenger.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

public avengers = avengersData

activeAvengersCount: number = 0;

  onAvengerClick(avenger: AvengerI) {
    avenger.isActive = !avenger.isActive;
    this.activeAvengersCount = this.avengers.filter(i => i.isActive).length;
  }

}
