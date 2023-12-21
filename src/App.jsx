import { useReducer } from "react";
import CeaserEncrypt from "./algorithm/Ceaser";
import CeaserDecrypt from "./algorithm/CeaserDecrypt";
import AffineEncrypt from "./algorithm/AffineEncrypt";
import AffineDecrypt from "./algorithm/AffineDecrypt";
import RSA from "./algorithm/RSA";
import RsaEncrypt from "./algorithm/RsaEncrypt";
import RsaDecrypt from "./algorithm/RsaDecrypt";

const algorithm = [
  {
    name: "Ceaser",
    id: 12354,
    encFunc(text, k) {
      return CeaserEncrypt(text, k);
    },
    decFun(text, k) {
      return CeaserDecrypt(text, k);
    },
  },
  {
    name: "Affine",
    id: 2147854,
    encFun(text, a, b) {
      return AffineEncrypt(text, a, b);
    },
    decFun(text, a, b) {
      return AffineDecrypt(text, a, b);
    },
  },
  {
    name: "RSA",
    id: 214789541,
    encFun(text, p, q, e) {
      return RsaEncrypt(text, p, q, e);
    },
    decFun(text, p, q, e) {
      return RsaDecrypt(text, p, q, e);
    },
  },
];

function App() {
  return (
    <div className="app">
      <Form />
    </div>
  );
}

const initialState = {
  crytoType: "Encryption",
};

function reducer(state, action) {
  switch (action.type) {
    case "cryptoType":
      return {
        ...state,
        cryptoType: action.payLoad,
      };
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cryptoType } = state;
  return (
    <form>
      <div className="form-group">
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          value={cryptoType}
          onChange={(e) =>
            dispatch({ type: "cryptoType", payLoad: e.target.value })
          }
        >
          <option value="encryption">Encryption</option>
          <option value="decryption">Decryption</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1"></label>
        <select className="form-control" id="exampleFormControlSelect1">
          {algorithm.map((algo) => {
            return (
              <option value={algo.name} key={algo.id}>
                {algo.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="text-container">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1"></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) =>
              dispatch({ type: "ciphering", payLoad: e.target.value })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1"></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea2"
            rows="3"
            readOnly
          ></textarea>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="key">Enter Key</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) =>
            dispatch({ type: "keyEntered", payLoad: +e.target.value })
          }
        />
      </div>
      <button
        type="button"
        className="btn btn-lg btn-primary"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "generateOutput" });
        }}
      >
        Generate
      </button>
    </form>
  );
}

export default App;
