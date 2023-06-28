import React from "react";
import { deleteLinkService } from "../services";
import { FaTrash } from "react-icons/fa"; // Importa el ícono de la papelera

export const DeleteLinks = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not logged in");
      }
      await deleteLinkService(token, id);
      onDelete(id);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <button onClick={handleDelete}>
      <FaTrash /> Delete {/* Usa el ícono de la papelera junto con el texto "Delete" */}
    </button>
  );
};
