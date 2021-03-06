import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter, browserHistory } from 'react-router-dom'

import {
  INDEX_PATH,
  LOGIN_PATH,
  CURRICULUM_PATH,
  SEARCH_PATH,
  SUPERVISOR_PATH
} from './constants/RouterConstants'

import CurriculumContainer from './containers/CurriculumContainer'
import HeaderWrapContainer from './containers/HeaderWrapContainer'
import HomeContainer from './containers/HomeContainer'
import LoginContainer from './containers/LoginContainer'
import NotFound from './components/NotFound'
import RouteWrapContainer from './containers/RouteWrapContainer'
import SupervisorContainer from './containers/SupervisorContainer'
import SearchContainer from './containers/SearchContainer'

import store from './store/configureStore'

import './styles/main.scss'

// antd fonts
import './fonts/iconfont.eot'
import './fonts/iconfont.svg'
import './fonts/iconfont.ttf'
import './fonts/iconfont.woff'

import { Layout, LocaleProvider } from 'antd'
import etEE from 'antd/lib/locale-provider/et_EE'

const { Content, Footer } = Layout

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <LocaleProvider locale={etEE}>
        <Layout className='layout'>
          <Route component={HeaderWrapContainer} />
          <Content>
            <div className='layout__content'>
              <Switch>
                <Route exact path={INDEX_PATH}
                  component={RouteWrapContainer(HomeContainer)} />
                <Route exact path={LOGIN_PATH}
                  component={RouteWrapContainer(LoginContainer)} />
                <Route path={SEARCH_PATH}
                  component={RouteWrapContainer(SearchContainer)} />
                <Route path={CURRICULUM_PATH}
                  component={RouteWrapContainer(CurriculumContainer)} />
                <Route path={SUPERVISOR_PATH}
                  component={RouteWrapContainer(SupervisorContainer)} />
                <Route
                  component={RouteWrapContainer(NotFound)} />
              </Switch>
            </div>
          </Content>
          <Footer className='layout__footer'>
            TLU ©{new Date().getFullYear()} | Made by Romil Rõbtšenkov
          </Footer>
        </Layout>
      </LocaleProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
)
