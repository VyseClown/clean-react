import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import React from 'react'

const Router: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router
