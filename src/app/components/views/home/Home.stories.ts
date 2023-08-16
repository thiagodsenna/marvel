import type { Meta, StoryObj } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { CharacterCardComponent } from '../../common/character-card/character-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { SearchResultsTagComponent } from '../../common/search-results-tag/search-results-tag.component';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';
import { PaginationComponent } from '../../common/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatCardModule } from  '@angular/material/card';
import { SubstringPipe } from 'src/app//pipes/substring.pipe';
import { CharacterService } from 'src/app/services/character.service';

const meta: Meta<HomeComponent> = {
  title: 'Components/HomeComponent',
  component: HomeComponent,
  tags: ['autodocs'],
  render: (args: HomeComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    moduleMetadata({
      declarations: [SearchResultsTagComponent, PaginationComponent, CharacterCardComponent, SearchBarComponent, SubstringPipe],
      imports: [CommonModule, HttpClientModule, FormsModule, MatToolbarModule, MatCardModule, MatSnackBarModule],
      providers: [CharacterService],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Página incial do app, contemplando todos os componentes.'
      },
    },
  }
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const Default: Story = {
};