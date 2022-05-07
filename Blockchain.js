const block = require('./Block');

class Blockchain{
    constructor(){
        this.chain = [block.genesis()];
    }

    addBlock(data){
        //retrieve the last block for the last hash
        const lastBlock = this.chain[this.chain.length-1];
        //create a new block and add it to the chain
        const newBlock = this.chain.push(block.mineBlock(lastBlock, data));

        return newBlock;
    }
}

module.exports = Blockchain;