var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '92111111177',
            address: {
                postalcode: '69060000',
                street: 'Avenida André Araújo',
                number: '2075',
                details: 'Torre Gama, ap 500',
                district: 'Aleixo',
                city_state: 'Manaus/AM'
            },
        delivery_method: 'Moto',
        cnh: 'cnh-digital.jpg'
        }
        return data
    }
}
