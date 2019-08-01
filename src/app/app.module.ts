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
// import { D/etailsComponent } from './component/details/details.component';
import { ProposalComponent } from './component/proposal/proposal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HealthQuotesComponent,
    EditInfoComponent,
  
   
    ProposalComponent
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
