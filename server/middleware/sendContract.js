import { ethers } from "ethers";

const contractADD = "0xcc637a86e222d3050e535585abd04ad0226655c7";

const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "string",
        name: "_occupation",
        type: "string",
      },
      {
        internalType: "string",
        name: "_picturePath",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
    ],
    name: "storeFormData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "formDataList",
    outputs: [
      {
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "occupation",
        type: "string",
      },
      {
        internalType: "string",
        name: "picturePath",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getFormData",
    outputs: [
      {
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "occupation",
        type: "string",
      },
      {
        internalType: "string",
        name: "picturePath",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getFormDataByIndex",
    outputs: [
      {
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "occupation",
        type: "string",
      },
      {
        internalType: "string",
        name: "picturePath",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFormDataCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const storeForm = async (
  firstName,
  lastName,
  email,
  password,
  picturePath,
  location,
  occupation
) => {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );

  const signer = provider.getSigner();

  const FormContract = new ethers.Contract(contractADD, contractABI, signer);

  //  firstName = "vignesh2";
  //  lastName = "gawali";
  //  location = "pune";
  //  occupation = "worker";
  //  picturePath = "kndflns";
  //  email = "vbgvbg76@gmail.com";
  //  password = "1235678";

  await FormContract.storeFormData(
    firstName,
    lastName,
    location,
    occupation,
    picturePath,
    email,
    password
  ).then(() => console.log("created"));
};

// StoreForm();
