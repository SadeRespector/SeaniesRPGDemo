"use strict";
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mt": () => (/* binding */ abi),
/* harmony export */   "OZ": () => (/* binding */ expABI),
/* harmony export */   "RN": () => (/* binding */ expContractAddress),
/* harmony export */   "Um": () => (/* binding */ battlerABI),
/* harmony export */   "g4": () => (/* binding */ battlerContract),
/* harmony export */   "iF": () => (/* binding */ contractAddress)
/* harmony export */ });
/* unused harmony exports TMAddress, TMABI */
const contractAddress = "0x9f4FC01f18Cd418099c5E0C42d71AA41f8eb9824";
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "TOKEN_URI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "characters",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "Level",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Species",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Atk",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "spAtk",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Def",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "spDef",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Speed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "typing",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "Name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTokenIds",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "setTokenAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const battlerContract = "0xE7f5f53B9Af8273001Cfc778107d6dE3b90d6760";
const battlerABI = [
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "subscriptionId",
                "type": "uint64"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "have",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "want",
                "type": "address"
            }
        ],
        "name": "OnlyCoordinatorCanFulfill",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "tokenIsEntered",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "requestId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "randomWords",
                "type": "uint256[]"
            }
        ],
        "name": "RequestFulfilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "requestId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "numWords",
                "type": "uint32"
            }
        ],
        "name": "RequestSent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "callotherContracTest",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "characters",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "Level",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Atk",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "spAtk",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Def",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "spDef",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Speed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "enteredIds",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "inductShaunie",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastRequestId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "requestId",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "randomWords",
                "type": "uint256[]"
            }
        ],
        "name": "rawFulfillRandomWords",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "requestIds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "requestStats",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "s_requests",
        "outputs": [
            {
                "internalType": "bool",
                "name": "fulfilled",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "exists",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_shauniesAddress",
                "type": "address"
            }
        ],
        "name": "setShauniesaddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "setTokenAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tokenIds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "Level",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Atk",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "spAtk",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Def",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "spDef",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "Speed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const expABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "initialSupply",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftContract",
                "type": "address"
            }
        ],
        "name": "setContractAsAuthorizedMinter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const expContractAddress = "0x25974e7a98afb84b80421AC429c3250eD6807968";
const TMAddress = "0x64097C118e7653D2f70c823ACE11342d21D39B4E";
const TMABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tmId",
                "type": "uint256"
            }
        ],
        "name": "getTmNum",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTokenIds",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tms",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "TMnumber",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


/***/ }),

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App),
/* harmony export */   "GetEXPBalance": () => (/* binding */ GetEXPBalance),
/* harmony export */   "LoadStats": () => (/* binding */ LoadStats),
/* harmony export */   "NFTCard": () => (/* binding */ NFTCard),
/* harmony export */   "default": () => (/* binding */ Home1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(138);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_6__);



//import styles from "./apppractice/styles/Home.module.css";




