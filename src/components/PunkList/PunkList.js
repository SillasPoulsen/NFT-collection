import CollectionCard from "../CollectionCard/CollectionCard";
import "./Punklist.css";

function PunkList({ punkListData, setSelectedPunk }) {
  return (
    <div className="punkList">
      {punkListData.map((punk, idx) => {
        return (
          <div onClick={() => setSelectedPunk(idx)}>
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_url}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PunkList;
