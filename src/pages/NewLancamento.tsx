import React from "react";
import { Link } from "react-router-dom";

export function NewLancamento() {
  return (
    <section className="new-lancamento">
      <h2>Novo Lançamento</h2>
      <form>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <input type="text" id="descricao" name="descricao" />
        </div>
        <div>
          <label htmlFor="data">Data</label>
          <input type="date" id="data" name="data" />
        </div>
        <div>
          <label htmlFor="hora">Hora</label>
          <input type="time" id="hora" name="hora" />
        </div>
        <div>
          <label htmlFor="valor">Valor (R$)</label>
          <input type="number" id="valor" name="valor" step="0.01" />
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <select id="tipo" name="tipo">
            <option value="Pago">Pago</option>
            <option value="Recebido">Recebido</option>
          </select>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </section>
  );
}