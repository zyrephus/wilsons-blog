const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://admin:%25BlackDragon73@cluster0.thlymdf.mongodb.net/?retryWrites=true&w=majority`);

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserModel = mongoose.model("users", UserSchema);

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Login successful.");
            }
            else {
                res.json("Incorrect password.");
            }
            res.json("Incorrect username.");
        }
    })
})

app.listen(4000, () => {
    console.log("Server is running.");
});