import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Import the interceptors
import { loggerInterceptor } from './interceptors/logger.interceptor';
import { requestInterceptor } from './interceptors/request.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

// Store
import { groupsReducer } from '@pages/home/ngrx/groups/groups.reducer';
import { membersReducer } from '@pages/home/ngrx/members/members.reducer';
import { currentMemberReducer } from '@pages/home/ngrx/current-member/current-member.reducer';
import { userReducer } from './ngrx/user.reducer';
import { workdayHistoryReducer } from '@pages/home/ngrx/workday-history/workday-history.reducer';

// Effects
import { GroupsEffects } from '@pages/home/ngrx/groups/groups.effects';
import { MembersEffects } from '@pages/home/ngrx/members/members.effects';
import { CurrentMemberEffects } from '@pages/home/ngrx/current-member/current-member.effects';
import { UsersEffects } from './ngrx/user.effects';
import { WorkdayHistoryEffects } from '@pages/home/ngrx/workday-history/workday-history.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([loggerInterceptor, requestInterceptor])
    ),
    provideAnimationsAsync(),
    provideStore({
      groups: groupsReducer,
      members: membersReducer,
      currentMember: currentMemberReducer,
      users: userReducer,
      workdayHistories: workdayHistoryReducer,
    }),
    provideEffects(
      GroupsEffects,
      MembersEffects,
      UsersEffects,
      CurrentMemberEffects,
      WorkdayHistoryEffects
    ),
  ],
};
