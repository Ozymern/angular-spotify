import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Item } from 'src/app/model/new-releases.modelo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {


  newSongs: Item[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases().subscribe((data: Item[]) => {

      this.newSongs = data;
      this.loading = false;
    }, errorService => {
      this.loading = false;
      this.error = true;
      this.errorMessage = errorService.error.error.message;
    });

  }

  ngOnInit() {
  }

}
