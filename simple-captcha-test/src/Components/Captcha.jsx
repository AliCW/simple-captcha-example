import React, { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


export default function Captcha() {

  useEffect(() => {
    loadCaptchaEnginge(10, '#005812', '#103b19')
  }, []);

  const doSubmit = (event) => {
    event.preventDefault();
    let user_captcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(user_captcha) === true) {
        loadCaptchaEnginge(10); 
        document.getElementById('user_captcha_input').value = "";
    }
    else {
        alert('Captcha Failed To Match');
        document.getElementById('user_captcha_input').value = "";
        loadCaptchaEnginge(10);
        window.location.reload(false);
    }
    return;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    doSubmit();
}

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <LoadCanvasTemplate />
        </div>
        <div>
        <textarea
            id="contactPage"
            placeholder="Name / Title*"
            rows="1"
            className="user-text-area-title"
            name="from_name"
            onChange={(event) => event.target.value}
          ></textarea>
        </div>
        <div>
            <button className="submit-button">Send</button>
          </div>
      </form>
    </div>
  )

}