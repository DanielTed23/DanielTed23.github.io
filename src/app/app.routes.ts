import { Routes } from '@angular/router';
import { ForsideComponent } from './forside-component/forside-component';
import { OmComponent } from './om/om';

export const routes: Routes = [
  { path: '', component: ForsideComponent, pathMatch: 'full' },
  { path: 'om', component: OmComponent }
];