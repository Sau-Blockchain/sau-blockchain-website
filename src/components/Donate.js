import { useState } from "react";
import { ethers } from "ethers";
import TxList from "./TxList";

const DEFAULT_ADDR = "0x1d387De3cC20126CaAe213248609F2ECDEf650A5";

const startPayment = async ({ setError, setTxs, ether }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tx = await signer.sendTransaction({
      to: DEFAULT_ADDR,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr: DEFAULT_ADDR });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await startPayment({
      
      setTxs,
      ether: data.get("ether")
    });
  };

  return (
    <div className="container" style={{ marginTop: '80px' }}>
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Bağış Yap
          </h1>
          <div>
            <div className="my-3 form-floating">
              <input
                name="ether"
                type="text"
                className="form-control"
                placeholder="Amount in ETH"
              />
              <label for="floatingPassword">Bağış Tutarı</label>
            </div>
          </div>
        </main>
        <footer className="p-4 d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary btn-lg  submit-button focus:ring focus:outline-none w-full"
          >
            Bağış
          </button>
          
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
    </div>
  );
}
