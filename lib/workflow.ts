import { Client as WorkflowClient } from "@upstash/workflow";
import { qstashToken, qstashUrl, resendToken } from "./config";
import { Client as QStashClient, resend } from "@upstash/qstash";

export const workflowClient = new WorkflowClient({
  baseUrl: qstashUrl,
  token: qstashToken,
});

const client = new QStashClient({ token: qstashToken });

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  await client.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: resendToken }),
    },
    body: {
      from: "Andreas <hello@mypintas.fun>",
      to: [email],
      subject,
      html: message,
    },
  });
};
