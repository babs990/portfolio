import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';

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
    {path : '', redirectTo : '/acceuil', pathMatch : 'full'}
];
