export default function Navbar({ score, bestScore }) {
  return (
    <>
      <nav className="flex flex-row items-center justify-around p-4 bg-green-400">
        <div className="brand-name text-2xl">
          <h1>Poke-Memory</h1>
        </div>
        <div className="">
          Score:{score}
          <br />
          Best Score:{bestScore}
        </div>
      </nav>
    </>
  );
}
