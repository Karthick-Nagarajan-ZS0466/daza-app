import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideRouter } from '@angular/router';
import { StateObservable, Store } from '@ngrx/store';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    Store,
    {
      provide: StateObservable,
      useFactory: (store: Store) => store,
      deps: [Store],
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
