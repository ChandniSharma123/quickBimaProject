import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HealthQuotesComponent } from './component/health-quotes/health-quotes.component';
import { EditInfoComponent } from './component/edit-info/edit-info.component';
// import { DetailsComponent } from './component/details/details.component';
import { ProposalComponent } from './component/proposal/proposal.component';
import { ProposalFormComponent } from './component/proposal-form/proposal-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HealthQuotesComponent,
    EditInfoComponent,
  
   
    ProposalComponent,
  
   
    ProposalFormComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
