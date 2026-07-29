const assert = require("node:assert/strict");
const app = require("./server");

const server = app.listen(0, "127.0.0.1", async () => {
  try {
    const address = server.address();

    const response = await fetch(
      `http://127.0.0.1:${address.port}/health`
    );

    assert.equal(response.status, 200);

    const body = await response.json();
    assert.deepEqual(body, { status: "ok" });

    console.log("Health endpoint test passed");

    server.close(() => process.exit(0));
  } catch (error) {
    console.error(error);
    server.close(() => process.exit(1));
  }
});
