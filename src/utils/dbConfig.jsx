import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://smart_cancer_owner:FpvZ7bajEML9@ep-cold-flower-a5c3320i-pooler.us-east-2.aws.neon.tech/smart_cancer?sslmode=require"
);
export const db = drizzle(sql, { schema });
