import React, { useRef, useState, useEffect } from "react";
import "./styles/CreateBet.css";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useNotification } from "web3uikit";
import { BsPlayBtn } from "react-icons/bs";

const CreateBet = (props) => {
  const dispatch = useNotification();
  const [state, setState] = useState("");
  const [pinstate, setPinstate] = useState("pick");

  const [inputValueNftName, setInputValueNftName] = useState("");
  const [inputValueNftDescription, setInputValueNftDescription] = useState("");
  const [inputValueAttribute, setInputValueAttribute] = useState("");
  const [inputBetAmount, setInputBetAmount] = useState("");
  const [inputWalletAddress, setInputWalletAddress] = useState("");

  const [attributeValues, setAttributeValues] = useState([]);
  const [attributeValues1, setAttributeValues1] = useState([]);

  const [images, setImages] = useState([]);

  const [nftModal, setNftModal] = useState("modal-container__target");
  const [updateModal, setUpdateModal] = useState("modal-container__target");
  const [detailsModal, setDetailsModal] = useState("modal-container__target");

  const wrapperRef = useRef(null);

  const renderState = () => {
    let state;

    if (pinstate == "private") {
      state = "private";
    } else if (pinstate == "public") {
      state = "public";
    } else {
      state = "pick";
    }

    return state;
  };

  const handleState = (e) => {
    setPinstate(e.target.value);
  };

  const onInputChangeNftName = (event) => {
    const { value } = event.target;
    setInputValueNftName(value);
  };

  const onInputChangeNftDescription = (event) => {
    const { value } = event.target;
    setInputValueNftDescription(value);
  };

  const onInputChangeAttribute = (event) => {
    const { value } = event.target;
    setInputValueAttribute(value);
  };

  const onInputChangeBetAmount = (event) => {
    const { value } = event.target;
    setInputBetAmount(value);
  };

  const onInputChangeWalletAddress = (event) => {
    const { value } = event.target;
    setInputWalletAddress(value);
  };

  const sendAttributeValue = () => {
    setAttributeValues([...attributeValues, inputValueAttribute]);

    setNftModal("modal-container__target");
  };

  const sendRadioValues = () => {
    setUpdateModal("modal-container__target");
  };

  const sendDetailsValue = () => {
    setDetailsModal("modal-container__target");
  };

  const navigate = useNavigate();
  return (
    <div className="createBet__container">
      <div className="createBet__box">
        <h1>CREATE YOUR BET</h1>
        <div ref={wrapperRef} className="drop-file-input">
          <div className="drop-file-input__label">
            <p>Choose Your Bet Type</p>
          </div>
          <div className="pinning__selector">
            <div className="selector__div">
              <select
                required
                onChange={handleState}
                value={pinstate}
                className="selector"
              >
                <option value="pick" selected>
                  Select Bet Type
                </option>
                <option value="public">Public Bet</option>
                <option value="private">Private Bet</option>
              </select>
            </div>
          </div>
        </div>

        {renderState() == "private" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="drop-file-preview"
          >
            <p className="bet__p">Private Bets</p>
            <div className="mint__text__input">
              <input
                type="text"
                required
                placeholder="Enter Event Name"
                value={inputValueNftName}
                onChange={onInputChangeNftName}
                className="text__input__name"
              />

              <input
                type="number"
                required
                placeholder="Enter Bet Amount in Matic"
                value={inputBetAmount}
                onChange={onInputChangeBetAmount}
                className="text__input__name"
              />

              <input
                type="text"
                required
                placeholder="Enter opponent Wallet"
                value={inputWalletAddress}
                onChange={onInputChangeWalletAddress}
                className="text__input__name"
              />

              <textarea
                text="text"
                required
                placeholder="Enter Event Description"
                value={inputValueNftDescription}
                onChange={onInputChangeNftDescription}
                className="text__input__description"
                rows="10"
              ></textarea>

              <div className="input-box">
                <span className="details">Deadline:</span>
                <input type="date" name="deadline" required />
              </div>
              {attributeValues.length > 0 ? (
                <div>
                  {attributeValues.map((attribute, index) => (
                    <div key={index} className="attr__input">
                      <input
                        type="text"
                        placeholder={`${index}: ${attribute}`}
                        className="text__input__attr"
                        disabled
                      />
                      <span
                        className="attr__delete"
                        onClick={() => {
                          const updatedList = [...attributeValues];

                          updatedList.splice(index, 1);

                          setAttributeValues(updatedList);
                        }}
                      >
                        <AiFillDelete className="attr__delete__icon" />
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
              <div
                onClick={() => {
                  setNftModal("modal-container");
                }}
                className="add__attributes"
              >
                <div className="add__link">
                  <span className="add__icon__span">
                    <AiOutlinePlus className="add__icon" />
                  </span>
                  <div className="add__text">Add Event Options</div>
                </div>
              </div>

              <div className="nft__upload__div">
                <button disabled={state} className="nft__upload">
                  {state ? (
                    <div className="loader"></div>
                  ) : (
                    <span className="button__text">Create</span>
                  )}
                </button>
              </div>
            </div>
          </form>
        ) : null}

        {renderState() == "public" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="drop-file-preview"
          >
            <p className="bet__p">Public Bets</p>
            <div className="mint__text__input">
              <input
                type="text"
                required
                placeholder="Enter Event Name"
                value={inputValueNftName}
                onChange={onInputChangeNftName}
                className="text__input__name"
              />
              <input
                type="number"
                required
                placeholder="Enter Bet Amount in Matic"
                value={inputBetAmount}
                onChange={onInputChangeBetAmount}
                className="text__input__name"
              />

              <textarea
                text="text"
                required
                placeholder="Enter Event Description"
                value={inputValueNftDescription}
                onChange={onInputChangeNftDescription}
                className="text__input__description"
                rows="10"
              ></textarea>

              <div className="input-box">
                <span className="details">Deadline:</span>
                <input type="date" name="deadline" required />
              </div>
              {attributeValues.length > 0 ? (
                <div>
                  {attributeValues.map((attribute, index) => (
                    <div key={index} className="attr__input">
                      <input
                        type="text"
                        placeholder={`${index}: ${attribute}`}
                        className="text__input__attr"
                        disabled
                      />
                      <span
                        className="attr__delete"
                        onClick={() => {
                          const updatedList = [...attributeValues];

                          updatedList.splice(index, 1);

                          setAttributeValues(updatedList);
                        }}
                      >
                        <AiFillDelete className="attr__delete__icon" />
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
              <div
                onClick={() => {
                  setNftModal("modal-container");
                }}
                className="add__attributes"
              >
                <div className="add__link">
                  <span className="add__icon__span">
                    <AiOutlinePlus className="add__icon" />
                  </span>
                  <div className="add__text">Add Event Options</div>
                </div>
              </div>

              <div className="nft__upload__div">
                <button disabled={state} className="nft__upload">
                  {state ? (
                    <div className="loader"></div>
                  ) : (
                    <span className="button__text">Create</span>
                  )}
                </button>
              </div>
            </div>
          </form>
        ) : null}
      </div>
      <div className={nftModal}>
        <section class="modal">
          <header class="modal-header">
            <div className="modal__info">
              <h2 class="modal-title">Add Options:</h2>
              <p>
                <i>
                  Note: Minimum of 2 options and <br /> maximum of 4 options
                </i>
              </p>
            </div>

            <span
              onClick={() => {
                setNftModal("modal-container__target");
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
                sendAttributeValue();
              }}
              className="attribute__div"
            >
              <div className="attribute__input">
                <input
                  type="text"
                  required
                  placeholder="Enter Attribute Name"
                  value={inputValueAttribute}
                  onChange={onInputChangeAttribute}
                  className="attribute__input__name"
                />
              </div>
              <div className="attribute__button__div">
                <button className="attribute__button">Add</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div className="nft__div">
        <h1 className="nft__h1">My Bets</h1>

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
              <button
                className="btn2"
                onClick={() => {
                  setUpdateModal("modal-container");
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={updateModal}>
        <section class="modal">
          <header class="modal-header">
            <div className="modal__info">
              <h2 class="modal-title">
                Provide the index of the correct option:
              </h2>
              <p>
                <i>
                  Note: Please do well not to <br /> provide false information{" "}
                  <br />
                  as the correct option
                </i>
              </p>
            </div>

            <span
              onClick={() => {
                setUpdateModal("modal-container__target");
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
                sendRadioValues();
              }}
              className="attribute__div"
            >
              <div className="attribute__input">
                <div className="radio__div">
                  <div className="radio__info">
                    <input type="radio" id="age1" name="age" value="0" />
                    <label for="0">index 0</label>
                  </div>

                  <div className="radio__info">
                    <input type="radio" id="age2" name="age" value="1" />
                    <label for="1">index 1</label>
                  </div>

                  <div className="radio__info">
                    <input type="radio" id="age3" name="age" value="2" />
                    <label for="2">index 2</label>
                  </div>
                </div>
              </div>
              <div className="attribute__button__div">
                <button className="attribute__button">Update</button>
              </div>
            </form>
          </div>
        </section>
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

export default CreateBet;
