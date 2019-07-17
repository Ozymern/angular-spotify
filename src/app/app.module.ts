import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//importo mis rutas
import { ROUTES } from './app.routes';
import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DoomsafePipe } from './pipes/doomsafe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    LoadingComponent,
    DoomsafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(ROUTES),
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
