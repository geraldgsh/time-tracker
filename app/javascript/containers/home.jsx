import React from 'react';
import StatusBar from '../components/statusBar'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="columns full-height">
          <div className="column">
            First column
          </div>
          <div className="column">
            <StatusBar />
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