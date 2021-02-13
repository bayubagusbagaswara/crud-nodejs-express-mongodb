const express = require("express");

const app = express();
const port = 3001;

/**
 * @method Express
 */
app.get("/", (req, res) => {
  res.send("Routing sederhana berhasil");
});

// listen untuk jalankan server port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
