import { useEffect, useState } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard/CollectionCard";
import Header from "./components/Header/Header";
import axios from "axios";
import PunkList from "./components/PunkList/PunkList";
import Main from "./components/Main/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getNfts = async () => {
      try {
        const openseaData = await axios.get(
          "https://testnets-api.opensea.io/assets?asset_contract_address=0x54f41cC56C620C4f42Fe6e890EBAC0e99395ba1b&order_direction=asc"
        );
        const data = openseaData.data.assets;
        setPunkListData(data);
      } catch (error) {}
    };
    return getNfts();
  }, []);

  return (
    <div className="app">
      <Header />

      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
