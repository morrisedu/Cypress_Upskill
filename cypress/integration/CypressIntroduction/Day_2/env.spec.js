let url = require('../../../fixtures/Staging.json')

if (url.include("test")) {
    cy.fixture("Staging.json").then((data) => {
        // Get the data from the respective JSON files
        data.username();
        data.password();
        data.Url();
        data.quick_launch();
    })
} else if (url.include("uat")) {
    cy.fixture("UAT.json").then((data) => {
        // Get the data from the respective JSON files
        data.username();
        data.password();
        data.Url();
        data.quick_launch();
    })
} else if (url.include("prod")) {
    cy.fixture("Prod.json").then((data) => {
        // Get the data from the respective JSON files
        data.username();
        data.password();
        data.Url();
        data.quick_launch();
    })
}