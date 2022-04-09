const mongoose = require('mongoose');
const {Schema} = mongoose;
const {compareSync, hashSync, genSaltSync} = require('bcryptjs');

const UserSchema = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true}
});

/**
 * Apply this hook when a document's mongoose was 
 * saved 
 */

UserSchema.pre('save', async function(next){
  const user = this;
  console.log('Here', user);
  if(!user.isModified('password')){
    return next();
  }

  /**
   * if it isn't modified the password, it's generate 
   * a new password hashed
   * 
  */
  const salt = genSaltSync(10) // generate salt with 10 characters
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  console.log(user.password);
  next();
})


UserSchema.methods.toJSON = function(){
  let user = this.toObject();
  console.log('show a new user: ', user);
  delete user.password;
  return user;
}

UserSchema.methods.comparePassword = function(password){
  return compareSync(password, this.password);
}

module.exports = mongoose.model('user', UserSchema);
// console.log();