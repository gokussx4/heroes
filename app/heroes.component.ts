import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";
import {Router} from "angular2/router";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    ngOnInit() {
        this.getHeroes();
    }

    selectedHero:Hero;

    heroes:Hero[];

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    };

    constructor(private _router:Router,
                private _heroService:HeroService) {
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        let link = ['HeroDetail',{id: this.selectedHero.id}];
        this._router.navigate(link);
    }
}