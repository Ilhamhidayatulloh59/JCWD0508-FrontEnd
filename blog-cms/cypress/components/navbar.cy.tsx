import Navbar from "@/components/navbar";

describe("Navbar Component", () => {
  it("render component correctly", () => {
    cy.mount(<Navbar />);
    cy.get('a[href="/"]').should("exist");
    cy.get("img").should("exist");
  });
});
