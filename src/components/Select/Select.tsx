import React, { useState } from 'react'
import cn from 'classnames';
import './Select.scss'

export interface ISelectProps {
  cities: any,
  isPositionBottom: any
}

export const Select: React.FC<ISelectProps> = (props) => {
  const {children, cities, isPositionBottom} = props;
 

  const [visibleMenu, setVisibleMenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const toggleVisibleMenu = () => {
    setVisibleMenu(!visibleMenu)
  };

  const selectedItemMenu = (item: any) => {
    setActiveMenuItem(item);
  };

  const changeArrow = (visibleMenu: any) => {
    return visibleMenu ?  
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.00001 6.41436L2.70712 11.7073L1.29291 10.293L8.00001 3.58594L14.7071 10.293L13.2929 11.7073L8.00001 6.41436Z" fill="#8083A4"/>
      </svg>
      
    : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.2929 4.29297L14.7071 5.70718L8.00001 12.4143L1.29291 5.70718L2.70712 4.29297L8.00001 9.58586L13.2929 4.29297Z" fill="#8083A4"/>
      </svg>
  };

  const selectInputClass = cn({
    Select__current: true,
    Select__current_selected: activeMenuItem,
  });

  const selectClass = cn({
    'Select': true,
    'Select_position_bottom': isPositionBottom
  })
  return (
    <div className={selectClass} onClick={ toggleVisibleMenu }>
      <div className="Select__header">
        <div className={selectInputClass}><span>{activeMenuItem ? activeMenuItem : children}</span></div>
        <div className="Select__icon">
          {changeArrow(visibleMenu)}
        </div>
      </div>
        {visibleMenu &&
            <div className="Select__menu">
              {cities.map((city: any, i: any) => 
                <div key={`${city}${i}`} className="Select__item" onClick={() => selectedItemMenu(city)}><span>{city}</span></div>)
              }
            </div>
          }
    </div>
  )
}

