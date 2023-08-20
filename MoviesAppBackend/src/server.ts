import dotenv from 'dotenv';
import app from './app';
import { connectToDatabase } from './services/database.service';
import { logError } from './services/logging.service';


dotenv.config();
const port = process.env.PORT || 8000;

(async () => {
  try {
    await connectToDatabase()

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    logError(error);
  }
})();
