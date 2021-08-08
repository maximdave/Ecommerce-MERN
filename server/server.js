require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const { connect } = require('./database/mongoDBConnection');
const userRouter = require('./routes/userRouter');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//Swagger for API documentation
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//Routes
app.use('/user', userRouter);
app.use('/api', require('./routes/categoryRouter'));
app.use('/api', require('./routes/upload'));
app.use('/api', require('./routes/productRouter'));
app.use('/api', require('./routes/paymentRouter'));

//Connect to mongoDB
connect();

app.get('/', (req, res) => {
  res.json({
    msg: 'Welcome to Ecommerce Shop Backend. Built with ❤️ by David Enoragbon',
  });
});

const PORT = process.env.PORT || '5000';
app.listen(PORT, () => {
  console.log('Server is running on port :', PORT);
});
