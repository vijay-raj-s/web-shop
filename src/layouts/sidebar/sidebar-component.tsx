import React, { Component } from 'react';
import './sidebar.scss'; 
import { Link } from 'react-router-dom';
import search_icon from '../../assets/images/search.svg';
import order_history_icon from '../../assets/images/history.svg'; 
import search_icon_brown from '../../assets/images/search_brown.svg';
import history_icon_brown from '../../assets/images/history_brown.svg';


interface sidebarState{
  showBrownSearchIcon : boolean,
  showBrownHistoryIcon : boolean,
  selectedNav? : Array<boolean>
}

export default class SidebarComponent extends Component <{}, sidebarState>{

  constructor(props){
    super(props);

    this.state = {
      showBrownSearchIcon : true,
      showBrownHistoryIcon : true,
      selectedNav : [true, false, false]
    }
  }
 
  navSelect(){

  }

  render() {
    return (
      <div className="sidebar">
          <Link to='/order/search'>
          <div onMouseEnter={e => this.setState({...this.state, showBrownSearchIcon: false})} onMouseLeave={e => this.setState({...this.state, showBrownSearchIcon: true})}> 
            
            {
              this.state.showBrownSearchIcon ? <img src={search_icon_brown} alt='search' className='nav-icon' /> : <img src={search_icon} alt='search' className='nav-icon' /> 
            }
            
          </div>
          </Link>
          <Link to='/order/history'> 
          <div className={'' + (this.state.selectedNav ? (this.state.selectedNav[0] ? 'selected-nav' : null): null )} onMouseEnter={e => this.setState({...this.state, showBrownHistoryIcon: false})} onMouseLeave={e => this.setState({...this.state,showBrownHistoryIcon: true})}>  
            
            {
              this.state.showBrownHistoryIcon ? <img src={history_icon_brown} alt='Order history' className='nav-icon' />  : <img src={order_history_icon} alt='Order history' className='nav-icon' /> 
            }
          </div>
          </Link>
          <Link to='/order/checkout'>
          <div onMouseEnter={e => this.setState({...this.state, showBrownHistoryIcon: false})} onMouseLeave={e => this.setState({...this.state, showBrownHistoryIcon: true})}>
            {
              this.state.showBrownHistoryIcon ? <img src={history_icon_brown} alt='Order history' className='nav-icon' />  : <img src={order_history_icon} alt='Order history' className='nav-icon' /> 
            }
          </div> 
          </Link>
      </div>
    )
  }
}
