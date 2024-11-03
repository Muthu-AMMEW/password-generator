import React from 'react';
import './PasswordGenerator.css';

export default function PasswordGenerator() {
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
      <div className="row min-vw-100 min-vh-100 justify-content-center align-items-center bg-info-subtle bg-image">
        <div className="col-11 col-sm-8 col-md-7 col-lg-6 col-xl-5">

          <div className="bg-white d-flex flex-column justify-content-center align-items-center w-100 rounded-5">

            <div className='text-center text-success h2 mt-2'>Strong Password Generator</div>

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
            <p>Designed by <a href="https://www.linkedin.com/in/muthu-ammew" className="text-success text-decoration-none fw-bolder">Muthu</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
