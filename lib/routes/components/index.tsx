import React from 'react';
import Back from './back';
import TabHead from './head';
const Nav = () => {};
Nav.Back = Back;
Nav.TabHead = TabHead;
Nav.Layout = function (props) {
  return <Nav.TabHead children={props.children} showBack={true} />;
};

export default Nav;
