import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../../services/event.service';
import { of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { appState } from 'src/app/state/state';
import * as spinnerActions from 'src/app/state/spinner/spinner.actions';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let service: EventService;
  let store: Store<appState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        { provide: HttpClient, useValue: null },
        {
          provide: EventService,
          useValue: {
            getAttendees: () => {},
          },
        },
        {
          provide: Store,
          useValue: {
            pipe: () => {},
            dispatch: () => {},
          },
        },
      ],
      declarations: [EventComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EventService);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of attendees set', () => {
    const fakeAttendees = [{ name: 'FAKE_NAME', attending: false, guests: 0 }];

    jest
      .spyOn(service, 'getAttendees')
      .mockImplementation(() => of(fakeAttendees));

    component.ngOnInit();

    component.attendees$?.subscribe((attendees) => {
      expect(attendees).toEqual(fakeAttendees);
    });
  });
  it('should dispatch StartSpinner action when adding an attendee', () => {
    const spyStartSpinner = spyOn(store, 'dispatch'); // Spy on dispatch method

    const fakeAttendee = { name: 'John Doe', attending: true, guests: 2 };
    component.addAttendee(fakeAttendee);

    expect(spyStartSpinner).toHaveBeenCalledWith(
      new spinnerActions.StartSpinner()
    );
  });

  it('should dispatch StopSpinner action after adding an attendee', (done) => {
    const spyStopSpinner = spyOn(store, 'dispatch');

    spyOn(service, 'addAttendee').and.returnValue(of(null));

    const fakeAttendee = { name: 'John Doe', attending: true, guests: 2 };
    component.addAttendee(fakeAttendee);

    setTimeout(() => {
      expect(spyStopSpinner).toHaveBeenCalledWith(
        new spinnerActions.StopSpinner()
      );
      done();
    }, 0);
  });
});
