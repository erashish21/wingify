describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("https://sakshingp.github.io/assignment/login.html");
  });

  it("should successfully login with valid credentials and navigate to the home page", () => {
    cy.get("#username").type("validUsername");
    cy.get("#password").type("validPassword");
    cy.get("#log-in").click();
    cy.url().should("include", "home.html");
    // Add assertions to verify successful navigation to the home page
  });
});

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("https://sakshingp.github.io/assignment/login.html");
    cy.get("#username").type("validUsername");
    cy.get("#password").type("validPassword");
    cy.get("#log-in").click();
    cy.url().should("include", "home.html");
  });

  it("should click the AMOUNT header in the transaction table and check if the values are sorted", () => {
    // Intercept image requests and respond with a custom error message
    cy.intercept("/assignment/img/*.jpg", (req) => {
      req.reply({
        statusCode: 404,
        body: "Image not found",
      });
    });

    cy.get("#transactionsTable") // Assuming the transaction table has an id "transactionsTable"
      .find("th") // Assuming the header cells are "th" elements
      .contains("Amount")
      .click()
      .then(() => {
        cy.get("#transactionsTable tbody tr")
          .find("td.text-right")
          .then((amountCells) => {
            const amounts = Array.from(amountCells, (cell) =>
              parseFloat(cell.textContent.trim().replace(/[^0-9.-]+/g, ""))
            );
            const sortedAmounts = [...amounts].sort((a, b) => a - b);

            // Verify if the amounts are sorted in ascending order
            expect(amounts).to.deep.equal(sortedAmounts);
          });
      });
  });
});