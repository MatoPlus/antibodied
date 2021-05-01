declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    CORS_ORIGIN: string;
    GOOGLE_APPLICATION_CREDENTIALS: string;
    GOOGLE_STORAGE_URL: string;
  }
}
