import { Component, OnInit, Input } from '@angular/core';
import { AvengerI } from "src/app/core/avenger.interface";

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.scss']
})
export class AvengerComponent  implements OnInit {
@Input() public avengerToShow?: AvengerI;

ngOnInit(): void {

}

}
