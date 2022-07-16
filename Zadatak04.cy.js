describe("Testira prisutnost elemenata", () => {

    it("Trazi elemente", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page"); //posjeti str
        cy.get("#searchInput").type("Software testing{enter}"); //pretraga po id-u i trazenoj rijecii
        cy.url().should("contain", "Software_testing"); //provjera
        cy.contains("Software testing"); //jel ima
        cy.contains("Hamburger").should("not.exist"); //nema hamburgera
        cy.get("h1").should("have.length", 1); //ima samo jedan h1
        cy.get("h2").should("have.length.gte", 1); //ima jedan ili vise h2
        //lte za manje ili jednako
        //gte za vise ili jednako
        cy.get("h4").should("have.length.lte", 5);// ne vise od 5 h4
    })

})
