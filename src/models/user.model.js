const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type:String,
      required:true,
      trim:true,
      unique:true,
      lowercase:true,
      minlength: 3,
      maxlength: 30,
      match:/^[a-zA-Z0-9._]+$/,
      index:true

})