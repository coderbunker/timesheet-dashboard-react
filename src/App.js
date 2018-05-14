import React, { Component } from 'react';
import './App.css';

import { graphql } from 'react-apollo';
// import { Query } from 'react-apollo';
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

import moment from 'moment';

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
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
    

class App extends Component {
  
  render() {
    console.log(this.props)
    if(this.props.data && this.props.data.loading) {
      return<div style={{fontSize: "50px"}}>Loading.  Please Wait...</div>
    }

    if(this.props.data && this.props.data.error) {
      return<div>There was an error</div>
    }

    const orgData = this.props.data.allOrganizations.edges[0].node;
    console.log(orgData);
    console.log(orgData.activity.substring(0, 21));
    console.log(orgData.activity.substring(21, 33));
    console.log(orgData.lastUpdate.substring(0, 10));
    console.log(orgData.lastUpdate.substring(8, 10));
    console.log(orgData.since.substring(0, 10));
    console.log(orgData.since.substring(8, 10));
    return (
      <div>
        {/*Begin Header*/}
        <header>
          <div className="logo-line">
            <div className="org-name">{orgData.orgname}</div>
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </header>
        {/*End Header*/}

        {/*Begin Content Container*/}
        <div className="container">

        {/*Begin First Block*/}
          <div className="first-block">
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={User} alt="" />
                <div className="first-numbers" style={{ paddingLeft: '5px' }}>
                  {orgData.activePeopleCount}
                </div>
              </div>
              <div className="first-words-containers">Active freelancers</div>
            </div>
            <div className="divider" />
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={Chart} alt="" />
                <div className="first-numbers">
                  {orgData.ongoingProjectCount}
                </div>
              </div>
              <div className="first-words-containers">Ongoing projects count with billable hours</div>
            </div>
            <div className="divider" />
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={BlueYuan} alt="" />
                <div className="first-numbers"></div>
              </div>
              <div className="first-words-containers">Ongoing projects gross</div>
            </div>
          </div>
          {/*End First Block*/}
          
          {/*Begin Second Block*/}
          <div className="second-block">
            <div className="second-mini-container">
              <div className="second-icon-container">
                <img className="icon-gray-yuan" src={GrayYuan} alt="" />
              </div>
              <div className="second-words-container">
                <div className="second-number">
                  {numberWithCommas(orgData.totalGross)}
                </div>
                <div>Total Gross Billed(RMB)</div>
              </div>
            </div>
          </div>
          {/*End Second Block*/}

          {/*Begin Third Block*/}
          <div className="third-block">
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={MultiUser} alt="" />
                <div className="third-numbers">
                  {orgData.peopleCount}
                </div>
              </div>
              <div className="third-words-containers">Freelancers with billable hours</div>
            </div>
            <div className="third-divider" />
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={Chart} alt="" />
                <div className="third-numbers">
                  {orgData.projectCount}
                </div>
              </div>
              <div className="third-words-containers">Total Projects with billable hours</div>
            </div>
            <div className="third-divider" />
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={CalendarClock} alt="" />
                <div className="third-numbers">
                  {orgData.totalEngMonths}
                </div>
              </div>
              <div className="third-words-containers">Total engineering months</div>
            </div>
          </div>
          {/*End Third Block*/}

          {/*Begin Fourth Block*/}
          <div className="last-block">
            <div className="last-inner-container">
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <div className="last-icon-inner-container">
                    <img className="icon" src={GrayCalendar} alt="" />
                    <div className="calendar-date"></div>
                  </div>
                  {/* use moment.js for formatting date */}
                  <div className="last-numbers">{orgData.since}</div>
                </div>
                <div className="last-words-containers">Data start date</div>
              </div>
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <img className="icon" src={GrayClock} alt="" />
                  <div className="last-numbers">
                    {orgData.activity.substring(0, 21)}
                  </div>
                </div>
                <div className="last-words-containers">Elapsed since first billable hour</div>
              </div>
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <div className="last-icon-inner-container">
                    <img className="icon" src={GrayCalendar} alt="" />
                    {/* dymamic number */}
                    <div className="calendar-date"></div>
                  </div>
                  {/* use moment.js for formatting date */}
                  <div className="last-numbers">
                    {orgData.lastUpdate}
                  </div>
                </div>
                <div className="last-words-containers">Data last updated</div>
              </div>
            </div>

            {/*Begin Footer*/}
            <footer className="footer" />
            {/*End Footer*/}
          </div>
          {/*End Fourth Block*/}
        </div>
        {/*End Content Container*/}
      </div>
    );
  }
}


var AppWithData = graphql(OrgQuery, {
  options: {
    variables: {
      resource: ""
    }
  }
})(App);

export default AppWithData;
