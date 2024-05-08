import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Import the interceptors
import { loggerInterceptor } from './interceptors/logger.interceptor';
import { requestInterceptor } from './interceptors/request.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([loggerInterceptor, requestInterceptor])
    ),
    provideAnimationsAsync(), provideAnimationsAsync(),
  ],
};
