import app from './app';
import {config} from '@configs/index';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});