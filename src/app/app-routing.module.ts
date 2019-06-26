import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDecksComponent } from './user-decks/user-decks.component';
import { BattleComponent } from './battle/battle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'decks', component: UserDecksComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'battle', component: BattleComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [!AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'search/:cardName', component: SearchComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
