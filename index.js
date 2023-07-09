const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const sequelize = require('./utils/database');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require('./routers/authRouter');
const postsRouter = require('./routers/postsRouter');

app.get('/', (req, res) => {
	res.status(200).json({ message: 'hello' });
});

app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);

app.get('*', (req, res) => {
	res.status(404).json({ success: false, message: 'Page not found!' });
});

sequelize
	.sync()
	.then((result) => {
		app.listen(8000);
	})
	.catch((err) => {
		console.log(err);
	});
