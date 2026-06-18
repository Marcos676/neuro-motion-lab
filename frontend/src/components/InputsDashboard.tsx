export default function InputsDashboard() {
  return (
    <div>
      <h2>Control neural simulado</h2>
      <div>
        <div>
          <label htmlFor="muscle-intensity">Intensidad muscular:</label>
          <input type="number" name="muscle-intensity" id="" />
        </div>
        <div>
          <label htmlFor="contraction">Contracción:</label>
          <input type="number" name="contraction" id="" />
        </div>
        <div>
          <label htmlFor="fatigue">Fatiga:</label>
          <input type="number" name="fatigue" id="" />
        </div>
        <div>
          <label htmlFor="noise">Ruido:</label>
          <input type="number" name="noise" id="" />
        </div>
      </div>
    </div>
  );
}
