describe("Demonstrira click funkciju na wikipediji", () => {

    it("Odrađuje klikove", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page"); //posjeti str
        cy.contains("Contents").click(); //klikni na rijec contents
        cy.get("a[title='Wikipedia:Contents/Technology and applied sciences']").first().click(); // klikni po kodu di je to
        cy.contains("Software").first().click(); // klikni na prvi software koji naides
        cy.go("back"); //nazad
        cy.reload(); //reload str
        cy.go("forward"); //naprijed
        cy.go(-2); //2 nazad str

    })

})
