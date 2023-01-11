import React from "react";
import ReactDom from "react-dom/client";
import logo from './img/toucan_logo.png';
import usericon from './img/usericon.png';

const reactRoot = ReactDom.createRoot(document.getElementById('root'));
{}
const H1Tag = function() {
    return (
        <h1 id="h1" key="h1" align="center">You Toucan Search</h1>
    );
};
const LogoTag = () => <img id="img1" src={logo} width="100" height="100"/> ;
const SearchBarTag = () => <input id="searchbar1" key="sb1" type="text" placeholder="Search..."/>;
const UserIconTag = () => <img id="img2" src={usericon} width="100" height="100"/>;

const HeaderTag = () => {
    return (
        <React.Fragment>
        <div id="div0" key="0">
            <H1Tag/>
        </div>
        <div id="div1" key="1" className="header">
            <LogoTag/>
            <SearchBarTag/>
            <UserIconTag/>
        </div>
        </React.Fragment>
    );
};

reactRoot.render(<HeaderTag/>);