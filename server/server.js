let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

let PORT = 4000;
app.listen(PORT, () => console.log(`App is running on: ${PORT}`));
