import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "250px",
      }}
    >
      {items.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
