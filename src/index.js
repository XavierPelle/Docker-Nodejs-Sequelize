require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
import { userRouter } from "./routes/user.route";
import { productRouter } from "./routes/product.route";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(bodyParser.json());

sequelize.sync()
    .then(() => {
        console.log('La base de données et la table sont synchronisées.');
    })
    .catch((error) => {
        console.error('Erreur lors de la synchronisation de la base de données:', error);
    });

app.get("/", function (req, res) {
    res.send("Base route");
});

app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//psql -h db -U main -d jira_db
