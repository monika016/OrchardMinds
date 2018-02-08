import { RouterModule, Routes } from '@angular/router';
import { LeadPageComponent } from './lead-page/lead-page.component';

const routes: Routes = [
    { path: '', component: LeadPageComponent }
];

export const router = RouterModule.forChild(routes);
