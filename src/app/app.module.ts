import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { InternetAddressesComponent } from './components/internet-addresses/internet-addresses.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

import { GithubService } from './services/github.service';
import { ProjectIndeksComponent } from './components/project-detail/project-indeks/project-indeks.component';
import { ProjectSatComponent } from './components/project-detail/project-sat/project-sat.component';
import { ProjectDijitaldepoComponent } from './components/project-detail/project-dijitaldepo/project-dijitaldepo.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ProjectItemComponent,
		InternetAddressesComponent,
		AboutComponent,
		FooterComponent,
		ProjectIndeksComponent,
		ProjectSatComponent,
		ProjectDijitaldepoComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	providers: [GithubService],
	bootstrap: [AppComponent]
})
export class AppModule { }
