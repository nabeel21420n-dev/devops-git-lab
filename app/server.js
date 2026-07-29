const express = require("express");

const app = express();

app.get("/", (_request, response) => {
  response.status(200).send("Hello from CI/CD Node App!");
});

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);

  app.listen(port, "0.0.0.0", () => {
    console.log(`Application listening on port ${port}`);
  });
}

module.exports = app;
