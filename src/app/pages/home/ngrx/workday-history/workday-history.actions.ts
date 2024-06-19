import { createAction, props } from '@ngrx/store';
import { WorkdayHistory } from '@pages/home/models/workday.model';

export const WorkdayHistoryActions = {
  loadWorkdayHistory: createAction(
    '[WorkdayHistory] Load Workday History',
    props<{ groupID: string; user_id: string; days: string }>()
  ),
  loadWorkdayHistorySuccess: createAction(
    '[WorkdayHistory] Load Workday History Success',
    props<{ workdayHistories: WorkdayHistory[] }>()
  ),
  loadWorkdayHistoryFailure: createAction(
    '[WorkdayHistory] Load Workday History Failure',
    props<{ error: string }>()
  ),
};
