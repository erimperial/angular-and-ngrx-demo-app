import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './containers/event/event.component';
import { RouterModule } from '@angular/router';
import { AddAttendeeComponent } from './components/add-attendee/add-attendee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from './components/event-list/event-list.component';

@NgModule({
  declarations: [EventComponent, AddAttendeeComponent, EventListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EventComponent }]),
    ReactiveFormsModule,
  ],
})
export class EventModule {}
