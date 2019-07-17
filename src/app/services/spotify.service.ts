import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NewReleasesModel } from '../model/new-releases.modelo';
import { SearchModel } from '../model/search.model';
import { ArtistModel } from '../model/artist.model';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(quey: string) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization: 'Bearer BQCCaRSIThDOy8kWL70c5GvOjINvI2q23P87yVAZrPjgAjYBpmu0cUPE4BNn4FH3Za-25tJN4FPUYhNMbtZQ'
    });

    const url = `https://api.spotify.com/v1/${quey}`;

    return this.http.get(url, { headers });

  }

  getNewReleases() {


    return this.getQuery('browse/new-releases').pipe(map((data: NewReleasesModel) => {

      return data.albums.items;
    }));


  }

  getArtists(textSearch: string) {


    return this.getQuery(`search?q=${textSearch}&type=artist`).pipe(map((data: SearchModel) => {

      return data.artists.items;
    }));

  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);

  }
  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=es`).pipe(map((data: any) => data.tracks));

  }

}