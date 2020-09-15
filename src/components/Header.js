import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subTitle && <h1>{props.subTitle}</h1>}
    </div>
);

Header.defaultProps = {
    title: 'Indecision App'
};

export default Header;