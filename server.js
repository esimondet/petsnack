const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const generateUploudUrl = require('./controllers/javascript/s3');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

const helper = require('./utils/helper');

const hbs = exphbs.create({ helper });

const sess = {
    secret: 'i think this is a cookie?',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
  
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/s3Url', async function(req, res, next) {
    const url = await generateUploudUrl();
    res.send({ url });
});

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});