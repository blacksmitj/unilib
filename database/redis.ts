import { Redis } from "@upstash/redis";
import { redisToken, redisUrl } from "@/lib/config";

const redis = new Redis({
  url: redisUrl,
  token: redisToken,
});

export default redis;
