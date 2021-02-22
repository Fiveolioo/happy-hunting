import react from 'react'


class App extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <div className='App'>
            <Switch>
              <Route exact path='/' render={props => <Home{...props}/>} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
