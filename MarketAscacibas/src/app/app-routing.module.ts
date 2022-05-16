import { GamePageComponent } from './game-page/game-page.component';
import { InitialComponent } from './initial/initial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: '', component: InitialComponent},
  {path: 'games/:id', component: GamePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
