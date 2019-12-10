import React, { Component } from 'react';
import './search.scss'; 
import Grid from '@material-ui/core/Grid';

export default class SearchComponent extends Component {
  render() {
    return (
      <div className="search-container">
        <Grid container>
          <Grid item md={10}> 
              <div className='search-listing'>
                search
              </div>
          </Grid>
          <Grid item md={2}> 
              Item description
          </Grid>
        </Grid>
      </div>
    )
  }
}
