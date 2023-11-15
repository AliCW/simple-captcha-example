import React, { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


export default function Captcha() {

  useEffect(() => {
    loadCaptchaEnginge(10, '#005812', '#103b19')
  }, []);

  const doSubmit = () => {

    let user_captcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(user_captcha) === true) {
        alert('Captcha Correct');
        loadCaptchaEnginge(10, '#005812', '#103b19'); 
        document.getElementById('user_captcha_input').value = "";
    }
    else {
        alert('Captcha Failed To Match');
        document.getElementById('user_captcha_input').value = "";
        loadCaptchaEnginge(10, '#005812', '#103b19');
        window.location.reload(false);
    };
    return;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    doSubmit();
};

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{
          margin: "20px",
          padding: "20px",
        }}>
          <LoadCanvasTemplate />
        </div>
        <div>
          <textarea
            id="user_captcha_input"
            placeholder="Enter CAPTCHA*"
            rows="1"
            className="user-text-area-title"
            name="from_name"
            onChange={(event) => event.target.value}
          ></textarea>
        </div>
        <div style={{
          margin: "20px",
        }}>
          <button className="submit-button">Send</button>
        </div>
      </form>
    </div>
  );
};