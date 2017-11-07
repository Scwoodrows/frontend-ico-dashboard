import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import s from './styles.css';

// import { namedRoutes } from '../../../routes';

import { fetchUser } from '../../../redux/modules/app/app';

import Sidebar from '../../../components/app/Sidebar';
import Topbar from '../../../components/app/Topbar';
// import Alert from '../../../components/app/Alert';
import MakeDepositPopup from '../MakeDepositPopup';

class AppWrapper extends Component {
  componentWillMount() {
    const { fetchUser } = this.props;

    fetchUser();
  }

  render() {
    const {
      children,
      // kycStatus,
      location: {
        pathname
      }
    } = this.props;

    // const kycToBool = () => {
    //   if (kycStatus === 'Not verified') {
    //     return false;
    //   }
    //
    //   return true;
    // };

    // {!kycToBool() &&
    // <Alert><Link to={namedRoutes.verification}>Verification alert</Link></Alert>}

    // !kycToBool() ? s.sidebarWithAlert : s.sidebar

    return (
      <div className={s.wrapper}>
        <div className={s.sidebar}>
          <Sidebar/>
        </div>
        <div className={s.main}>
          <Topbar pathname={pathname}/>
          <div className={s.children}>{children}</div>
        </div>

        <MakeDepositPopup/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    kycStatus: state.app.app.user.kycStatus
  }),
  {
    fetchUser
  }
)(AppWrapper);