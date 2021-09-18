import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function showDeleteConfirmationModal() {
    setModalIsOpen(true);
  }

  function dismissDeleteConfirmationModal() {
    setModalIsOpen(false);
  }

  function deleteTodo() {
    console.log("Todo Deleted");
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={showDeleteConfirmationModal}>
          Delete
        </button>
      </div>
      {
        modalIsOpen && (
          <Modal
            confirmClicked={deleteTodo}
            cancelClicked={dismissDeleteConfirmationModal}
          />
        ) //Same as mosalIsOpen? <Modal /> : null;
      }
      {
        modalIsOpen && (
          <Backdrop backdropClicked={dismissDeleteConfirmationModal} />
        ) //Same as mosalIsOpen? <Backdrop /> : null;
      }
    </div>
  );
}

export default Todo;
