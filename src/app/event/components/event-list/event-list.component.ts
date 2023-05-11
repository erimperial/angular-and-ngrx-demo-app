import { Component, Input, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  @Input() attendees: Attendee[] | null = [];
}