function GetEXPBalance(tokenId) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const loadPost = async ()=>{
            await window.ethereum.enable();
            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(window.ethereum);
            await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            const EXP = new web3.eth.Contract(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .expABI */ .OZ, _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .expContractAddress */ .RN);
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
            // Await make wait until that 
            // promise settles and return its result
            const response = await EXP.methods.balanceOf(window.ethereum.selectedAddress).call({
                from: ethereum.selectedAddress
            });
            // After fetching data stored it in posts state.
            const balance = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(response);
            setPosts(balance);
            // Closed the loading page
            setLoading(false);
            console.log(balance, "this is the balance");
        };
        // Call the function
        loadPost();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "py-1 px-1 justify-left bg-grey-500 w-13 h-100 text-left rounded-full text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism",
            children: [
                "Dickels:",
                posts
            ]
        })
    });
}
const inductSeanie = async (tokenId)=>{
    await window.ethereum.enable();
    const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(window.ethereum);
    await window.ethereum.request({
        method: "eth_requestAccounts"
    });
    const shauniesNFT = new web3.eth.Contract(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .battlerABI */ .Um, _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .battlerContract */ .g4);
    await shauniesNFT.methods.inductShaunie(tokenId).send({
        from: ethereum.selectedAddress
    });
};
const levelUp = async (tokenId)=>{
    await window.ethereum.enable();
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({
        method: "eth_requestAccounts"
    });
    const shauniesNFT = new web3.eth.Contract(battlerABI, battlerContract);
    await shauniesNFT.methods.requestStats(tokenId).send({
        from: ethereum.selectedAddress
    });
};
function App(tokenId) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const loadPost = async ()=>{
            await window.ethereum.enable();
            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(window.ethereum);
            await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            const shauniesNFT = new web3.eth.Contract(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .abi */ .Mt, _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .contractAddress */ .iF);
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
            // Await make wait until that 
            // promise settles and return its result
            const response = await shauniesNFT.methods.TOKEN_URI().call({
                from: ethereum.selectedAddress
            });
            // After fetching data stored it in posts state.
            setPosts(response);
            // Closed the loading page
            setLoading(false);
        //console.log(posts)
        };
        // Call the function
        loadPost();
    }, []);
    return posts;
}
function LoadStats(tokenId) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const loadPost = async ()=>{
            await window.ethereum.enable();
            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(window.ethereum);
            await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            const RPGimporttes = new web3.eth.Contract(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .battlerABI */ .Um, _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .battlerContract */ .g4);
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
            // Await make wait until that 
            // promise settles and return its result
            const response = await RPGimporttes.methods.tokenIds(tokenId).call({
                from: ethereum.selectedAddress
            });
            // After fetching data stored it in posts state.
            setPosts(response);
            // Closed the loading page
            setLoading(false);
            console.log(posts);
        };
        // Call the function
        loadPost();
    }, []);
    return posts;
}
const NFTCard = ({ nft  })=>{
    const Input = ({ placeholder , name , type , value , handleChange  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            placeholder: placeholder,
            type: type,
            step: "0.0001",
            value: value,
            onChange: (e)=>handleChange(e, name),
            className: "my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        });
    const getTokenIds = async ()=>{
        await window.ethereum.enable();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(window.ethereum);
        await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        const RPGimporttes = new web3.eth.Contract(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .abi */ .Mt, _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .contractAddress */ .iF);
        const tokenId = await RPGimporttes.methods.getTokenIds().call({
            from: ethereum.selectedAddress
        });
        return console.log(tokenId);
    };
    async function Moveset(tokenId) {
        await window.ethereum.enable();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(window.ethereum);
        await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        const RPGimporttes = new web3.eth.Contract(_constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .abi */ .Mt, _constants_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .contractAddress */ .iF);
        const moveset = await RPGimporttes.methods.tokenURI(tokenId).call({
            from: ethereum.selectedAddress
        });
        return moveset;
    }
    //   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
    const nftaddress = "0x3Bb1eE174fC8F0a4eBAC55A4C4860A62ba77c0c2";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-1/4 flex flex-col blue-glassmorphism  ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-md blue-glassmorphism",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "object-cover h-128 w-full rounded-t-md",
                    src: App(nft.id.tokenId)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col y-gap-2 px-2 py-3 bg-transparent rounded-b-md h-110 blue-glassmorphism ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-transparent blue-glassmorphism",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl text-white",
                                children: nft.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-white flex justify-center mb-1",
                                children: [
                                    "Id: ",
                                    nft.id.tokenId.substr(nft.id.tokenId.length - 1)
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-white flex justify-center mb-1",
                                children: " "
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col y-gap-2 px-2 py-3 bg-transparent rounded-t-medium h-110 blue-glassmorphism ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-600",
                                children: nft.description?.substr(0, 150)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-white flex justify-center mb-1",
                                children: [
                                    "Level: ",
                                    LoadStats(nft.id.tokenId)[0]
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-white flex justify-center mb-1",
                                children: [
                                    "HP: ",
                                    LoadStats(nft.id.tokenId)[1]
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-white flex justify-center mb-1",
                                children: [
                                    "Attack: ",
                                    LoadStats(nft.id.tokenId)[2]
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-white flex justify-center mb-1",
                                children: [
                                    "Special Attack: ",
                                    LoadStats(nft.id.tokenId)[3]
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-white flex justify-center mb-1",
                                children: [
                                    "Defense: ",
                                    LoadStats(nft.id.tokenId)[4]
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-white flex justify-center mb-1",
                                children: [
                                    "Special Defense: ",
                                    LoadStats(nft.id.tokenId)[5]
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-white flex justify-center mb-1",
                                children: [
                                    "Speed: ",
                                    LoadStats(nft.id.tokenId)[6]
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center mb-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            href: `https://goerli.etherscan.io/token/${nft.contract.address}`,
                            className: "py-2 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism",
                            children: "View on etherscan"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center mb-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "py-1 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism",
                            onClick: (e)=>{
                                inductSeanie(nft.id.tokenId);
                            },
                            children: "Induct me!"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center mb-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "py-1 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism",
                            onClick: (e)=>{
                                requestStats(nft.id.tokenId);
                            },
                            children: "Level Me up!"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                ]
            })
        ]
    });
};
function Home1() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}


/***/ })

};
;