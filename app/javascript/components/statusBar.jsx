import React from 'react';
import Clock from 'react-live-clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faWifi, faSignal } from "@fortawesome/free-solid-svg-icons";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fab);

function StatusBar() {
  return (
    <div className="row">
      <div className="columns">
        <div className="column live-clock">
          <Clock />
        </div>
        <div className="column indicator has-text-right">
          <i><FontAwesomeIcon icon={faSignal} width="18" /></i>
          <i><FontAwesomeIcon icon={faWifi} width="18" /></i>
          <i><FontAwesomeIcon icon={faBatteryFull} width="18" /></i>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;