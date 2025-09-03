const SecondsCounter = ({ seconds }) => {
  // Convertimos a string de 6 dígitos con ceros a la izquierda
  const formatted = String(seconds).padStart(6, "0");

  let saludo = "";
  if (seconds < 10) saludo = "¡Recién empezamos!";
  else if (seconds < 30) saludo = "¡Ya vamos avanzando!";
  else saludo = "¡Vas muy bien!";

  return (
    <div className="d-flex flex-column align-items-center my-4">
      {saludo && (
        <div className="alert alert-primary w-50 text-center" role="alert">
          {saludo}
        </div>
      )}

      {/* Bloque digital */}
      <div className="bg-dark text-success fw-bold fs-1 px-4 py-2 rounded font-monospace shadow-lg">
        {formatted}
      </div>
    </div>
  );
};

export default SecondsCounter;