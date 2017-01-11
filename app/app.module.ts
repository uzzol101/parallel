import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {
    InMemoryDataService
} from './in-memory-data.service';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero-service';
import { HeroListComponent } from './hero-list.component';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app.routing';




import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
    declarations: [AppComponent, HeroDetailComponent, HeroListComponent, DashboardComponent],
    providers: [HeroService],

    bootstrap: [AppComponent]
})
export class AppModule {}
