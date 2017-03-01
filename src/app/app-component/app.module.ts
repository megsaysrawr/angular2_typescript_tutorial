import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }	 from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from '../dashboard-component/dashboard.component';
import { HeroDetailComponent } from '../hero-detail-component/hero-detail.component';
import { HeroesComponent } from '../hero-component/heroes.component';
import { HeroService } from '../hero-services/hero.service';

import { AppRoutingModule } from '../app-component/app-routing.module';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule
	],
	declarations: [ 
		AppComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroesComponent
	],
	providers: [
		HeroService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }