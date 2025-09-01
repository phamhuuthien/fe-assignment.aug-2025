import React from "react";
import { store } from "@/shared/store";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

function ErrorFallback() {
  return (
    <div role="alert">
      <h2>Ooops, something went wrong! </h2>
      <button onClick={() => globalThis.location.assign(globalThis.location.origin)}>
        Refresh
      </button>
    </div>
  );
}

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router>{children}</Router>
        </ErrorBoundary>
      </Provider>
    </React.Suspense>
  );
}
