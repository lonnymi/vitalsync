const express = require("express");
const app = express();


app.get("/health", (req, res) => {
  res.json({ status: "ok", version: "1.1", uptime: process.uptime(), timestamp: new Date() });
});


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
