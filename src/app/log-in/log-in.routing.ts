import { RouterModule, Routes } from '@angular/router';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { LogInMsgComponent } from './log-in-msg/log-in-msg.component';


const routes: Routes = [
    { path: '', component: LogInPageComponent },
    { path: 'conf', component: LogInMsgComponent }
];

export const router = RouterModule.forChild(routes);
