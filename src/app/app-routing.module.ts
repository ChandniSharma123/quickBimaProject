import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HealthQuotesComponent} from './component/health-quotes/health-quotes.component';
import { EditInfoComponent} from './component/edit-info/edit-info.component'
import { ProposalComponent } from './component/proposal/proposal.component';

const routes: Routes = [

  { path: '', redirectTo: 'health-insurance', pathMatch: 'full' },
  // { path: 'homemodule', loadChildren: '../app/component/home/home.module#homeModule' },
{path : 'health-insurance' , component : HomeComponent},
{path : 'health-insurance/quotes' , component : HealthQuotesComponent },
{ path : 'health-insurance/quotes/proposal' , component : ProposalComponent},
{path : 'health-insurance/quotes/edit' , component : EditInfoComponent },
// {path : 'homemodule/one/details' , component : DetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
