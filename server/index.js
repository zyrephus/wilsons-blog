const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://admin:%25BlackDragon73@cluster0.thlymdf.mongodb.net/App`);

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model("users", UserSchema);

app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    try {
        const check = await UserModel.findOne({username: username});
        if (check) {
            res.json("exist");
        }
        else {
            res.json("notexist");
        }
    } 
    catch (error) {
        res.json("notexist");
    }
})

app.listen(4000, () => {
    console.log("Server is running.");
});