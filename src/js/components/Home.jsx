import { useEffect, useState } from "react";
import SecondsCounter from "./SecondsCounter";

function Home() {
  const [segundero, setSegundero] = useState(0);
  const [detener, setDetener] = useState(false);

  useEffect(() => {
    if (detener) return; // Si está detenido, no crear intervalos

    const contador = setInterval(() => {
      setSegundero(prev => prev + 1);
    }, 1000);

    return () => clearInterval(contador);
  }, [detener]);

  const detenerContador = () => setDetener(true);
  const reanudarContador = () => setDetener(false);
  const resetearContador = () => {
    setSegundero(0);
    setDetener(false);
  };

  return (
    <div className="container text-center my-5">
      <SecondsCounter seconds={segundero} />
      <div className="d-flex justify-content-center gap-2 mt-3">
        <button className="btn btn-danger" onClick={detenerContador}>
          ⏸ Detener
        </button>
        <button className="btn btn-success" onClick={reanudarContador}>
          ▶ Reanudar
        </button>
        <button className="btn btn-warning" onClick={resetearContador}>
          🔄 Resetear
        </button>
      </div>
    </div>
  );
}

export default Home;
