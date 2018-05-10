import React, { Component } from 'react';
import './App.css';

import Logo from './images/coderbunker-logo.svg';

import User from './images/blue_singleUser.svg';
import Chart from './images/blue_chart.svg';
import Yuan from './images/blue_yen.svg';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo-line">
            <div style={{ marginLeft: '5%', color: '#EAF3FA', fontSize: '30px' }}>Coderbunker Shanghai</div>
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </header>
        <div className="container">
          <div className="first-block">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={User} alt="" style={{ height: '80px' }} />
                <div
                  style={{
                    fontSize: '52px',
                    fontWeight: '500',
                    color: '#003557',
                    display: 'flex',
                    alignItems: 'flex-end',
                    lineHeight: '36px',
                    paddingLeft: '5px',
                  }}
                >
                  14
                </div>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '500', color: '#003557', paddingTop: '20px' }}>
                Active freelancers
              </div>
            </div>
            <div style={{ height: '80%', width: '2px', backgroundColor: '#003557' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={Chart} alt="" style={{ height: '80px' }} />
                <div
                  style={{
                    fontSize: '52px',
                    fontWeight: '500',
                    color: '#003557',
                    display: 'flex',
                    alignItems: 'flex-end',
                    lineHeight: '36px',
                    paddingLeft: '15px',
                  }}
                >
                  8
                </div>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '500', color: '#003557', paddingTop: '20px' }}>
                Ongoing projects count with billable hours
              </div>
            </div>
            <div style={{ height: '80%', width: '2px', backgroundColor: '#003557' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={Yuan} alt="" style={{ height: '80px' }} />
                <div
                  style={{
                    fontSize: '52px',
                    fontWeight: '500',
                    color: '#003557',
                    display: 'flex',
                    alignItems: 'flex-end',
                    lineHeight: '36px',
                    paddingLeft: '15px',
                  }}
                >
                  315.042
                </div>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '500', color: '#003557', paddingTop: '20px' }}>
                Ongoing projects gross
              </div>
            </div>
          </div>
          <div className="second-block" />
          <div className="third-block" />
          <div className="last-block" />
        </div>
      </div>
    );
  }
}

export default App;
