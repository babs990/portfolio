import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ProjetsComponent } from './projets/projets.component';
import { ArticlesComponent } from './articles/articles.component';
import { AngularComponent } from './articles/angular/angular.component';
import { ChoiceComponent } from './choice/choice.component';

export const routes: Routes = [
    {
        path: 'acceuil',
        component: AcceuilComponent,
        title: 'Acceuil'
    },

    {
        path: 'choice',
        component: ChoiceComponent,
        title: 'Acceuil'
    },

    {
        path: 'apropos',
        component: AproposComponent,
        title: 'A propos'
    },
    {
        path: 'projets',
        component: ProjetsComponent,
        title: 'Projets'
    },
    {
        path: 'articles',
        children :[
            {
                path : '',
                component: ArticlesComponent,
                title: 'Articles',
        
            },
            {
                path: 'angular',
                component: AngularComponent,
                title: 'Angular'
            },        
        ]
    },
    {path : '', redirectTo : '/choice', pathMatch : 'full'}
];
