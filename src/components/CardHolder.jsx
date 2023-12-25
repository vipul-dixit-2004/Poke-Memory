import Card from "./Card";
export default function CardHolder({ position }) {
  return (
    <div className="flex flex-justify justify-around flex-wrap flex-row ">
      {position.map((item) => {
        return <Card id={item} />;
      })}
    </div>
  );
}
