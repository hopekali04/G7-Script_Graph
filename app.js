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

const rainfallData = [
    {"January": 60.9},
    {"February": 45.5},
    {"March": 32.0},
    {"April": 15.3},
    {"May": 7.8},
    {"June": 3.2},
    {"July": 2.1},
    {"August": 3.8},
    {"September": 10.5},
    {"October": 25.6},
    {"November": 49.2},
    {"December": 55.7}
];  
const home = (req, res) =>{
    res.render("index")
}
const expense = (req, res) => {
    const data = {
        title: "expenses Graphs",
        expensesData: expensesData
    };
    res.render("expenses", data);
};
const rainfall = (req, res) => {
    const data = {
        title: "Rainfall Graphs",
        rainfallData: rainfallData
    };
    res.render("rainfall", data);
};

app.get('/', home);
app.get('/expense', expense);
app.get('/rainfall', rainfall);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
