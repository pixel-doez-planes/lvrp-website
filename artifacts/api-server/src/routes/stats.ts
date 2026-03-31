import { Router, type IRouter, type Request, type Response } from "express";
import { PlayerStatsInput, PlayerStatsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

const DEFAULT_STATS = {
  playersOnline: 0,
  staffOnline: 0,
  discordMembers: 0,
  serverStatus: "online" as "online" | "offline" | "maintenance",
  updatedAt: null as string | null,
};

let currentStats = { ...DEFAULT_STATS };

function requireApiKey(req: Request, res: Response): boolean {
  const apiKey = process.env["STATS_API_KEY"];
  if (!apiKey) {
    res.status(503).json({ error: "STATS_API_KEY is not configured on the server." });
    return false;
  }
  const provided = req.headers["x-api-key"] ?? req.headers["authorization"]?.replace(/^Bearer\s+/i, "");
  if (provided !== apiKey) {
    res.status(401).json({ error: "Invalid or missing API key." });
    return false;
  }
  return true;
}

router.get("/stats", (_req, res) => {
  const data = PlayerStatsResponse.parse(currentStats);
  res.json(data);
});

router.post("/stats", (req, res) => {
  if (!requireApiKey(req, res)) return;

  const result = PlayerStatsInput.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: "Invalid payload.", details: result.error.flatten() });
    return;
  }

  currentStats = {
    playersOnline: result.data.playersOnline,
    staffOnline: result.data.staffOnline,
    discordMembers: result.data.discordMembers,
    serverStatus: result.data.serverStatus ?? currentStats.serverStatus,
    updatedAt: new Date().toISOString(),
  };

  res.json({ ok: true, updatedAt: currentStats.updatedAt });
});

export default router;
