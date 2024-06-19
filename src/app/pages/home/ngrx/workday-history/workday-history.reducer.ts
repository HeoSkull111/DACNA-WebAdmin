import { createReducer, on } from '@ngrx/store';

import { WorkdayHistoryActions } from './workday-history.actions';
import { WorkdayHistoryState } from './workday-history.state';

const initialState: WorkdayHistoryState = {
  workdayHistories: [],
  loading: false,
  error: '',
};

export const workdayHistoryReducer = createReducer(
  initialState,
  on(WorkdayHistoryActions.loadWorkdayHistory, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),
  on(
    WorkdayHistoryActions.loadWorkdayHistorySuccess,
    (state, { workdayHistories }) => {
      console.log('workdayHistories', workdayHistories);

      return {
        ...state,
        workdayHistories,
        loading: false,
        error: '',
      };
    }
  ),
  on(WorkdayHistoryActions.loadWorkdayHistoryFailure, (state, { error }) => ({
    ...state,
    workdayHistories: [],
    loading: false,
    error,
  }))
);
