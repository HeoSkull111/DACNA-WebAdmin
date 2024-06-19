import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { WorkdayService } from '@pages/home/services/workday.service';
import { WorkdayHistoryActions } from './workday-history.actions';

@Injectable()
export class WorkdayHistoryEffects {
  constructor(
    private actions$: Actions,
    private workdayService: WorkdayService
  ) {}

  loadWorkdayHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WorkdayHistoryActions.loadWorkdayHistory),
      switchMap(({ groupID, user_id, days }) =>
        this.workdayService.getWorkdayHistory(groupID, user_id, days).pipe(
          map((workdayHistory) => {
            return WorkdayHistoryActions.loadWorkdayHistorySuccess({
              workdayHistories: workdayHistory,
            });
          }),
          catchError((error) =>
            of(WorkdayHistoryActions.loadWorkdayHistoryFailure({ error }))
          )
        )
      )
    )
  );
}
