const { genesis } = require("./Block");
const Block = require("./Block");

const block = Block.mineBlock(Block.genesis(), "this is my data").toString();

console.log(block);
