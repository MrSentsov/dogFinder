const search = "input.top-bar_search__17SXF"
const breeds = "div[class=' breed-menu_buttons__3XY3j buttons_button__1xE_3 ']"
// Selects breeds results only
const searchInput = "dog"
const results = []
// Array with the results of a search
const sortedResults = []
// Array with the results of the search in alphabetical order

describe(
    "The user can search for a specific breed of dog",
    () => {
        before(() => {
            cy.visit(Cypress.env("url"))
            // The environmental url variable can be changed in cypress.json
        })

        it(
            "TC6 - Displays the breeds whose names include the search term",
            () => {
                cy.get(search).type(searchInput)
                cy.get(breeds).each(($el, index, $list) => {
                    // Iterating through each search result
                    const breed = $el.text()
                    // Chai assertion to validate the search results

                    expect(breed).to.contain(searchInput)
                    results.push(breed)
                    sortedResults.unshift(breed)
                })
            }
        )

        it(
            "TC7 - Displays the breeds in alphabetical order",
            () => {
                cy.then(() => {
                    // Sorting the array
                    sortedResults.sort()
                    // Sorting the control array
                    expect(results).to.eql(sortedResults)
                })
            }
        )
    }
)
