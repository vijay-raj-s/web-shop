import React, { Component } from 'react';
import './sidebar.scss'; 
import { Link } from 'react-router-dom';
import search_icon from '../../assets/images/search.svg';
import checkout_icon from '../../assets/images/shopping-cart-white.svg'; 
import search_icon_brown from '../../assets/images/search_brown.svg';
import checkout_icon_brown from '../../assets/images/shopping-cart.svg';
import survey from '../../assets/images/survey.svg';

interface sidebarState{
  showBrownSearchIcon : boolean,
  showBrownCheckoutIcon : boolean,
  selectedNav? : Array<boolean>
}

export default class SidebarComponent extends Component <{}, sidebarState>{

  constructor(props){
    super(props);

    this.state = {
      showBrownSearchIcon : true,
      showBrownCheckoutIcon : true,
      selectedNav : [true, false, false]
    }
  }
 
  navSelect(){

  }

  render() {
    return (
      <div className="sidebar">
          <Link to='/order/search' role='navigation' aria-label='Go to Search page'>
          <div onMouseEnter={e => this.setState({...this.state, showBrownSearchIcon: false})} onMouseLeave={e => this.setState({...this.state, showBrownSearchIcon: true})}> 
            
            {
              this.state.showBrownSearchIcon ? <img src={search_icon_brown} alt='search' className='nav-icon' /> : <img src={search_icon} alt='search' className='nav-icon' /> 
            }
            
          </div>
          </Link>
          <Link to='/order/checkout' role='navigation' aria-label='Go to Checkout page'> 
          <div className={'' + (this.state.selectedNav ? (this.state.selectedNav[0] ? 'selected-nav' : null): null )} onMouseEnter={e => this.setState({...this.state, showBrownCheckoutIcon: false})} onMouseLeave={e => this.setState({...this.state,showBrownCheckoutIcon: true})}>  
            
            {
              this.state.showBrownCheckoutIcon ? <img src={checkout_icon_brown} alt='Checkout' className='nav-icon' />  : <img src={checkout_icon} alt='Checkout' className='nav-icon' /> 
            }
          </div>
          </Link>
          <Link to='/survey' role='navigation' aria-label='Go to Survey page'> 
          <div>
            {
              this.state.showBrownCheckoutIcon ? <img src={survey} alt='Survey' className='nav-icon' />  : <img src={survey} alt='Order history' className='nav-icon' /> 
            }
          </div> 
          </Link>
      </div>
    )
  }
}
