const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
    it('can be instansiated', () => {
        const liverpool = new Port('Liverpool')
        const dublin = new Port('Dublin');
        const itinerary = new Itinerary([liverpool, dublin]);
        expect(itinerary).toBeInstanceOf(Object) 
    })
    it('has ports property', () => {
        const liverpool = jest.fn();
        const dublin = jest.fn();
        const itinerary = new Itinerary([liverpool, dublin]);

        expect(itinerary).toHaveProperty('ports');
        expect(itinerary.ports).toEqual([liverpool, dublin]);
    })
} )