import React, { useRef, useState, useEffect } from "react";
import { BiFilter, BiFilterAlt } from "react-icons/bi";
import "./styles/Bets.css";
import { BsPlayBtn } from "react-icons/bs";

const Bets = () => {
  const [betstate, setBetState] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [detailsModal, setDetailsModal] = useState("modal-container__target");

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const sendDetailsValue = () => {
    setDetailsModal("modal-container__target");
  };

  const renderState = () => {
    let state;

    if (betstate == "allBet") {
      state = "allBet";
    } else if (betstate == "myBet") {
      state = "myBet";
    }

    return state;
  };

  const handleState = (e) => {
    setBetState(e.target.value);
  };
  return (
    <div className="bets__container">
      <div className="bets__header">
        <h1 className="bets__h1">Available Bets</h1>
        <p className="bets__p">Here are all the Pending Bets</p>
      </div>

      <div className="bets__select">
        <div className="bets__selector">
          <div className="selector__div">
            <select
              required
              onChange={handleState}
              value={betstate}
              className="selector"
            >
              <option value="allBets" selected>
                All Bets
              </option>
              <option value="myBets">My Bets</option>
            </select>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bets__search"
        >
          <input
            type="text"
            required
            placeholder="search"
            value={inputValue}
            onChange={onInputChange}
            className="text__input__bets"
          />

          <BiFilterAlt className="bets__filter__icon" />
        </form>
      </div>
      <div className="t__container">
        <div className="t__cards">
          <div className="t__card">
            <div className="t__left">
              <div className="t__left__info">
                <div className="subject">No of entries:</div>
                <div className="value">115</div>
              </div>
              <div className="t__left__info">
                <div className="subject">Expires in:</div>
                <div className="value">3 hours</div>
              </div>
              <div className="t__left__info">
                <div className="subject">
                  By: <span>#15D32</span>
                </div>
                <div className="value1">
                  <BsPlayBtn />
                  <p>49:30</p>
                </div>
              </div>
            </div>
            <div className="t__right">
              <p>1.3 odds</p>
              <button
                className="btn1"
                onClick={() => {
                  setDetailsModal("modal-container");
                }}
              >
                Details
              </button>
              <button className="btn2">Enter</button>
            </div>
          </div>

          <div className="t__card">
            <div className="t__left">
              <div className="t__left__info">
                <div className="subject">No of entries:</div>
                <div className="value">115</div>
              </div>
              <div className="t__left__info">
                <div className="subject">Expires in:</div>
                <div className="value">3 hours</div>
              </div>
              <div className="t__left__info">
                <div className="subject">
                  By: <span>#15D32</span>
                </div>
                <div className="value1">
                  <BsPlayBtn />
                  <p>49:30</p>
                </div>
              </div>
            </div>
            <div className="t__right">
              <p>1.3 odds</p>
              <button
                className="btn1"
                onClick={() => {
                  setDetailsModal("modal-container");
                }}
              >
                Details
              </button>
              <button className="btn2">Enter</button>
            </div>
          </div>

          <div className="t__card">
            <div className="t__left">
              <div className="t__left__info">
                <div className="subject">No of entries:</div>
                <div className="value">115</div>
              </div>
              <div className="t__left__info">
                <div className="subject">Expires in:</div>
                <div className="value">3 hours</div>
              </div>
              <div className="t__left__info">
                <div className="subject">
                  By: <span>#15D32</span>
                </div>
                <div className="value1">
                  <BsPlayBtn />
                  <p>49:30</p>
                </div>
              </div>
            </div>
            <div className="t__right">
              <p>1.3 odds</p>
              <button
                className="btn1"
                onClick={() => {
                  setDetailsModal("modal-container");
                }}
              >
                Details
              </button>
              <button className="btn2">Enter</button>
            </div>
          </div>

          <div className="t__card">
            <div className="t__left">
              <div className="t__left__info">
                <div className="subject">No of entries:</div>
                <div className="value">115</div>
              </div>
              <div className="t__left__info">
                <div className="subject">Expires in:</div>
                <div className="value">3 hours</div>
              </div>
              <div className="t__left__info">
                <div className="subject">
                  By: <span>#15D32</span>
                </div>
                <div className="value1">
                  <BsPlayBtn />
                  <p>49:30</p>
                </div>
              </div>
            </div>
            <div className="t__right">
              <p>1.3 odds</p>
              <button
                className="btn1"
                onClick={() => {
                  setDetailsModal("modal-container");
                }}
              >
                Details
              </button>
              <button className="btn2">Enter</button>
            </div>
          </div>

          <div className="t__card">
            <div className="t__left">
              <div className="t__left__info">
                <div className="subject">No of entries:</div>
                <div className="value">115</div>
              </div>
              <div className="t__left__info">
                <div className="subject">Expires in:</div>
                <div className="value">3 hours</div>
              </div>
              <div className="t__left__info">
                <div className="subject">
                  By: <span>#15D32</span>
                </div>
                <div className="value1">
                  <BsPlayBtn />
                  <p>49:30</p>
                </div>
              </div>
            </div>
            <div className="t__right">
              <p>1.3 odds</p>
              <button
                className="btn1"
                onClick={() => {
                  setDetailsModal("modal-container");
                }}
              >
                Details
              </button>
              <button className="btn2">Enter</button>
            </div>
          </div>
        </div>
      </div>
      <div className={detailsModal}>
        <section class="modal">
          <header class="modal-header">
            <div className="modal__info">
              <h2 class="modal-title">Bet Details:</h2>
            </div>

            <span
              onClick={() => {
                setDetailsModal("modal-container__target");
              }}
              class="modal-close"
            >
              Close
            </span>
          </header>
          <div class="modal-content">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendDetailsValue();
              }}
              className="attribute__div"
            >
              <div className="attribute__input">
                <div className="details__info">
                  <div className="details__values">
                    <p>Bet ID:</p>
                    <p className="value">0</p>
                  </div>

                  <div className="details__values">
                    <p>Deadline:</p>
                    <p className="value">9/6/2022, 1:40:00 AM</p>
                  </div>

                  <div className="details__values">
                    <p>Bet Master:</p>
                    <p className="value">0x574E...TY677</p>
                  </div>

                  <div className="details__values">
                    <p>Bet Event:</p>
                    <p className="value">BEST ANIME CHARACTER</p>
                  </div>

                  <div className="details__values">
                    <p>Bet Description:</p>
                    <p className="value">
                      This is a bet to know the best anime character
                    </p>
                  </div>

                  <div className="details__values">
                    <p>Bet Price:</p>
                    <p className="value">50 MATIC</p>
                  </div>

                  <div className="details__values">
                    <p>First Outcome:</p>
                    <p className="value">GOKU</p>
                  </div>

                  <div className="details__values">
                    <p>Second Outcome:</p>
                    <p className="value">NARUTO</p>
                  </div>

                  <div className="details__values">
                    <p>Third Outcome:</p>
                    <p className="value">Ichigo</p>
                  </div>

                  <div className="details__values">
                    <p>First Odd:</p>
                    <p className="value">1.3456</p>
                  </div>

                  <div className="details__values">
                    <p>Second Odds:</p>
                    <p className="value">1.5678</p>
                  </div>

                  <div className="details__values">
                    <p>Third Odd:</p>
                    <p className="value">1.6789</p>
                  </div>

                  <div className="details__values">
                    <p>Total Bets Placed:</p>
                    <p className="value">7</p>
                  </div>

                  <div className="details__values">
                    <p>Total Amount Bet:</p>
                    <p className="value">120 Matic</p>
                  </div>

                  <div className="details__values">
                    <p>Correct Choice:</p>
                    <p className="value">??</p>
                  </div>

                  <div className="details__values">
                    <p>Executed:</p>
                    <p className="value">False</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bets;
