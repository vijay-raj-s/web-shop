import React from 'react';
import './App.scss';
import {  Route, Switch } from "react-router-dom";
import HomeComponent from './components/home/home-component';
import LoginComponent from './components/login/login-component';
import RegisterComponent from './components/register/register-component';
import OrderComponent from './components/order/order-component';
import SurveyComponent from './components/survey/survey-component.jsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#A76D60',
    },
    secondary: {
      main: '#00A676',
    }
  },
  typography: { 
    fontFamily: ['Josefin Sans'].join(',')
  }
});

const App: React.FC =  ()  => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
            <Route path="/" exact component={HomeComponent} /> 
            <Route path="/home" component={LoginComponent} />  
            <Route path="/register" exact component={RegisterComponent} />
            <Route path="/order" component={OrderComponent} />
            <Route path="/survey" exact component={SurveyComponent} />
            <Route path="/order" exact component={OrderComponent} />
            
        </Switch>  
      </ThemeProvider>   
    </div>
  );
}

export default App;
