import { useReducer } from "react";
import CeaserEncrypt from "./algorithm/Ceaser";
import CeaserDecrypt from "./algorithm/CeaserDecrypt";
import AffineEncrypt from "./algorithm/AffineEncrypt";
import AffineDecrypt from "./algorithm/AffineDecrypt";

function App() {
  return (
    <div className="app">
      <Form />
    </div>
  );
}

const initialState = {
  cipher: "ceaser",
  k: 0,
  input: "",
  generatedOutput: "",
  crypto: "encryption",
};
function reducer(state, action) {
  switch (action.type) {
    case "cryptologyTypeChecked":
      return {
        ...state,
        crypto: action.payLoad,
      };
    case "cipherSelected":
      return {
        ...state,
        cipher: action.payLoad,
      };
    case "ciphering":
      return {
        ...state,
        input: action.payLoad,
      };
    case "keyEntered":
      return {
        ...state,
        k: action.payLoad,
      };
    case "generateOutput":
      return {
        ...state,
        generatedOutput:
          state.crypto === "encryption"
            ? CeaserEncrypt(state.input, state.k)
            : CeaserDecrypt(state.input, state.k),
      };
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cipher, k, input, generatedOutput, crypto } = state;
  return (
    <form>
      <div className="form-group">
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          value={crypto}
          onChange={(e) =>
            dispatch({ type: "cryptologyTypeChecked", payLoad: e.target.value })
          }
        >
          <option value="encryption">Encryption</option>
          <option value="decryption">Decryption</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1"></label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={(e) =>
            dispatch({ type: "cipherSelected", payLoad: e.target.value })
          }
        >
          <option value="ceaser">Ceaser</option>
          <option value="viginere">Viginere</option>
          <option value="auto key">Auto Key</option>
          <option value="rsa">RSA</option>
          <option value="hill">Hill Cipher</option>
          <option value="affine">Affine</option>
        </select>
      </div>
      <div className="text-container">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">{crypto}</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={input}
            onChange={(e) =>
              dispatch({ type: "ciphering", payLoad: e.target.value })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            {crypto === "encryption" ? "Decrypted Result" : "Encrypted Result"}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea2"
            rows="3"
            value={generatedOutput}
            readOnly
          ></textarea>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="key">Enter Key</label>
        <input
          type="text"
          className="form-control"
          value={k}
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
// function Hill() {
//   return (
//     <select
//       className="form-control"
//       id="exampleFormControlSelect1"
//       onClick={(e) =>
//         dispatch({ type: "cipherSelected", payLoad: e.target.value })
//       }
//     >
//       <option value="ceaser">Ceaser</option>
//       <option value="viginere">Viginere</option>
//       <option value="auto key">Auto Key</option>
//       <option value="rsa">RSA</option>
//       <option value="hill">Hill Cipher</option>
//       <option value="affine">Affine</option>
//     </select>
//   );
// }

export default App;
