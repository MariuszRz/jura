import { ThemeProvider } from 'styled-components'
import Header from 'components/Header'
import Page from 'components/Page/Page';
import theme from 'styled/theme'
import GlobalStyle from 'styled/globalStyled';
import Navigation from 'components/Navigation/Navigation';
import { Container } from 'components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from 'app.css';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter >
        <Header />
        <Container>
          <Main >
            <Navigation />

            <Switch>
              <Route path="/" exact component={Page} />
              <Route path="/article/:id" exact component={Page} />
            </Switch>
          </Main>

        </Container>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
