import './App.css';
import { useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()-_=+";
    let generatePassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatePassword += charset[randomIndex];
    }
    setPassword(generatePassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied");
  }
  return (
    <>
      <div>
        <h2>Strong Password Generator</h2>
        <div>
          <label htmlFor="num">Password Length:</label>
          <input type="number" name="num" id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
        </div>

        <div>
          <input type="checkbox" name="upper" id="upper" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
          <label htmlFor="upper">Inclue Uppercase</label>
        </div>
        <div>
          <input type="checkbox" name="lower" id="lower" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
          <label htmlFor="lower">Inclue Lowercase</label>
        </div>
        <div>
          <input type="checkbox" name="numbers" id="numbers" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
          <label htmlFor="numbers">Inclue Numbers</label>
        </div>
        <div>
          <input type="checkbox" name="symbols" id="symbols" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
          <label htmlFor="symbols">Inclue Symbols</label>
        </div>
        <button onClick={generatePassword}>Generate Password</button>
        <div>
          <input type="text" name="" id="" readOnly value={password} />
          <button onClick={copyToClipboard}>Copy</button>
        </div>

      </div>
    </>
  );
}

export default App;
