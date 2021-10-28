
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/Home/index.html');
    });

    describe('HTML elements', ()=>{   
        it('contains a body element', ()=>{
            cy.get('body').should('be.visible');
        });
    });
});