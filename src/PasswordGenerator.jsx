
import { useState } from 'react';
import './PasswordGenerator.css';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
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

          <div className="bg-white d-flex flex-column justify-content-center align-items-center w-100 p-3 rounded-5">

            <div className='text-center text-success h2 mt-2'>Strong Password Generator</div>

            <div className='container m-2 p-2 border-2'>
              <label className='form-label h5' htmlFor="num">Password Length</label>
              <input className='form-control' type="number" name="num" id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
            </div>

            <div className="text-start mb-2">
              <div className='form-check'>
                <input className='form-check-input' type="checkbox" name="upper" id="upper" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
                <label className='form-check-label' htmlFor="upper">Inclue Uppercase</label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type="checkbox" name="lower" id="lower" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
                <label className='form-check-label' htmlFor="lower">Inclue Lowercase</label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type="checkbox" name="numbers" id="numbers" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
                <label className='form-check-label' htmlFor="numbers">Inclue Numbers</label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type="checkbox" name="symbols" id="symbols" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
                <label className='form-check-label' htmlFor="symbols">Inclue Symbols</label>
              </div>
            </div>

            <button className='btn btn-primary' onClick={generatePassword}>Generate Password</button>

            <div className="container d-flex m-2">
              <input className='form-control me-1' type="text" name="" id="" readOnly value={password} />
              <button className='btn btn-outline-success' onClick={copyToClipboard}>Copy</button>
            </div>
            <a href="https://www.linkedin.com/in/muthu-ammew" className="text-black text-decoration-none">Designed by <span className="text-success text-decoration-underline fw-bolder">Muthu</span></a>
          </div>
        </div>
      </div>
    </>
  )
}
