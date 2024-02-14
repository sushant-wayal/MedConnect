var express = require('express');
var router = express.Router();
var cors = require("cors");
const userModel = require("./users");
const passport = require("passport");
const localStrategy = require("passport-local");

router.use(cors({origin: "http://127.0.0.1:5500"}));

passport.use(new localStrategy(userModel.authenticate()));

router.post("/login", passport.authenticate("local"), function(req,res){
	res.json({
		message: "Success",
	})
})

router.post("/register",function(req,res){
	let userData = new userModel({
		username: req.body.username,
	})
	userModel.register(userData, req.body.password)
	.then(function(registereduser) {
		passport.authenticate("local")(req,res,function(){
			res.json({
				message: "Registered",
			})
		})
	})
})

module.exports = router;
