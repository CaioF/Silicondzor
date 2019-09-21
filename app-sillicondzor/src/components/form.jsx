import React, { Component } from 'react';

export default class Form extends Component {

  handleClick(event) {
    setTimeout(function(){  window.location='http://10.55.130.239:3000/send' }, 700);
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
