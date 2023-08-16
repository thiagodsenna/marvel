import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['../home/home.component.scss', './results.component.scss']
})
export class ResultsComponent extends HomeComponent {

  constructor(private activatedRoute: ActivatedRoute, characterService: CharacterService) {
    
    super(characterService);
    
    //Faz a pesquisa à partir do parâmetro passado pela URL
    this.search = this.activatedRoute.snapshot.paramMap.get('search')!;
    this.title = 'Resultados';
  }
}
