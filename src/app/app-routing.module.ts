import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '', component: ListTachesComponent},
  { path: '', component: BitcoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
