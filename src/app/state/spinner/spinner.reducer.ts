import { SpinnerActionTypes, SpinnerActions } from './spinner.actions';

export interface spinnerState {
  isOn: boolean;
}

export const initialState: spinnerState = {
  isOn: false,
};

export function reducer(
  state = initialState,
  action: SpinnerActions
): spinnerState {
  switch (action.type) {
    case SpinnerActionTypes.StartSpinner: {
      return {
        isOn: true,
      };
    }

    case SpinnerActionTypes.StopSpinner: {
      return {
        isOn: false,
      };
    }

    default:
      return state;
  }
}
