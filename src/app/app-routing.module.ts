import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HealthQuotesComponent} from './component/health-quotes/health-quotes.component';
import { EditInfoComponent} from './component/edit-info/edit-info.component'
import { DetailsComponent } from './component/details/details.component';
import { ComparePlanComponent } from './compare-plan/compare-plan.component';
const routes: Routes = [

  { path: '', redirectTo: 'health-insurance', pathMatch: 'full' },
  // { path: 'homemodule', loadChildren: '../app/component/home/home.module#homeModule' },
{path : 'health-insurance' , component : HomeComponent},
{path : 'health-insurance/quotes' , component : HealthQuotesComponent },
{path : 'health-insurance/quotes/edit' , component : EditInfoComponent },
{path : 'homemodule/one/details' , component : DetailsComponent},
{path : 'hommodule/one/comparePlan', component: ComparePlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
