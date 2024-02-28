const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('./DBConnection/conn');

const jobRoute = require('./Routers/jobRoute');
const categoryRoute = require('./Routers/categoryRoute');
const postRoute = require('./Routers/postRoute'); // Import the post route

app.use(express.json());

// Use both jobRoute, categoryRoute, and postRoute
app.use(jobRoute);
app.use('/api', categoryRoute);
app.use('/api', postRoute); // Adjust the path as needed for postRoute

app.listen(port, () => {
    console.log(`Connection is set up at port ${port}`);
});
