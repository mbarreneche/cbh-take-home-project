// const { deterministicPartitionKey } = require("./dpk");

// describe("deterministicPartitionKey", () => {
//   it("Returns the literal '0' when given no input", () => {
//     const trivialKey = deterministicPartitionKey();
//     expect(trivialKey).toBe("0");
//   });
// });

const crypto = require("crypto");
const { deterministicPartitionKey } = require('./index');

describe('deterministicPartitionKey', () => {
  it('returns "0" when called with no arguments', () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  it('returns the provided partitionKey when called with an event that has a partitionKey property', () => {
    const event = { partitionKey: "myPartitionKey" };
    expect(deterministicPartitionKey(event)).toBe("myPartitionKey");
  });

  it('returns the hash of the event when called with an event that does not have a partitionKey property', () => {
    const event = { id: 1, name: "myEvent" };
    const data = JSON.stringify(event);
    const hash = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hash);
  });

  it('returns the hash of the JSON string of the provided candidate when it is not a string', () => {
    const event = { id: 1, name: "myEvent" };
    const data = JSON.stringify(event);
    const hash = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hash);

    expect(deterministicPartitionKey(123)).toBe(crypto.createHash("sha3-512").update("123").digest("hex"));
  });

  it('returns the hash of the candidate when its length exceeds MAX_PARTITION_KEY_LENGTH', () => {
    const longString = "a".repeat(260);
    const hash = crypto.createHash("sha3-512").update(longString).digest("hex");
    expect(deterministicPartitionKey(longString)).toBe(hash);
  });
});
