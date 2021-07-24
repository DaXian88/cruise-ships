/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        const port = new Port('Liverpool');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship).toBeInstanceOf(Object);
    })
    it('has a starting port', () => {
        const port = new Port('Liverpool');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port)
    })
    it('can set sail', () => {
        const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin')
        const itinerary = new Itinerary([liverpool, dublin])
        const ship = new Ship(itinerary);
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    })
    it('docks at a different port', () => {
        const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin');
        const itinerary = new Itinerary([liverpool, dublin]);
        const ship = new Ship(itinerary);

        ship.setSail()
        ship.dock()

        expect(ship.currentPort).toBe(dublin)
    })
});
