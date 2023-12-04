import React from 'react';
import { Link } from 'react-router-dom';

const Searchwrapper = () => {
  return (
    React.createElement('div', {'className':'search-wrapper'},
      React.createElement('input', {'className':'search-input','type':'text','placeholder':'Search'}),
      React.createElement('svg', {'className':'feather feather-search','xmlns':"http://www.w3.org/2000/svg",'fill':'none', 'stroke':"currentColor", 'strokeLinecap':"round", 'strokeLinejoin':"round", 'strokeWidth':"2", 'width':"20", 'height':"20", 'viewBox':"0 0 24 24"}, 
        React.createElement('circle', {'cx':'11','cy':'11','r':'8'}),
        React.createElement('path', {'d':'M21 21l-4.35-4.35'})
      )
    )
  );
};
const HeaderLeft = ({ title }) => {
  return (
    React.createElement('div', {'className':"app-header-right"}, 
      React.createElement('span', {'className':"app-icon"}), 
      React.createElement('p', {'className':"app-name"}, title),
      <Searchwrapper />
    )
  );
};

const HeaderRight = ({User}) => {
  return (
    React.createElement('div', {'className':"app-header-right"}, 
      //mode switcher
      React.createElement('button', {'className':"mode-switch", 'title':'Switch Theme'},
        React.createElement('svg', {'className':"moon", 'fill':"none", 'stroke':"currentColor", 'strokeLinecap':"round", 'strokeLinejoin':"round", 'strokeWidth':"2", 'width':"24", 'height':"24", 'viewBox':"0 0 24 24"}, 
          React.createElement('path', {'d':'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'})
        )
      ),

      //add new project
      React.createElement('button', {'className':"add-btn", 'title':'Add New Project'},
        React.createElement('svg', {'className':"btn-icon feather feather-plus", 'xmlns':'http://www.w3.org/2000/svg','fill':"none", 'stroke':"currentColor", 'strokeLinecap':"round", 'strokeLinejoin':"round", 'strokeWidth':"3", 'width':"16", 'height':"16", 'viewBox':"0 0 24 24"}, 
          React.createElement('line', {'x1':"12", 'y1':"5", 'x2':"12", 'y2':"19"}),
          React.createElement('line', {'x1':"5", 'y1':"12", 'x2':"19", 'y2':"12"}),
        )
      ),

      //add notification
      React.createElement('button', {'className':"notification-btn", 'title':'Notifications'},
        React.createElement('svg', {'className':"btn-icon feather feather-bell", 'xmlns':'http://www.w3.org/2000/svg','fill':"none", 'stroke':"currentColor", 'strokeLinecap':"round", 'strokeLinejoin':"round", 'strokeWidth':"2", 'width':"24", 'height':"24", 'viewBox':"0 0 24 24"}, 
          React.createElement('path', {'d':'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'}),
          React.createElement('line', {'d':'M13.73 21a2 2 0 0 1-3.46 0'}),
        )
      ),

      //user
      React.createElement('button', {'className':"profile-btn", 'title':User },
        React.createElement('img', {'src':'https://assets.codepen.io/3306515/IMG_2025.jpg'}),
        React.createElement('span', {}, User)
      )


    )
  );
};
const Header = ({title}) => {
  const user = 'Dominic N'
  return (
    React.createElement('div', {'className':"app-header"}, 
      <HeaderLeft title={title} />,
      <HeaderRight User={user}/>
    )
  );
};

export default Header;