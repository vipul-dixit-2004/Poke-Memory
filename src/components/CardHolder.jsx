import Card from "./Card";
export default function CardHolder({ position, updateScore }) {
  return (
    <div className="flex flex-justify justify-around flex-wrap flex-row ">
      {position.map((item) => {
        return <Card id={item} key={item} updateScore={updateScore} />;
      })}
    </div>
  );
}
