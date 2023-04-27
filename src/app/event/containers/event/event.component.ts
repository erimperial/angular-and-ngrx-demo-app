import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  attendees: Attendee[] = [];

  constructor() {}

  ngOnInit(): void {}

  addAttendee(attendee: Attendee) {
    this.attendees = [...this.attendees, attendee];
    console.log(
      '🚀 ~ file: event.component.ts:19 ~ EventComponent ~ addAttendee ~ this.attendees:',
      this.attendees
    );
  }
}
