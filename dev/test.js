const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();
// const previousBlockHash = "ASDADASDASDC";
// const currentBlockData = [
//   {
//     amount: 10,
//     sender: "ASDAVVLJNL",
//     recipient: "JJALKJASDOI",
//   },
//   {
//     amount: 50,
//     sender: "JOIJOIASD",
//     recipient: "NNANSDHASD",
//   },
//   {
//     amount: 700,
//     sender: "ONOIOIJ",
//     recipient: "QWEEQWE",
//   },
// ];
// const hash = bitcoin.hashBlock(previousBlockHash, currentBlockData, 89378);
// const proofOfWork = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

// console.log({
//   hash,
//   proofOfWork,
// });

// bitcoin.createNewBlock(1234, "abcd1234", "abcd1234");
// bitcoin.createNewTransaction(100, "John", "Doe");

// bitcoin.createNewBlock(5678, "efgh5678", "efgh5678");
// bitcoin.createNewTransaction(50, "John", "Doe");
// bitcoin.createNewTransaction(300, "John", "Doe");
// bitcoin.createNewTransaction(2000, "John", "Doe");

// bitcoin.createNewBlock(910, "xxx910", "xxx910");

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1638683668141,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1638683760696,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1638683857269,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "cee485d0558f11eca0bbff2e05cf654d",
          transactionId: "0614a2b0559011eca0bbff2e05cf654d",
        },
        {
          amount: 10,
          sender: "ABBSKASDKJB3",
          recipient: "DKKOKJNNKKKKJ99",
          transactionId: "2ac5f230559011eca0bbff2e05cf654d",
        },
        {
          amount: 20,
          sender: "ABBSKASDKJB3",
          recipient: "DKKOKJNNKKKKJ99",
          transactionId: "2e01bc40559011eca0bbff2e05cf654d",
        },
        {
          amount: 30,
          sender: "ABBSKASDKJB3",
          recipient: "DKKOKJNNKKKKJ99",
          transactionId: "31b0ba80559011eca0bbff2e05cf654d",
        },
      ],
      nonce: 105857,
      hash: "00008e88405c49e0c29019d3e3a21f3cdceb44626e895488f43781ecce84f6cd",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1638683902938,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "cee485d0558f11eca0bbff2e05cf654d",
          transactionId: "3fa03bc0559011eca0bbff2e05cf654d",
        },
        {
          amount: 40,
          sender: "ABBSKASDKJB3",
          recipient: "DKKOKJNNKKKKJ99",
          transactionId: "46f70c50559011eca0bbff2e05cf654d",
        },
        {
          amount: 50,
          sender: "ABBSKASDKJB3",
          recipient: "DKKOKJNNKKKKJ99",
          transactionId: "482998e0559011eca0bbff2e05cf654d",
        },
        {
          amount: 60,
          sender: "ABBSKASDKJB3",
          recipient: "DKKOKJNNKKKKJ99",
          transactionId: "4a43c650559011eca0bbff2e05cf654d",
        },
        {
          amount: 70,
          sender: "ABBSKASDKJB3",
          recipient: "DKKOKJNNKKKKJ99",
          transactionId: "4cf9be90559011eca0bbff2e05cf654d",
        },
      ],
      nonce: 28971,
      hash: "00001681dc5343260b864ee61984cc967a7979db58dbe765c4a48cd15cdcbcec",
      previousBlockHash:
        "00008e88405c49e0c29019d3e3a21f3cdceb44626e895488f43781ecce84f6cd",
    },
    {
      index: 5,
      timestamp: 1638683907023,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "cee485d0558f11eca0bbff2e05cf654d",
          transactionId: "5ad84fe0559011eca0bbff2e05cf654d",
        },
      ],
      nonce: 59453,
      hash: "00008b28ae6b2960e11c39e83acab86a36fc988792b8d030e7fba579f6e133ca",
      previousBlockHash:
        "00001681dc5343260b864ee61984cc967a7979db58dbe765c4a48cd15cdcbcec",
    },
    {
      index: 6,
      timestamp: 1638683908164,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "cee485d0558f11eca0bbff2e05cf654d",
          transactionId: "5d477b20559011eca0bbff2e05cf654d",
        },
      ],
      nonce: 6770,
      hash: "00007934d3c6b429ba7c627c5daf5291ffe5f1b65d0389b1ad14c8236d49f489",
      previousBlockHash:
        "00008b28ae6b2960e11c39e83acab86a36fc988792b8d030e7fba579f6e133ca",
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "cee485d0558f11eca0bbff2e05cf654d",
      transactionId: "5df5bc80559011eca0bbff2e05cf654d",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));
