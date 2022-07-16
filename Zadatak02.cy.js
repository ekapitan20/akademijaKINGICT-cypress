describe("Provjerava URL statuse", () => {

    it("Otvara i provjerava URL-ove", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page"); //posjeti str
        cy.url().should("contain", "Main_Page"); // da sadrzi main page
        cy.contains("About Wikipedia").first().click();
        cy.url().should("contain", "Wikipedia:About");
        cy.url().should("not.contain", "Main_page");
    })
})
