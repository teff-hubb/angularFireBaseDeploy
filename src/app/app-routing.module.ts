import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHouseComponent } from './components/card-house/card-house.component';
import { HomeComponent } from './components/home/home.component';
import { NewHouseComponent } from './components/new-house/new-house.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: "/home" },
  {path: 'home', component: HomeComponent },
  { path: 'new', component: NewHouseComponent },
  { path: '**', redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  arrHouses() {
    
  }
}
