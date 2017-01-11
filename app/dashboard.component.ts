import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero-service';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    private heroes: Hero[];
    constructor(private heroService: HeroService) {}
    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0.5))
    }
}
