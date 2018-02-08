import { RouterModule, Routes } from '@angular/router';
import { CapabilityPageComponent } from './capability-page/capability-page.component';



const routes: Routes = [
    { path: '', component: CapabilityPageComponent }
];

export const router = RouterModule.forChild(routes);
