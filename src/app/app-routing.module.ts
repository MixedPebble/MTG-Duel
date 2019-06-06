import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDecksComponent } from './user-decks/user-decks.component';
import { BattleComponent } from './battle/battle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'decks', component: UserDecksComponent },
  { path: 'battle', component: BattleComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'search/:id', component: SearchComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
