import React, { useState } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import Metafox from '../assets/images/metamask.png'

const MetamaskLoginButton = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonInstallText, setButtonInstallText] = useState("Metamask yükleyin");
  const [account, setAccount] = useState(null);

  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  }

  const checkIfUserRegistered = async (address) => {
    try {
      const response = await axios.get('/users/' + address);
      // Handle response
      if (response.data === address) {
        return true;
      } else {
        return registerUser(address);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const registerUser = async (address) => {
    try {
      const response = await axios.post('/users/register', {
        address: address,
      });
      console.log('Register user response: ' + response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignMessage = async (publicAddress, nonce) => {
    // Define instance of web3
    const web3 = new Web3(window.ethereum);
    return new Promise((resolve, reject) =>
      web3.eth.personal.sign(
        web3.utils.fromUtf8(`Nonce: ${nonce}`),
        publicAddress,
        (err, signature) => {
          if (err) return reject(err);
          return resolve({ publicAddress, signature });
        }
      )
    );
  }

  const connectToMetamask = async () => {
    try {
      // Connect to metamask and get user accounts
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);

      // Check if user is registered, if not, register them
      const isRegistered = await checkIfUserRegistered(accounts[0]);

      // Request nonce from backend
      const responseNonce = await axios.get('/users/' + accounts[0] + '/nonce');
      const nonce = responseNonce.data;

      // Sign message
      const signedMessage = await handleSignMessage(accounts[0], nonce);

      // Send signature to backend
      const responseSign = await axios.post('/users/' + accounts[0] + '/signature', signedMessage);

      // If successful, redirect to home
      if (responseSign.status === 200) {
        window.location.href = '/';
      }
    } catch (error) {
      console.log(error);
    }
  }

  const performAction = () => {
    if (isMetaMaskInstalled()) {
      connectToMetamask();
    } else {
      // Redirect to metamask install page
      window.open('https://metamask.io/');
    }
  }

  return (
    <div>
      {account ?
        <button 
          className="btn btn-outline-success" 
          disabled={buttonDisabled} 
          onClick={performAction}
        >
          {account.slice(0,9)}
        </button>
        :
        <button 
          className="btn btn-outline-success" 
          disabled={buttonDisabled} 
          onClick={performAction}
        >
          <img width={"20px"} src={Metafox}/>
          <span className='ms-2'>Metamask</span>
        </button>
      }
    </div>
  );
};

export default MetamaskLoginButton;
