function Ship(startingPort) {
    this.startingPort = startingPort;
    this.setSail = function () {
        this.startingPort = null;
    }
};



module.exports = Ship