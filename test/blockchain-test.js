const assert = require('assert');''
const Blockchain = require('../Blockchain');
const Block = require('../Block');


describe('Test the blockchain class', () => {
    let blockChain;

    beforeEach(() => {
        blockChain = new Blockchain();
    });

    it('Starts with the Genesis block', () => {
        assert(blockChain.chain[0], Block.genesis());
    });

    it('Creates a new Block in the chain' ,() => {
        const data = 'Foo';
        blockChain.addBlock(data);
        assert.equal(blockChain.chain[blockChain.chain.length-1].data, data);
    })
});