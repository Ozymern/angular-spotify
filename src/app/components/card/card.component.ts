import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() items: any[];

  constructor(private router: Router) { }

  showArtist(item: any) {
    let id;
    if (item.type === 'artist') {
      id = item.id;
    } else {
      id = item.artists[0].id;
    }
    this.router.navigate(['artist',id]);

  }

}
