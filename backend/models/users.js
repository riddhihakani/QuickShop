var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
    name : String,
    password: String,
    mobile: String,
    email: {
        type:String,
        unique : true
    },
    saltSecret: String
    
});

UserSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

UserSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


UserSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}



module.exports = mongoose.model('User',UserSchema);