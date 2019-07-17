import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ArtistModel } from 'src/app/model/artist.model';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: ArtistModel;
  show: boolean;
  topTracks = [];

  constructor(private ativatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.show = true;
    this.ativatedRoute.params.subscribe(param => {
      this.getArtist(param.id);
      this.getTopTracks(param.id);

    });

  }

  getArtist(id: string) {
    this.show = true;
    this.spotifyService.getArtist(id).subscribe((data: ArtistModel) => {
      this.artist = data;
      this.show = false;
    });
  }

  getTopTracks(id: string) {


    this.spotifyService.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
    });
  }

  ngOnInit() {
  }

}
