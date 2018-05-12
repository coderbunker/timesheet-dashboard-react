import React, { Component } from 'react';
import './App.css';

import Logo from './images/coderbunker-logo.svg';

import User from './images/blue_singleUser.svg';
import Chart from './images/blue_chart.svg';
import Blue_Yuan from './images/blue_yen.svg';
import Gray_Yuan from './images/gray_yen.svg';
import Multi_User from './images/blue_multiUser.svg';
import Calendar_Clock from './images/blue_calendar:clock.svg';
import Gray_Calendar from './images/gray_calendar.svg';
import Gray_Clock from './images/gray_clock.svg';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo-line">
            <div className="org-name">Coderbunker Shanghai</div>
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </header>
        <div className="container">
          <div className="first-block">
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={User} alt=""/>
                <div className="first-numbers">14</div>
              </div>
              <div className="first-words-containers">
                Active freelancers
              </div>
            </div>
            <div className="divider"/>
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={Chart} alt=""/>
                <div className="first-numbers">22</div>
              </div>
              <div className="first-words-containers">
                Ongoing projects count with billable hours
              </div>
            </div>
            <div className="divider"/>
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={Blue_Yuan} alt="" />
                <div className="first-numbers">000,000</div>
              </div>
              <div className="first-words-containers">
                Ongoing projects gross
              </div>
            </div>
          </div>

          <div className="second-block">
            <div className="second-mini-container">
              <div className="second-icon-container">
                <img className="icon-gray-yuan" src={Gray_Yuan} alt=""/>
                <div className="second-number">000,000</div>
              </div>
              <div className="second-words-container">
                  Total Gross Billed(RMB)
              </div>
            </div>
          </div>

          <div className="third-block">
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={Multi_User} alt=""/>
                <div className="third-numbers">50</div>
              </div>
              <div className="third-words-containers">
                Freelancers with billable hours
              </div>
            </div>
            <div className="third-divider"/>
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={Chart} alt=""/>
                <div className="third-numbers">22</div>
              </div>
              <div className="third-words-containers">
                Total Projects with billable hours
              </div>
            </div>
            <div className="third-divider"/>
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={Calendar_Clock} alt=""/>
                <div className="third-numbers">88</div>
              </div>
              <div className="third-words-containers">
                Total engineering months
              </div>
            </div>
          </div>
          <div className="last-block">
            <div className="last-inner-container">
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <img className="icon" src={Gray_Calendar} alt=""/>
                  <div className="last-numbers">2018-04-11</div>
                </div>
                <div className="last-words-containers">
                      Data start date
                </div>
              </div>
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <img className="icon" src={Gray_Clock} alt=""/>
                  <div className="last-numbers">2018-04-11</div>
                </div>
                <div className="last-words-containers">
                      Elapsed since first billable hour
                </div>
              </div>
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <img className="icon" src={Gray_Calendar} alt=""/>
                  <div className="last-numbers">2018-04-11</div>
                </div>
                <div className="last-words-containers">
                      Data last updated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
