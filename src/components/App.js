import React from 'react';
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import FetchCharacter from '../services/FetchCharacter';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import Loader from './Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      inputValue: '',
      inputStatus: '',
      checked: '',
      loading: true
    }
  }

  componentDidMount() {
    FetchCharacter().then(charData => {
      if (charData === undefined) {
        this.setState({
          loading: true
        })
      } else {
        this.setState({
          characters: charData,
          loading: false
        })
      }
    }
    )
  }

  //handler

  handleSearch = (inputValue) => {
    this.setState(
      inputValue
    )
  }

  handleStatus = (inputStatus) => {
    this.setState(
      inputStatus,
    )
  }


  //filter

  filteredCharacters() {
    const characters = [...this.state.characters]
    const status = this.state.inputStatus
    const search = this.state.inputValue
    return characters
      .filter(character => {
        return character.name.toLowerCase().includes(search.toLowerCase())
      })
      .filter(character => {
        return status === '' ? true : character.status === status
      })

  }


  //render

  renderCharDetails = (props) => {
    const routeId = parseInt(props.match.params.id);
    const character = this.state.characters.find(item => {
      return item.id === routeId
    })
    if (character === undefined) {
      return <p>El personaje no existe</p>
    } else {
      return <CharacterDetails
        characters={character} />
    }
  }

  render() {
    return (
      <div className="app-container">
        {this.state.loading
          ? (<Loader />)
          : (<>
            <Header
              handleSearch={this.handleSearch}
            />
            <Switch>
              <Route exact path='/'>
                <Filters
                  handleSearch={this.handleSearch}
                  handleStatus={this.handleStatus}
                  state={this.state.inputValue}
                  checked={this.state.inputStatus} />
                <CharacterList
                  filteredCharacters={this.filteredCharacters()} />
              </Route>
              <Route path='/char/:id' render={this.renderCharDetails}>
              </Route>
            </Switch>
          </>)
        }
      </div>
    );
  }
}

export default App;
