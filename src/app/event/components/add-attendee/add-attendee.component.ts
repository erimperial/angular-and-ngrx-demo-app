import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Attendee } from 'src/app/models';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.scss'],
})
export class AddAttendeeComponent {
  @Output() addAttendee = new EventEmitter<Attendee>();

  addAttendeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  submit() {
    const attendee: Attendee = {
      name: this.addAttendeeForm.value.name || '',
      attending: true,
      guests: 0,
    };
    console.log(
      '🚀 ~ file: add-attendee.component.ts:20 ~ AddAttendeeComponent ~ submit ~ attendee:',
      attendee
    );
    this.addAttendee.emit(attendee);
  }
}
