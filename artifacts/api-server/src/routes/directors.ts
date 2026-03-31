import { Router, type IRouter } from "express";

const router: IRouter = Router();

router.get("/directors/:userId/avatar", async (req, res) => {
  const { userId } = req.params;
  const token = process.env["DISCORD_BOT_TOKEN"];

  if (!token) {
    res.status(503).json({ error: "DISCORD_BOT_TOKEN not configured." });
    return;
  }

  if (!/^\d{17,20}$/.test(userId)) {
    res.status(400).json({ error: "Invalid Discord user ID." });
    return;
  }

  try {
    const discordRes = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      headers: { Authorization: `Bot ${token}` },
    });

    if (!discordRes.ok) {
      res.status(discordRes.status).json({ error: "Discord API error." });
      return;
    }

    const user = await discordRes.json() as {
      id: string;
      username: string;
      global_name?: string;
      avatar?: string;
    };

    const avatarUrl = user.avatar
      ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith("a_") ? "gif" : "png"}?size=256`
      : `https://cdn.discordapp.com/embed/avatars/${(BigInt(user.id) >> 22n) % 6n}.png`;

    res.json({
      id: user.id,
      username: user.username,
      displayName: user.global_name ?? user.username,
      avatarUrl,
    });
  } catch {
    res.status(500).json({ error: "Failed to fetch Discord user." });
  }
});

export default router;
