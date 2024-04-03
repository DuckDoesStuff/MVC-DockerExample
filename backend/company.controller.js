const Company = require('./company.model.js');

const CompanyController = {
    async getCompanies(req, res) {
        const companies = await Company.findAll();
        res.send(companies);
    },
    async createCompany(req, res) {
        const { companyName, address, website, phone } = req.body;
        const company = await Company.create({
            name: companyName,
            address: address,
            web: website,
            phone: phone
        });
        res.send(company);
    },
    async deleteCompany(req, res) {
        const id = req.params.id;
        const rowsDeleted = await Company.destroy({
            where: {
                id: id
            }
        });
        if (rowsDeleted === 0) {
            res.send({status : 404});
        }else {
            res.send({status : 200});
        }
    },
    async updateCompany(req, res) {
        console.log(req.body);
        const id = req.params.id;
        const { companyName, address, website, phone } = req.body;
        const companyToUpdate = await Company.findByPk(id);
        if (!companyToUpdate) {
            res.send({status : 404});
            return;
        }
        const company = await companyToUpdate.update({
            name: companyName,
            address: address,
            web: website,
            phone: phone
        });
        res.send(company);
    }
}

module.exports = CompanyController;