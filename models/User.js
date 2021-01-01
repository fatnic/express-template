const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
	},
	{ timestamps: true }
);

// UserSchema.statics.athing = function () {
// 	return true;
// };

// UserSchema.pre('save', function (next) {
// 	next();
// });

module.exports = mongoose.model('User', UserSchema);
