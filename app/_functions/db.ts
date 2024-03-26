import { createClient } from "@libsql/client/web";

// extend process.env type
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TUSRO_URL: string;
      TURSO_TOKEN: string;
    }
  }
}

export const client = createClient({
  url: "libsql://zmc-teunw.turso.io",
  authToken: process.env.TURSO_TOKEN,
});