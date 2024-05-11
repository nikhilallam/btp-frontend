import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router";

export default function Payment() {
  const [cards, setCards] = useState([
    { id: 1, cardNumber: "**** **** **** 3193" },
    { id: 2, cardNumber: "**** **** **** 4296" }
  ]);
  const [newCard, setNewCard] = useState({
    cardholderName: "",
    cardNumber: "",
    expire: "",
    cvv: ""
  });

  const navigate = useNavigate();

  const handleAddCard = () => {
    if (newCard.cardNumber && newCard.expire && newCard.cvv) {
      setCards([...cards, { id: Date.now(), cardNumber: newCard.cardNumber }]);
      setNewCard({ cardholderName: "", cardNumber: "", expire: "", cvv: "" });
    }
  };

  const handleRemoveCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const handleSubmit = () => {
    navigate('/payment-success')
  }

  return (
    <div>
      {/* <Navbar /> */}
    <MDBContainer
      className="py-5"
      fluid
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Settings</h3>
                <h6>Payment</h6>
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              {cards.map(card => (
                <div key={card.id} className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  />
                  <div className="flex-fill mx-3">
                    <div className="form-outline">
                      <MDBInput
                        label="Card Number"
                        id={`form${card.id}`}
                        type="text"
                        size="lg"
                        value={card.cardNumber}
                        readOnly
                      />
                    </div>
                  </div>
                  <a href="#!" onClick={() => handleRemoveCard(card.id)}>Remove card</a>
                </div>
              ))}
              <p className="fw-bold mb-4">Add new card:</p>
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                value={newCard.cardholderName}
                onChange={(e) => setNewCard({ ...newCard, cardholderName: e.target.value })}
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                    value={newCard.cardNumber}
                    onChange={(e) => setNewCard({ ...newCard, cardNumber: e.target.value })}
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="text"
                    size="lg"
                    value={newCard.expire}
                    onChange={(e) => setNewCard({ ...newCard, expire: e.target.value })}
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    value={newCard.cvv}
                    onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                    placeholder="CVV"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn color="success" size="lg" block onClick={() => handleSubmit()}>
                Proceed to Pay
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    {/* <Footer /> */}
    </div>
  );
}
