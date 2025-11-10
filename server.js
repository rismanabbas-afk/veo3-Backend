import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "API Veo3 aktif 🚀" });
});

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt kosong" });

  try {
    const result = {
      id: Date.now(),
      prompt,
      video_url: "https://example.com/generated.mp4",
    };
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal generate video" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));
