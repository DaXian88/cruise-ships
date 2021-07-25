const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Port', () => {
    it('can be instantiated', () => { 
        const port = new Port('Dublin');
        expect(port).toBeInstanceOf(Object)
    })
    it('has a name property', () => {
        const port = new Port('Dublin');
        expect(port).toHaveProperty('name')
    })
    it('adds a ship to the port', () => {
        const dublin = new Port('Dublin');
        const liverpool = new Port('Liverpool');
        const itinerary = new Itinerary([liverpool, dublin]);
        const ship = {};
        liverpool.addShip(ship);
        expect(liverpool.ships).toEqual([ship]);
    })
    it('removes a ship from a port', () => {
        const dublin = new Port('Dublin');
        const liverpool = new Port('Liverpool');
        const itinerary = new Itinerary([liverpool, dublin]);
        const titanic = new Ship(itinerary);
        liverpool.addShip(titanic);
        liverpool.removeShip(titanic);
        expect(liverpool.ships).toEqual([])
    })

})
