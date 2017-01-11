import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;
    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {}

    ngOnInit() {
        return this.route.params.subscribe(Params => {
            this.heroService.getHero(+Params['id']).then(heroes => this.hero = heroes)
        });

    }

    goBack() {
        return this.location.back();
    }

    save() {
        this.heroService.update(this.hero).then(() => this.goBack())
    }
}
