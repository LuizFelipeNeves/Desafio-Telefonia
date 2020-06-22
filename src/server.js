import { app } from './API';

const { PORT } = process.env;

app.listen(PORT || 3000, () => {
  console.log(`Server listening on port ${PORT}!`);
});
