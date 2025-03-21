// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://c64221a14c2b788162c7b81c2f94d65e@o447951.ingest.us.sentry.io/4507605441380352",

  integrations: [Sentry.prismaIntegration(), nodeProfilingIntegration()],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  maxValueLength: 1000,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
