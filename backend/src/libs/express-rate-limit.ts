import { Request, Response, NextFunction } from "express";

interface Options {
  windowMs?: number;
  max?: number;
  message?: string;
}

interface HitInfo {
  count: number;
  expires: number;
}

export default function rateLimit(options: Options = {}) {
  const windowMs = options.windowMs ?? 15 * 60 * 1000;
  const max = options.max ?? 100;
  const message = options.message ?? "Too many requests, please try again later.";
  const hits = new Map<string, HitInfo>();

  return (req: Request, res: Response, next: NextFunction): void => {
    const ip = req.ip || req.connection.remoteAddress || "";
    const now = Date.now();
    let hit = hits.get(ip);

    if (!hit || hit.expires <= now) {
      hit = { count: 0, expires: now + windowMs };
      hits.set(ip, hit);
    }

    hit.count += 1;

    if (hit.count > max) {
      res.status(429).send(message);
      return;
    }

    next();
  };
}
