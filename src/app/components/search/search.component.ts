import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Item } from 'src/app/model/search.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artists: Item[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { 
    
  }

  ngOnInit() {
  }

  search(textSearch: string) {
    this.loading = true;
    this.spotifyService.getArtists(textSearch).subscribe((data: Item[]) => {
      this.artists = data;
      this.loading = false;
    });
  }
}
