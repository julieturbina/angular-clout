import { Routes } from '@angular/router';

import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';

export const routes: Routes = [
    { path: '', component: EventListComponent },
    { path: 'event/:id', component: EventDetailsComponent},
    { path: '**', redirectTo: '' }
];