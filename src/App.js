import './App.css';
import { useEffect, useState } from 'react';
import { Keypair } from "@solana/web3.js";
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
    const keypair = Keypair.generate();
    setWallet([keypair.publicKey, keypair.secretKey ])
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
