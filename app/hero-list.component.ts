import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'hero-list.component.html'
})

export class HeroListComponent {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {}
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    }
    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService.delete(hero.id).then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) {
                this.selectedHero = null;
            }
        });
    }

}
