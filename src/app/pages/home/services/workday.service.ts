import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from '@enviroments/environment.development';

import { ServerResponse } from '@models/http-response.model';
import { WorkdayHistory } from '../models/workday.model';

@Injectable({
  providedIn: 'root',
})
export class WorkdayService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}
  getWorkdayHistory(
    group_id: string,
    user_id: string,
    days: string
  ): Observable<WorkdayHistory[]> {
    return this.httpClient
      .get<ServerResponse>(`${this.apiUrl}/workday/by-date`, {
        params: {
          group_id,
          user_id,
          days,
        },
      })
      .pipe(
        map((res) => {
          if (res.status !== 200) {
            throw new Error(res.message);
          }

          return res.data as WorkdayHistory[];
        })
      );
  }
}
