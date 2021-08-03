require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const { connect } = require('./database/mongoDBConnection');
const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//Routes
app.use('/user', userRouter);
app.use('/api', require('./routes/categoryRouter'));
app.use('/api', require('./routes/upload'));
app.use('/api', require('./routes/productRouter'));

//Connect to mongoDB
connect();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome David' });
});

const PORT = process.env.PORT || '5000';
app.listen(PORT, () => {
  console.log('Server is running on port :', PORT);
});
