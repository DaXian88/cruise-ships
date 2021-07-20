/* globals describe it expect */
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        const ship = new Ship();
        expect(new Ship()).toBeInstanceOf(Object);
    })
    it('has a starting port', () => {
        const Liverpool = new Port('Liverpool')
        const ship = new Ship(Liverpool);
        expect(ship.port).toBe(Liverpool)
    })
    it('can set sail', () => {
        const Liverpool = new Port('Liverpool')
        const ship = new Ship(Liverpool);
        ship.setSail();
        expect(ship.port).toBeFalsy(); 
    })
    it('docks at a port', () => {
        const Liverpool = new Port('Liverpool')
        const ship = new Ship(Liverpool)
        const Dublin = new Port('Dublin')
        ship.dock(Dublin)
        expect(ship.port).toEqual(Dublin)
    })
});
