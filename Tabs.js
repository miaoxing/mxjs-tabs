import {Tabs as RbTabs} from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({className, ...props}) => {
  return <RbTabs className={classNames(className, 'nav-underline header-nav')} {...props}/>;
};

Tabs.propTypes = {
  className: PropTypes.string,
};

export default Tabs;
