import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatCardModule } from  '@angular/material/card';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { ResultsComponent } from './components/views/results/results.component';
import { FavAvatarComponent } from './components/common/fav-avatar/fav-avatar.component';
import { CharacterCardComponent } from './components/common/character-card/character-card.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';
import { SearchResultsTagComponent } from './components/common/search-results-tag/search-results-tag.component';
import { SearchBarComponent } from './components/common/search-bar/search-bar.component';
import { SubstringPipe } from './pipes/substring.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultsComponent,
    FavAvatarComponent,
    CharacterCardComponent,
    PaginationComponent,
    SearchResultsTagComponent,
    SearchBarComponent,
    SubstringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
