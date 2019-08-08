// doc: https://docs.cypress.io/zh-cn/guides/overview/why-cypress.html

describe('Hooks', () => {
    before(() => {
        // runs once before all tests in the block
    })

    after(() => {
        // runs once after all tests in the block
    })

    beforeEach(() => {
        // runs before each test in the block
    })

    afterEach(() => {
        // runs after each test in the block
    })
})

describe('The Home Page', () => {
    beforeEach(() => {
        cy.visit('/demo/') // change URL to match your dev URL
    })

    const prefix = 'kwe'
    it('successfully loads', () => {
        cy.contains('DEMO')
        //测试点击效果
        cy.get(`.${prefix}-text`).type('list1')
        cy.get(`.${prefix}-btn`).click()
        cy.contains('list1')

        //测试回车效果
        cy.get(`.${prefix}-text`).type('list2{enter}')
        cy.contains('list2')
    })
})
