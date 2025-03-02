import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { databaseUrl } from "@/lib/config";

const sql = neon(databaseUrl);

export const db = drizzle({ client: sql });
