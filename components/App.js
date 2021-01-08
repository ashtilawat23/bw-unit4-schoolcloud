import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
      <div className='container'>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/resetpassword' component={ResetPassword} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default App;