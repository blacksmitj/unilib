import { Client as WorkflowClient } from "@upstash/workflow";
import { qstashToken, qstashUrl } from "./config";

export const workflowClient = new WorkflowClient({
  baseUrl: qstashUrl,
  token: qstashToken,
});
