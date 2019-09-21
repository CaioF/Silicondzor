import React, { Component } from 'react';

export default class Form extends Component {

  handleClick(event) {
    fetch('http://172.17.0.1:3000/send', {
      body: 'send',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setTimeout(function(){  window.location='http://172.17.0.1:3000/send' }, 700);
        } else {
          alert('Ошибка сервера!');
        }
        // you cannot parse your "success" response, since that is not a valid JSON
        // consider using valid JSON req/resp pairs.
        // return response.json();
      });

  }

  render() {
      return (
      <div className="container-sillicon">
        <div className="wrap-sillicon">
          <form name ="myForm" className="sillicon-form">
            <div className="container-sillicon-form-btn">
              <button type="button" className="sillicon-form-btn" onClick={(event)=>this.handleClick(event)}>
                <span>
                  Глубокий Анализ
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
