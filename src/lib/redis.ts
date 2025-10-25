import { createClient, RedisClientType } from "redis";

// Declare the Redis client globally
let redisClient: RedisClientType;

// Initialize Redis client and connection
if (process.env.REDIS_URL) {
  redisClient = createClient({ url: process.env.REDIS_URL });
} else {
  redisClient = createClient();
}

// Ensure that Redis client connects to the Redis server
redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});

async function connectRedis(): Promise<void> {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

export { redisClient, connectRedis };
