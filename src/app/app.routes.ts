import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ProjetsComponent } from './projets/projets.component';

export const routes: Routes = [
    {
        path: 'acceuil',
        component: AcceuilComponent,
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
    {path : '', redirectTo : '/acceuil', pathMatch : 'full'}
];
