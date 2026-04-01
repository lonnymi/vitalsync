const express = require("express");
const app = express();

// Utilisé par K8s liveness probe et la pipeline CI
app.get("/health", (req, res) => {
  res.json({ status: 'ok', source: 'health-monitor', uptime: process.uptime(), timestamp: new Date() });
// Proxifié depuis nginx : browser → /api/health → nginx → backend /api/health
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", version: "1.1", uptime: process.uptime(), timestamp: new Date() });
});

app.get("/api/vitals", (req, res) => {
  res.json([{ id: 1, name: "Running", duration: 30 }]);
});

app.get("/api/activities", (req, res) => {
  res.json([]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));

module.exports = app;
