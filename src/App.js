import React, { Component } from 'react';
import moment from 'moment';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './App.css';
import Logo from './images/coderbunker-logo.svg';

import User from './images/blue_singleUser.svg';
import Chart from './images/blue_chart.svg';
import BlueYuan from './images/blue_yen.svg';
import GrayYuan from './images/gray_yen.svg';
import MultiUser from './images/blue_multiUser.svg';
import CalendarClock from './images/blue_calendar:clock.svg';
import GrayCalendar from './images/gray_calendar.svg';
import GrayClock from './images/gray_clock.svg';

const OrgQuery = gql`
query{
  allOrganizations {
    edges {
      node {
        orgname
        since
        activity
        peopleCount
        projectCount
        ongoingProjectCount
        totalHours
        totalGross
        totalInvestment
        activePeopleCount
        totalEngMonths
        lastRefresh
        lastUpdate
      }
    }
  }
  allMonthlyGrosses {
    edges {
      node {
        entryYear
        entryMonth
        label
        entryMonthName
        total
        currency
        vendorName
        lastRefresh
        lastUpdate
      }
    }
  }
}
`;

const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  dateDiff = date => {
    const b = moment(date);
    const a = moment();
    const intervals = ['years', 'months', 'weeks', 'days'];
    const out = [];

    for (let i = 0; i < intervals.length; i++) {
      const diff = a.diff(b, intervals[i]);
      b.add(diff, intervals[i]);
      out.push(`${diff} ${intervals[i]}`);
    }
    return out.join(' ');
  };

  render() {
    console.log(this.props);
    if (this.props.data && this.props.data.loading) {
      return <div style={{ fontSize: '50px' }}>Loading. Please Wait...</div>;
    }

    if (this.props.data && this.props.data.error) {
      return <div>There was an error</div>;
    }

    const monthlyData = this.props.data.allMonthlyGrosses.edges;
    console.log(monthlyData);

    const orgData = this.props.data.allOrganizations.edges[0].node;
    const {
      orgname,
      peopleCount,
      totalGross,
      projectCount,
      activePeopleCount,
      ongoingProjectCount,
      totalEngMonths,
    } = orgData;
    console.log(orgData);

    const lastUpdate = moment(orgData.lastUpdate).format('YYYY-MM-DD');
    const lastUpdateDay = moment(orgData.lastUpdate).format('DD');
    const sinceDate = moment(orgData.since).format('YYYY-MM-DD');
    const sinceDateDay = moment(orgData.since).format('DD');
    const since = this.dateDiff(orgData.since);

    const result = monthlyData.reduce ( (prev, next) => {
      if ( prev.highestTotal > parseFloat(next.node.total)) {
          return prev;
      }
      return { highestTotal: parseFloat(next.node.total)};
  },{ highestTotal: 0 });

    return (
      <div>
        {/* Begin Header */}
        <header>
          <div className="logo-line">
            <div className="org-name">{orgname}</div>
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </header>
        {/* End Header */}

        {/* Begin Content Container */}
        <div className="container">
          {/* Begin First Block */}
          <div className="first-block">
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={User} alt="" />
                <div className="first-numbers" style={{ paddingLeft: '5px' }}>
                  {activePeopleCount}
                </div>
              </div>
              <div className="first-words-containers">Active freelancers</div>
            </div>
            <div className="divider" />
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={Chart} alt="" />
                <div className="first-numbers">{ongoingProjectCount}</div>
              </div>
              <div className="first-words-containers">Ongoing projects count with billable hours</div>
            </div>
            <div className="divider" />
            <div className="first-mini-containers">
              <div className="first-icon-containers">
                <img className="icon" src={BlueYuan} alt="" />
                <div className="first-numbers" />
              </div>
              <div className="first-words-containers">Ongoing projects gross</div>
            </div>
          </div>
          {/* End First Block */}

          {/* Begin Second Block */}
          <div className="second-block">
            <div className="second-mini-container">
              <div className="second-icon-container">
                <img className="icon-gray-yuan" src={GrayYuan} alt="" />
              </div>
              <div className="second-words-container">
                <div className="second-number">{numberWithCommas(totalGross)}</div>
                <div>Total Gross Billed(RMB)</div>
              </div>
            </div>
            <div className="graph-container">
            {monthlyData.map((m) => {
              // console.log(m.node.total)
              // console.log(result.highestTotal)
              return(
                <div className="monthly-data-container" key={m.node.label}>
                  {/* <div className="special"> */}
                    <div className="month-total" style={{height:(parseFloat(m.node.total)/result.highestTotal)*100 + "%"}}></div>
                    <div className="month-name">{m.node.entryMonthName}</div>
                  {/* </div> */}
                </div>
              )
            })}
            </div>
          </div>
          {/* End Second Block */}

          {/* Begin Third Block */}
          <div className="third-block">
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={MultiUser} alt="" />
                <div className="third-numbers">{peopleCount}</div>
              </div>
              <div className="third-words-containers">Freelancers with billable hours</div>
            </div>
            <div className="third-divider" />
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={Chart} alt="" />
                <div className="third-numbers">{projectCount}</div>
              </div>
              <div className="third-words-containers">Total Projects with billable hours</div>
            </div>
            <div className="third-divider" />
            <div className="third-mini-containers">
              <div className="third-icon-containers">
                <img className="icon" src={CalendarClock} alt="" />
                <div className="third-numbers">{totalEngMonths}</div>
              </div>
              <div className="third-words-containers">Total engineering months</div>
            </div>
          </div>
          {/* End Third Block */}

          {/* Begin Fourth Block */}
          <div className="last-block">
            <div className="last-inner-container">
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <div className="last-icon-inner-container">
                    <img className="icon" src={GrayCalendar} alt="" />
                    <div className="calendar-date">{sinceDateDay}</div>
                  </div>
                  {/* use moment.js for formatting date */}
                  <div className="last-numbers">{sinceDate}</div>
                </div>
                <div className="last-words-containers">Data start date</div>
              </div>
              <div className="last-mini-containers" style={{ width: '35%', textAlign: 'center' }}>
                <div className="last-icon-containers">
                  <img className="icon" src={GrayClock} alt="" />
                  <div className="last-numbers">{since}</div>
                </div>
                <div className="last-words-containers">Elapsed since first billable hour</div>
              </div>
              <div className="last-mini-containers">
                <div className="last-icon-containers">
                  <div className="last-icon-inner-container">
                    <img className="icon" src={GrayCalendar} alt="" />
                    {/* dymamic number */}
                    <div className="calendar-date">{lastUpdateDay}</div>
                  </div>
                  {/* use moment.js for formatting date */}
                  <div className="last-numbers">{lastUpdate}</div>
                </div>
                <div className="last-words-containers">Data last updated</div>
              </div>
            </div>

            {/* Begin Footer */}
            <footer className="footer" />
            {/* End Footer */}
          </div>
          {/* End Fourth Block */}
        </div>
        {/* End Content Container */}
      </div>
    );
  }
}

const AppWithData = graphql(OrgQuery, {
  options: {
    variables: {
      resource: '',
    },
  },
})(App);

export default AppWithData;
