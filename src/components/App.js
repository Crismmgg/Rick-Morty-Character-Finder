import React from 'react';
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import FetchCharacter from '../services/FetchCharacter';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      inputValue: ''
    }
  }


  componentDidMount() {
    FetchCharacter().then(charData => {
      this.setState({
        characters: charData,
      })
    }
    )
  }

  //handler

  handleSearch = (inputValue) => {
    this.setState({
      inputValue
    })
    console.log(inputValue)
  }

  //filter
  filteredCharacters() {
    const characters = [...this.state.characters]
    if (this.state.inputValue === '') {
      return characters
    } else {
      return characters.filter(character => {
        return character.name.toLowerCase().includes(this.state.inputValue.inputValue.toLowerCase())
      }
      )
    }
  }

  //render
  renderCharDetails = (props) => {
    const routeId = parseInt(props.match.params.id);
    console.log(routeId)
    const character = this.state.characters.find(item => {
      return item.id === routeId
    })
    console.log(routeId, this.state.characters, character)
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
        <Header
          handleSearch={this.handleSearch}
        />
        <Switch>
          <Route exact path='/'>
            <CharacterList
              filteredCharacters={this.filteredCharacters()} />
          </Route>
          <Route path='/char/:id' render={this.renderCharDetails}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
