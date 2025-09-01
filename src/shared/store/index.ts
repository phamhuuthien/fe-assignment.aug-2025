import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as Sentry from "@sentry/react";
import env from "../config/env";

Sentry.init({
  dsn: "https://069f9946d5109d47121a1cf04405b351@o4509937649319936.ingest.us.sentry.io/4509937650565120",
  release: env.VERSION,
  enabled: true,
  environment: env.NODE_ENV,
  tracesSampleRate: 0.1,
  attachStacktrace: true,
  // integrations: [Sentry.replayIntegration()],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
});

// sentry-redux
const sentryReduxEnhancer = Sentry.createReduxEnhancer();

export const rootReducer = combineReducers({
  // your reducers
});

export const storeConfig = {
  reducer: rootReducer,
  devTools: env.IS_DEV,
  enhancers: (getDefaultEnhancers: any) => getDefaultEnhancers().prepend(sentryReduxEnhancer),
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().prepend(),
};

export const store = configureStore(storeConfig);
