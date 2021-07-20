function Ship(port) {
    this.port = port;
    this.setSail = function() {
        this.port = null;
    }
    this.dock = function(port) {
        this.port = port
    }
    
};



module.exports = Ship