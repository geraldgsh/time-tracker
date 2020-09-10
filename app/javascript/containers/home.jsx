import React from 'react';
import StatusBar from '../components/statusBar'
import UserInfo from '../components/userInfo'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="columns full-height">
          <div className="column">
            First column
          </div>
          <div className="column">
            <div className="container app-content mt-6 pl-3 pr-3">
              <div className="rows">
                <StatusBar />
                <UserInfo />
              </div>
            </div>
          </div>
          <div className="column">
            Third column
          </div>
        </div>
      </>
    );
  }
}

export default Home;