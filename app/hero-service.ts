import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/topromise';
@Injectable()

export class HeroService {
    private heroesUrl = 'api/heroes';
    private headers = new Headers({ 'Content-type': 'application.json' });

    constructor(private http: Http) {}
    getHeroes(): Promise < Hero[] > {
        return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
    }

    getHero(id: number): Promise < Hero > {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url).toPromise().then(response => response.json().data as Hero).catch(this.handleError)
    }

    private handleError(error: any) {
        console.error('An error has occured', error.message);
        return Promise.reject(error.message || error);
    }

    update(hero: Hero) {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers }).toPromise().then(() => hero).catch(this.handleError);
    }

    create(name: string): Promise < Hero > {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise < void > {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers }).toPromise().then(() => null).catch(this.handleError);
    }

}
