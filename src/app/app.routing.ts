import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
    {
        path: 'lead', loadChildren: './lead/lead.module#LeadModule',
        // canActivate: [AuthGuard]
    },
    { path: '', loadChildren: './log-in/log-in.module#LogInModule' },
    {
        path: 'capabilities',
        loadChildren: './capabilities/capabilities.module#CapabilitiesModule'
    },
    {
        path: 'campus-minds', loadChildren: './campus-minds/campus-minds.module#CampusMindsModule',
        canActivate: [AuthGuard]
    }

];

export const router = RouterModule.forRoot(routes);
