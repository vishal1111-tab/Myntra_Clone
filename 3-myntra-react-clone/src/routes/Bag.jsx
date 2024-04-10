import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
import { useSelector } from "react-redux";
function Bag() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  /// indexof return karta hai agr found hua to +1 nhi to -1
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item}></BagItem>
          ))}
        </div>

        <BagSummary></BagSummary>
      </div>
    </main>
  );
}

export default Bag;
