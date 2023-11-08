import "dotenv/config";
import app from "./app";
import appDataSource from "./data-source";

appDataSource
  .initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server is running in port ${process.env.PORT || 3001}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
