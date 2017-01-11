import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

export const routes: Routes = [{
    path: 'heroes',
    component: HeroListComponent
}, {
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: 'hero/:id',
    component: HeroDetailComponent
}, {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
