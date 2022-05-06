const assert = require("assert");
const Block = require("../Block");

describe("Blockchain testing", () => {
  let data;
  let lastHash;
  let block;

  beforeEach(() => {
    lastHash = Block.genesis();
    data = "Rec data";
    block = Block.mineBlock(lastHash, data);
  });
  it("Sets the `data`", () => {
    assert.equal(data, block.data);
  });

  it("Is the Last Hashn the same", () => {
    assert.equal(lastHash.newHash, block.lastHash);
  });
});
