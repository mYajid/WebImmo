import { Component } from '@angular/core';

@Component({
  selector: 'app-propriete-card',
  templateUrl:`propriete-card.component.html`,
  styleUrls: ['propriete-card.component.css']
})
export class proprieteCardComponent{

  Propriete: any = {
    "Id": 1,
    "Nom": "Dirla Dada",
    "Type": "maison",
    "Prix": 120000
  }

}
