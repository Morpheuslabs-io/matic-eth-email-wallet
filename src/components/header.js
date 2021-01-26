import React from 'react'
import { MAGIC_NETWORK } from '../config'

class Header extends React.Component {
  render() {
    const { address, network, disconnect, email } = this.props
    return (
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav justify-content-start">
              <li className="nav-item">
                {address ? (
                  <div className="medium">
                    <div className="text-muted medium">
                      Connected &nbsp;
                      {email ? 'With Email' : 'With Metamask'}
                    </div>
                    <div>
                      {network} &nbsp; {email && MAGIC_NETWORK}
                    </div>
                  </div>
                ) : null}
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end ml-auto">
              <li className="nav-item">
                {address ? (
                  <div className="medium">
                    <div className="text-muted medium">{address}</div>
                    <div
                      className="cursor-pointer text-right"
                      onClick={disconnect}
                    >
                      {address ? 'Disconnect' : null}
                    </div>
                  </div>
                ) : (
                  <div className="nav-link text-muted medium">
                    No wallet connected
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
