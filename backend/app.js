const express = require('express');
const cors = require('cors');
const app = express();

const CompanyController = require('./company.controller.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/api/data', CompanyController.getCompanies);
app.post('/api/data', CompanyController.createCompany);
app.delete('/api/data/:id', CompanyController.deleteCompany);
app.post('/api/data/:id', CompanyController.updateCompany);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

