import React, { Component } from 'react';
import './App.css';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Logo from './images/coderbunker-logo.svg';

import User from './images/blue_singleUser.svg';
import Chart from './images/blue_chart.svg';
import BlueYuan from './images/blue_yen.svg';
import GrayYuan from './images/gray_yen.svg';
import MultiUser from './images/blue_multiUser.svg';
import CalendarClock from './images/blue_calendar:clock.svg';
import GrayCalendar from './images/gray_calendar.svg';
import GrayClock from './images/gray_clock.svg';

const OrgQuery = gql  `
{
    allOrganizations {
    edges {
      node {
        orgname
        since
        activity
        activePeopleCount
        peopleCount
        projectCount
        totalGross
        lastRefresh
        lastUpdate
        totalEngMonths
        ongoingProjectCount
      }
    }
  }
}
` 

    

class App extends Component {
  render() {
    console.log(this.props.data.allOrganizations);
    return (
      <div>
        <header>
          <div className="logo-line">
            <div className="org-name"></div>
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </header>
        <div className="container">
          <div className="first-block">
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={User} alt="" />
                <div className="first-numbers" style={{ paddingLeft: '5px' }}>
                  14
                </div>
              </div>
              <div className="first-words-containers">Active freelancers</div>
            </div>
            <div className="divider" />
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={Chart} alt="" />
                <div className="first-numbers">22</div>
              </div>
              <div className="first-words-containers">Ongoing projects count with billable hours</div>
            </div>
            <div className="divider" />
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={BlueYuan} alt="" />
                <div className="first-numbers">000,000</div>
              </div>
              <div className="first-words-containers">Ongoing projects gross</div>
            </div>
          </div>

          <div className="second-block">
            <div className="second-mini-container">
              <div className="second-icon-container">
                <img className="icon-gray-yuan" src={GrayYuan} alt="" />
              </div>
              <div className="second-words-container">
                <div className="second-number">2,134,243</div>
                <div>Total Gross Billed(RMB)</div>
              </div>
            </div>
          </div>

          <div className="third-block">
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={MultiUser} alt="" />
                <div className="third-numbers">50</div>
              </div>
              <div className="third-words-containers">Freelancers with billable hours</div>
            </div>
            <div className="third-divider" />
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={Chart} alt="" />
                <div className="third-numbers">22</div>
              </div>
              <div className="third-words-containers">Total Projects with billable hours</div>
            </div>
            <div className="third-divider" />
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={CalendarClock} alt="" />
                <div className="third-numbers">88</div>
              </div>
              <div className="third-words-containers">Total engineering months</div>
            </div>
          </div>
          <div className="last-block">
            <div className="last-inner-container">
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <div className="last-icon-inner-container">
                    <img className="icon" src={GrayCalendar} alt="" />
                    {/* dymamic number */}
                    <div className="calendar-date">5</div>
                  </div>
                  {/* use moment.js for formatting date */}
                  <div className="last-numbers">2018-04-05</div>
                </div>
                <div className="last-words-containers">Data start date</div>
              </div>
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <img className="icon" src={GrayClock} alt="" />
                  <div className="last-numbers">1 year 6 months 10 days</div>
                </div>
                <div className="last-words-containers">Elapsed since first billable hour</div>
              </div>
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <div className="last-icon-inner-container">
                    <img className="icon" src={GrayCalendar} alt="" />
                    {/* dymamic number */}
                    <div className="calendar-date">11</div>
                  </div>
                  {/* use moment.js for formatting date */}
                  <div className="last-numbers">2018-04-11</div>
                </div>
                <div className="last-words-containers">Data last updated</div>
              </div>
            </div>
            <footer className="footer" />
          </div>
        </div>
      </div>
    );
  }
}


var AppWithData = graphql(OrgQuery, {
  options: {
    variables: {
      resource: "your mom"
    }
  }
})(App);

export default AppWithData;
