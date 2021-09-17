const title = "div.top-bar_title__3-ijn"
const search = "input.top-bar_search__17SXF"
const breeds = "div[class=' breed-menu_buttons__3XY3j buttons_button__1xE_3 ']" // A selector that excludes the breed-menu_placeholder
const noBreedMessege = ".app_container__1gsFC > :nth-child(3)"

describe(
    "The UI displays the required items",
    () => {
        before(() => {

            cy.visit(Cypress.env("url")) // The environmental url variable can be changed in cypress.json

        })

        it(
            "A title element in the top left reading 'Dogs'",
            () => {
                cy.get(title).should("be.visible")
                    .and(
                        "have.text",
                        "Dogs!"
                    ) // Verifing that the app title is visible and 'Dogs'

            }
        )

        it(
            "A search input in the top right with the placeholder text 'Search'",
            () => {
                cy.get(search).should(
                    "have.attr",
                    "placeholder"
                )
                    .and(
                        "equal",
                        "search"
                    ) // Checking to verify that the placeholder of the search is 'search'
            }
        )

        it(
            "The breed names in a grid of 3 rows of 4 buttons (12 total)",
            () => {
                cy.get(breeds).should(
                    "have.length",
                    "12"
                )
                    .and("be.visible") // Asserting that there shold be 12 breed buttons displayed in total (3 rows of 4 buttons)
            }
        )

        it(
            "A message below the breeds when no breed is selected",
            () => {
                cy.get(noBreedMessege).should(
                    "have.text",
                    "Click on a breed to see some images."
                )
                    .and("be.visible") // When no breed is selected, this text should display below the breeds
            }
        )
    }
)
