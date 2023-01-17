describe('Administrar Usuarios (ESS) en el sistema de gestión de una empresa de forma básica', () => {
    beforeEach(
        'Precondición: El administrador debe estar situado en el módulo PIM, se debe de autoasignarsele el rol de Administrador a la hora de ingresar.',
        function () {
            cy.fixture('usuario').then((data) => {
                this.data = data;
                cy.login(this.data.user, this.data.password);
            });
            cy.get('span').contains('PIM').click();
        }
    );
    it('US-27068 | TS-27076 | TC1: Validar que administrador pueda registrar con datos validos', () => {
        cy.get('a').contains('Add Employee').click({ timeout: 10000 });
        cy.get('input[name="firstName"]').type('Braian');
        cy.get('input[name="middleName"]').type('Perdomo');
        cy.get('input[name="lastName"]').type('Decia');
        cy.get('.oxd-switch-input').click();
        cy.get(
            ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
        ).type('perdomobraian');
        cy.get(
            '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
        ).type('1234Abc.');
        cy.get(
            '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
        ).type('1234Abc.');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-toast');
        cy.get('.orangehrm-edit-employee-name > .oxd-text');
    });
    it('US-27068 | TS-27076 | TC2: Validar que administrador no pueda registrar con datos que superen el limite maximo de caracteres necesarios', () => {
        cy.get('a').contains('Add Employee').click({ timeout: 10000 });
        cy.get('.oxd-switch-input').click();
        cy.get('.oxd-button--secondary').click();
    });
    it('US-27068 | TS-27076 | TC3: Validar que administrador no pueda registrar con datos que no lleguen al minimo de caracteres necesarios', () => {});
    it.only('US-27068 | TS-27076 | TC4: Validar que administrador encuentre un empleado especifico a traves del buscador', () => {
        cy.get(
            ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'
        ).type('Lucas');
        cy.get(
            '\\/\\/\\*\\[\\@id\\=\\"app\\"\\]\\/div\\[1\\]\\/div\\[2\\]\\/div\\[2\\]\\/div\\/div\\[1\\]\\/div\\[2\\]\\/form\\/div\\[2\\]\\/button\\[2\\]'
        ).click();
    });
    it('US-27068 | TS-27076 | TC5: Validar que administrador elimine el perfil de un empleado', () => {});
    it('US-27068 | TS-27076 | TC6: Validar que administrador elimine el perfil de mas de un empleado', () => {});
    it('US-27068 | TS-27076 | TC7: Validar que administrador edita el perfil de un empleado', () => {});
});
