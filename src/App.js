import './App.css';
import { useEffect, useState } from 'react';
import * as solanaWeb3 from "@solana/web3.js";
import { generateKeyPairSigner } from "@solana/kit";
const tg = window.Telegram.WebApp;

function App() {
  const [wallet, setWallet] = useState([]);

  useEffect(()=> {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  const handleCreate = async () => {
    const keypairSigner = await generateKeyPairSigner();
    setWallet([keypairSigner.address,keypairSigner.keyPair.privateKey ])
  }
  return (
    <div className="App">
        <button onClick={onClose}> Close</button>
        <span>{tg.initDataUnsafe?.user?.first_name}</span>
        <button onClick={handleCreate}> Create address</button>
        <div> {wallet}</div>
    </div>
  );
}

export default App;
