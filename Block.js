const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, lastHash, newHash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.newHash = newHash;
    this.data = data;
  }

  toString() {
    return `Block: 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash.substring(0, 10)}
            New Hash : ${this.newHash.substring(0, 10)}
            Data     : ${this.data}
        `;
  }

  static genesis() {
    return new this("Genesis Time", "------", "Ln8Nm5Fb40-Sm40", []);
  }

  static mineBlock(lastBlock, data) {
    const timestamp = Date.now();
    const lastH = lastBlock.newHash;
    const addedData = data;
    const hash = Block.hash(timestamp, lastH, data);
    return new this(timestamp, lastH, hash, addedData);
  }

  static hash(timestamp, lBlockHash, data) {
    return SHA256(`${timestamp}${lBlockHash}${data}`).toString();
  }
}

module.exports = Block;
