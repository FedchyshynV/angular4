import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TyruSeaComponent } from './tyru-sea/tyru-sea.component';
import { MainContentComponent} from './main-content/main-content.component';

export const router: Routes = [
    { path: '', redirectTo: 'main-content', pathMatch: 'full' },
    { path: 'main-content', component: MainContentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tyru-sea', component: TyruSeaComponent }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);