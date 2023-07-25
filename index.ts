import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';

const app = express();
app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);

const dbUrl = 'mongodb://localhost:27017/hasnadhiya24';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions)
  .then(() => {
    console.log('Terhubung ke database MongoDB');
  })
  .catch((error) => {
    console.log('Kesalahan saat terhubung ke database:', error);
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server berjalan di https://localhost:${port}`);  
  });
