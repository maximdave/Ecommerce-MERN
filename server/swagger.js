const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'ECOMMERCE MERN SHOP',
    description:
      'API for the MERN stack ECOMMERCE app by <b>David Enoragbon</b> using NodeJS.',
  },
  host: 'localhost:5000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Auth',
      description: 'Login and Register endpoints',
    },
    {
      name: 'Products',
      description: 'Ecommerce Products endpoints',
    },
    {
      name: 'Category',
      description: 'Ecommerce Products Categories endpoints',
    },
    {
      name: 'Uploads',
      description: 'Admin Upload Products Images endpoints',
    },
  ],
  securityDefinitions: {
    Authorization: {
      type: 'apiKey',
      name: 'Authorization',
      description: 'Value: Bearer ',
      in: 'header',
      scheme: 'bearer',
    },
  },
  definitions: {
    RegisterModel: {
      $name: 'David Enoragbon',
      $email: 'enoragbondavid35@mail.com',
      $password: 'Password123#',
    },
    LoginModel: {
      $email: 'enoragbondavid35@mail.com',
      $password: 'Password123#',
    },
    CategoryModel: {
      $name: 'Men',
    },
    ProductModel: {
      $product_id: 'pr06',
      $title: 'Joker',
      $price: 95,
      $description: 'A very funny Character',
      $content: 'content',
      $images: {
        public_id: 'ecommerce/qb4w3ss1cqwukzmyp46q',
        url: 'https://res.cloudinary.com/maximdave/image/upload/v1628035869/ecommerce/qb4w3ss1cqwukzmyp46q.jpg',
      },
      $category: 'Men',
    },
    UploadModel: {
      $file: 'myImage.png',
    },
    DeleteUploadModel: {
      $public_id: 'ecommerce/xwir6kmuqvvrxvvyk9oh',
    },
  },
};

const outputFile = './swagger_output.json';
const endpointFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
  require('./server.js');
});
