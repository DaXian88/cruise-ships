/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let liverpool;
        let dublin;
        let itinerary;
        let titanic;

        beforeEach(() => {
            liverpool = new Port('Liverpool');
            dublin = new Port('Dublin');
            itinerary = new Itinerary([liverpool, dublin]);
            titanic = new Ship(itinerary);
        }); 
        it('can be instantiated', () => {

        expect(titanic).toBeInstanceOf(Object);
        });

        it('has a starting port', () => {

        expect(titanic.currentPort).toBe(liverpool)
        });
        
        it('can set sail', () => {
        titanic.setSail();

        expect(titanic.currentPort).toBeFalsy();
        expect(liverpool.ships).not.toContain(titanic)
        });
        
        it('docks at a different port', () => {
     
        titanic.setSail()
        titanic.dock()

        expect(titanic.currentPort).toBe(dublin)
        });
        
        it('gets added to port on instantiation', () => {

        expect(liverpool.ships).toContain(titanic);
        });
        
        it('can dock at a different port', () => {

        titanic.setSail();
        titanic.dock();

        expect(titanic.currentPort).toEqual(dublin);
        expect(dublin.ships).toContain(titanic)
        
        });
    });

   

});
