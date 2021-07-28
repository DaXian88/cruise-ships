const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Port', () => {
    describe('takes a port and ship', () => {
        let dublin; 
        let liverpool; 
        let itinerary; 
        let titanic; 
        
        beforeEach(() => {
            liverpool = new Port('Liverpool');
            dublin = new Port('Dublin');
            itinerary = new Itinerary([liverpool, dublin]);
            titanic = new Ship(itinerary);
        }); 
        it('can be instantiated', () => { 

        expect(dublin).toBeInstanceOf(Object)
        })

        it('has a name property', () => {

        expect(dublin).toHaveProperty('name')
        })
    });
    
    it('adds a ship to the port', () => {
        const ship = jest.fn;
        const liverpool = new Port('Liverpool')

        liverpool.addShip(ship);
        expect(liverpool.ships).toEqual([ship]);
        });

    it('removes a ship from a port', () => {
        const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin');
        const itinerary = new Itinerary([liverpool, dublin]);
        const titanic = jest.fn();

        liverpool.removeShip(titanic);
        expect(liverpool.ships).toEqual([])
        });
   
   

});
