const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useUnifiedTopology: true, useNewUrlParser: true });

const CatSchema = mongoose.Schema({
    name: String
});

const Cat = mongoose.model('Cat', CatSchema);

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => {
    console.log('meow');
    mongoose.connection.close();
});
