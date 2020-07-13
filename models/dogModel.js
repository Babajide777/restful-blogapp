let mongoose = require('mongoose');

const uri = 'mongodb+srv://boss:peter1994@cluster0.ypnku.mongodb.net/blogapp?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } );

const Schema = mongoose.Schema;
const blogappSchema = new Schema({
	name: String,
    image: String,
    body: String,
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model("blogapp", blogappSchema);