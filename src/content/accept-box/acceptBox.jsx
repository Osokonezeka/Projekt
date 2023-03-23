import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

function AcceptBox() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [isChecked1, setIsChecked1] = useState(true);
  function changeCheckbox1() {
    setIsChecked1(!isChecked1);
    setIsChecked2(true);
  }
  const [isChecked2, setIsChecked2] = useState(true);
  function changeCheckbox2() {
    setIsChecked2(!isChecked2);
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>Ustawienia prywatności</Modal.Header>
        <Modal.Body>
          <div className="checkboxContainer">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <label className="acceptBox">
                    <div className="alignXYZ">
                      <input
                        onChange={changeCheckbox1}
                        type="checkbox"
                        checked={isChecked1}
                        className="check"
                      />
                      Wszystko
                    </div>
                  </label>
                </Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet...</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <label className="acceptBox">
                    <div className="alignXYZ">
                      <input
                        disabled={isChecked1}
                        onChange={changeCheckbox2}
                        type="checkbox"
                        checked={isChecked2}
                        className="check"
                      />
                      Opcjonalne
                    </div>
                  </label>
                </Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet...</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <label className="acceptBox">
                    <div className="alignXYZ">
                      <input
                        disabled={true}
                        type="checkbox"
                        checked={true}
                        className="check"
                      />
                      Wymagane
                    </div>
                  </label>
                </Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet...</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AcceptBox;

// {/* <div>
// <div className="checkboxContainer">
// <label className="acceptBox">
//   <input
//     onChange={changeCheckbox1}
//     type="checkbox"
//     checked={isChecked1}
//     className="check"
//   />
//   <br />
//   Wszystko
// </label>
// <label className="acceptBox">
//   <input
//     disabled={isChecked1}
//     onChange={changeCheckbox2}
//     type="checkbox"
//     checked={isChecked2}
//     className="check"
//   />
//   <br />
//   Opcjonalne
// </label>
// <label className="acceptBox">
//   <input
//     disabled={true}
//     type="checkbox"
//     checked={true}
//     className="check"
//   />
//   <br />
//   Wymagane
// </label>
// </div>
// <hr className="line" />
// </div> */}
