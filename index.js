const app = require("./lib/server");
const port = 3000;

app.listen(port, () => {
    console.log(`Visual Thinking API running at http://localhost:${port}`);
});
