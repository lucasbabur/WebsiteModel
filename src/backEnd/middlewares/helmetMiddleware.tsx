import helmet from "helmet";

const helmetMiddleware = helmet();

// 7. Content Security Policy - Added as part of helmet
// Customize CSP as per your needs. This is just a default setup.
helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    // Add other directives here
  },
});

export default helmetMiddleware;
