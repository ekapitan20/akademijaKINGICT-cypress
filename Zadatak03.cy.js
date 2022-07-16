describe("Testira search funkciju", () => {

    it("Pretrazuje stranicu", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page"); //posjeti str
        cy.get("#searchInput").type("Quality assurance{enter}"); //pretraga po id-u i trazenoj rijecii
        // cy.get("#searchButton").click(); //pritisak za pretrazivanje
        cy.url().should("contain", "Quality_assurance");
        cy.get("#searchInput").type("Software development{enter}");
        cy.url().should("contain", "Software_development");

        var wikiSearch = "Test automation";

        // = uzmi vrijednost sa desne i pospremi sa lijeve strane
        // == usporedi vrijednosti s desne i lijeve strane
        // === usporeduje radi li se o istom objektu, odnosno jesu li vrijednosti objekta zapisane u istom bloku memorije na racunalu

        cy.get("#searchInput").type(wikiSearch + "{enter}"); // trazenje po varijabli koja je gore
        cy.url().should("contain", "Test_automation");

        var currentURL = cy.url();


    })

})
