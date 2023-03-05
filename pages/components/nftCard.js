import Head from "next/head";

import styled from "styled-components";
//import styles from "./apppractice/styles/Home.module.css";

import {contractAddress, abi, battlerABI, battlerContract, expABI,expContractAddress} from "/constants/constants.js"
import Web3 from "web3";
import { useState, useEffect } from 'react'

import {ethers} from 'ethers'
export function GetEXPBalance(tokenId) {
  
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: "eth_requestAccounts" });
            
            const EXP = new web3.eth.Contract(expABI, expContractAddress)  
           
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its result
            const response = await EXP.methods.balanceOf(window.ethereum.selectedAddress).call({from: ethereum.selectedAddress})
            // After fetching data stored it in posts state.
            const balance = ethers.utils.formatEther( response )

            setPosts(balance);
  
            // Closed the loading page
            setLoading(false);
            console.log(balance, "this is the balance")
        }
  
        // Call the function
        loadPost();
    }, []);
  
    return (
<div><p className="py-1 px-1 justify-left bg-grey-500 w-13 h-100 text-left rounded-full text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism">Dickels:{posts}</p></div>
       
    );
}
const inductSeanie = async (tokenId) =>{
    await window.ethereum.enable();
          const web3 = new Web3(window.ethereum)
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const shauniesNFT = new web3.eth.Contract(battlerABI, battlerContract) 
          await shauniesNFT.methods.inductShaunie(tokenId).send({from: ethereum.selectedAddress})
  }
  const levelUp = async (tokenId) =>{
    await window.ethereum.enable();
          const web3 = new Web3(window.ethereum)
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const shauniesNFT = new web3.eth.Contract(battlerABI, battlerContract) 
          await shauniesNFT.methods.requestStats(tokenId).send({from: ethereum.selectedAddress})
  }
  




export function App(tokenId) {
  
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const shauniesNFT = new web3.eth.Contract(abi, contractAddress)  
           
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its result
            const response = await shauniesNFT.methods.TOKEN_URI().call({from: ethereum.selectedAddress})
            // After fetching data stored it in posts state.
            setPosts(response);
  
            // Closed the loading page
            setLoading(false);
            //console.log(posts)
        }
  
        // Call the function
        loadPost();
    }, []);
  
    return (
        posts
       
    );
}
export function LoadStats(tokenId) {
  
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const RPGimporttes = new web3.eth.Contract(battlerABI, battlerContract)  
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its result
            const response = await RPGimporttes.methods.tokenIds(tokenId).call({from: ethereum.selectedAddress})
            // After fetching data stored it in posts state.
            setPosts(response);
  
            // Closed the loading page
            setLoading(false);
            console.log(posts)
        }
  
        // Call the function
        loadPost();
    }, []);
  
    return (
        posts
    );
}

 


    

export const NFTCard = ({ nft }) => {
  
    
    
    
    
        
    
    const Input = ({ placeholder, name, type, value, handleChange }) => (
        <input
          placeholder={placeholder}
          type={type}
          step="0.0001"
          value={value}
          onChange={(e) => handleChange(e, name)}
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
      );

      const getTokenIds= async ()=>{
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum)
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const RPGimporttes = new web3.eth.Contract(abi, contractAddress)  
        const tokenId = await RPGimporttes.methods.getTokenIds().call({from: ethereum.selectedAddress})
        return(
            console.log(tokenId)
        )
          }
          async function Moveset(tokenId){
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const RPGimporttes = new web3.eth.Contract(abi, contractAddress)  
            const moveset = await RPGimporttes.methods.tokenURI(tokenId).call({from: ethereum.selectedAddress})
            return(
                moveset
            )
              }
              
        

    //   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
    const nftaddress = '0x3Bb1eE174fC8F0a4eBAC55A4C4860A62ba77c0c2'
    return (
        
        <div className="w-1/4 flex flex-col blue-glassmorphism  ">
            
        <div className="rounded-md blue-glassmorphism" >
        
        <img className="object-cover h-128 w-full rounded-t-md" src={App(nft.id.tokenId)} ></img>
            {/* <img className="object-cover h-128 w-full rounded-t-md" src={nft.media.gateway} ></img> */}
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-transparent rounded-b-md h-110 blue-glassmorphism ">
            <div className="bg-transparent blue-glassmorphism">
                <h2 className="text-xl text-white">{nft.title}</h2>
                <p className="text-white flex justify-center mb-1">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 1)}</p> 
                
                <p className="text-white flex justify-center mb-1" > </p>
            </div>

            <div className="flex flex-col y-gap-2 px-2 py-3 bg-transparent rounded-t-medium h-110 blue-glassmorphism ">
                <p className="text-gray-600">{nft.description?.substr(0, 150)}</p>
                <p className="text-white flex justify-center mb-1">Level: {LoadStats(nft.id.tokenId)[0]}</p>
                <p className="text-white flex justify-center mb-1">HP: {LoadStats(nft.id.tokenId)[1]}</p> 
                <p className="text-white flex justify-center mb-1">Attack: {LoadStats(nft.id.tokenId)[2]}</p> 
                <p className="text-white flex justify-center mb-1">Special Attack: {LoadStats(nft.id.tokenId)[3]}</p> 
                <p className="text-white flex justify-center mb-1">Defense: {LoadStats(nft.id.tokenId)[4]}</p> 
                <p className="text-white flex justify-center mb-1">Special Defense: {LoadStats(nft.id.tokenId)[5]}</p>
                <p className="text-white flex justify-center mb-1">Speed: {LoadStats(nft.id.tokenId)[6]}</p>  
            </div>
            
            <div className="flex justify-center mb-1">
                
                <a target={"_blank"} href={`https://goerli.etherscan.io/token/${nft.contract.address}`} className="py-2 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism">View on etherscan</a>
                
            </div>
            <div className="flex justify-center mb-1">
            <button className="py-1 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism" onClick={(e)=>{inductSeanie(nft.id.tokenId)}}>Induct me!</button>
            </div>
            <div className="flex justify-center mb-1">
                
            <button className="py-1 px-2 bg-blue-500 w-22 text-center rounded-md text-white cursor-pointer hover:bg-[#2546bd] white-glassmorphism" onClick={(e)=>{requestStats(nft.id.tokenId)}}>Level Me up!</button>
            
            </div>
            <div>
                
            </div>
        </div>

    </div>
    )
}

export default function Home1() {
    return <>{/* nothing */}</>;
  }




