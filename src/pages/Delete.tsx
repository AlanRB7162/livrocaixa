import React from "react";
import { useNavigate } from "react-router-dom";

export function DeleteConfirmation() {
  const navigate = useNavigate();

  const confirmarExclusao = () => {
    // Lógica de exclusão pode ser adicionada aqui
    alert("Registro excluído com sucesso!");
    navigate("/register"); // Redireciona para a página de registros
  };

  const cancelarExclusao = () => {
    navigate("/register"); // Redireciona para a página de registros
  };

  return (
    <div className="delete-confirmation">
      <h2>Excluir</h2>
      <p>Você têm certeza de excluir este registro?</p>
      <div className="buttons">
        <button onClick={confirmarExclusao} className="confirm">
          Sim
        </button>
        <button onClick={cancelarExclusao} className="cancel">
          Cancelar
        </button>
      </div>
    </div>
  );
}