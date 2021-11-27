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

console.log(bitcoin);
