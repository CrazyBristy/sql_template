const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");
const { FORMAT } = require("sqlite3");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

let sql = `
CREATE TABLE IF NOT EXISTS Users(
    ID TEXT PRIMARY KEY,
    Username TEXT,
    Emali TEXT,
    DOB TEXT
);SELECT name FROM pragma_table_info("Users");
`
let Ta = 'SELECT name FROM pragma_table_info("Users")'
let c = `
ALTER TABLE Users RENAME COLUMN Email TO Emali;`
let d = `
INSERT INTO Users (ID, Username, Email)
VALUES ("13581","Bob","bob@csie.com")
`
//db.exec(d, CallbackFunc)
//SELECT * FROM Users;
let Table = `SELECT * FROM Users WHERE id = "13581"`;
//db.all(Tabkes, CallbackFunc);
//SELECT 13581 FROM Bob 
//WHERE value = value;
let Tables = `UPDATE Users SET Email = "okok" WHERE id ="13581"`;
let Tabl = `DELETE FROM Users WHERE id = "13581"`;
db.exec(Tabl, CallbackFunc);
db.all(Table, CallbackFunc);
