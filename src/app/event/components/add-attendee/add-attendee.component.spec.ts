import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AddAttendeeComponent } from './add-attendee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Attendee } from 'src/app/models';

describe('AddAttendeeComponent', () => {
  let component: AddAttendeeComponent;
  let fixture: ComponentFixture<AddAttendeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AddAttendeeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form on load', () => {
    expect(component.addAttendeeForm.invalid).toEqual(true);
  });

  it('should have a valid form', () => {
    component.addAttendeeForm.controls.name.setValue('Duncan');
    expect(component.addAttendeeForm.valid).toEqual(true);
  });

  it('should emit an attendee', () => {
    component.addAttendeeForm.controls.name.setValue('Duncan');
    component.addAttendee.subscribe((attendee: Attendee) => {
      expect(attendee.name).toEqual('Duncan');
    });
    component.submit();
  });
});
