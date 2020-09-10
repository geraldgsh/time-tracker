import React from 'react';
import Clock from 'react-live-clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fab);

function StatusBar() {
  return (
    <div className="container app-content mt-6 pl-3 pr-3">
      <div className="rows">
        <div className="row">
          <div className="columns">
            <div className="column live-clock">
              <Clock />
            </div>
            <div className="column has-text-right">
              <FontAwesomeIcon icon={['fab', 'battery']} width="18" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;