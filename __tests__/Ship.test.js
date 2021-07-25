/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        const liverpool = new Port('Liverpool');
        const itinerary = new Itinerary([liverpool]);
        const titanic = new Ship(itinerary);
        expect(titanic).toBeInstanceOf(Object);
    })
    it('has a starting port', () => {
        const liverpool = new Port('Liverpool');
        const itinerary = new Itinerary([liverpool]);
        const titanic = new Ship(itinerary);

        expect(titanic.currentPort).toBe(liverpool)
    })
    it('can set sail', () => {
        const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin');
        const itinerary = new Itinerary([liverpool, dublin]);
        const titanic = new Ship(itinerary);
        titanic.setSail();

        expect(titanic.currentPort).toBeFalsy();
        expect(liverpool.ships).not.toContain(titanic)
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
    it('gets added to port on instantiation', () => {const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin');
        const itinerary = new Itinerary([liverpool, dublin]);
        const titanic = new Ship(itinerary);

        expect(liverpool.ships).toContain(titanic);
    })
    it('can dock at a different port', () => {
        const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin');
        const itinerary = new Itinerary([liverpool, dublin]);
        const titanic = new Ship(itinerary);

        titanic.setSail();
        titanic.dock();

        expect(titanic.currentPort).toEqual(dublin);
        expect(dublin.ships).toContain(titanic)
        
    })

});
