import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './componenti/card/card.component';
import { CardBodyComponent } from './componenti/card-body/card-body.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: "Home", component: HomeComponent, children: [
      { path: '', component: CardBodyComponent },
      { path: 'Timesheet', component: CardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
