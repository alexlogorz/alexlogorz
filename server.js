const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const path = require('path')

app.use(cors());
app.use(express.json());


if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => console.log(`listening on port ${port}`));