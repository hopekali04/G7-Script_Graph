const express = require('express');
const app = express();

app.set("view engine", "ejs");

const expensesData = [
    { "Food": 250 },
    { "Rent": 1200 },
    { "Transportation": 150 },
    { "Entertainment": 100 },
    { "Utilities": 80 }
];

const home = (req, res) => {
    const data = {
        title: "Home",
        expensesData: expensesData
    };
    res.render("index", data);
};

app.get('/', home);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
