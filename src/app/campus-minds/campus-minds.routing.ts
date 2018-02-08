import { RouterModule, Routes } from '@angular/router';
import { CampusMindsPageComponent } from './campus-minds-page/campus-minds-page.component';
const routes: Routes = [
    { path: '', component: CampusMindsPageComponent }
];

export const router = RouterModule.forChild(routes);
