import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { appState } from 'src/app/state/state';
import {
  StartSpinner,
  StopSpinner,
} from 'src/app/state/spinner/spinner.actions';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  spinner$: Observable<boolean> | undefined;
  attendees$: Observable<Attendee[]> | undefined;

  constructor(
    private store: Store<appState>,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.getAttendees();
    this.spinner$ = this.store.pipe(select((state) => state.spinner.isOn));
  }

  getAttendees() {
    this.attendees$ = this.eventService.getAttendees();
  }

  addAttendee(attendee: Attendee) {
    this.store.dispatch(new StartSpinner());
    this.eventService.addAttendee(attendee).subscribe(() => {
      this.store.dispatch(new StopSpinner());
      this.getAttendees();
    });
  }
}
