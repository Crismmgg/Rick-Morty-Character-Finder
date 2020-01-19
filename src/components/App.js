import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FetchCharacter from '../services/FetchCharacter';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import Loader from './Loader';
import '../stylesheets/App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      inputValue: '',
      inputStatus: '',
      checked: '',
      inputSpecie: '',
      inputEarth: '',
      // inputGender: [],
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

  handleSpecie = (inputSpecie) => {
    this.setState(
      inputSpecie
    )
  }

  handleEarth = (inputEarth) => {
    this.setState(
      inputEarth
    )
  }
  handleReset = () => {
    this.setState({
      inputValue: '',
      inputStatus: '',
      inputSpecie: '',
    }
    )
  }
  // handleGender = (inputGender) => {
  //   this.setState(
  //     inputGender
  //   )
  // }


  //filter

  filteredCharacters() {
    const characters = [...this.state.characters]
    const status = this.state.inputStatus
    const search = this.state.inputValue
    const specie = this.state.inputSpecie
    const earth = this.state.inputEarth
    // const gender = this.state.inputGender
    return characters
      .filter(character => {
        return character.name.toLowerCase().includes(search.toLowerCase())
      })
      .filter(character => {
        return status === '' ? true : character.status === status
      })
      .filter(character => {
        return specie === '' ? true : character.species === specie
      })
      .filter(character => {
        if (character.origin.name.toLowerCase().includes(earth.toLowerCase())) {
          return character
        }
      })
    // .filter(character => {
    //   const result = character.findIndex(item => item === gender)
    //   if (result < 0) {
    //     gender.push(gender)
    //   } else {
    //     gender.splice(result, 1)
    //   }
    //   return {
    //     gender: result
    //   }
    // })

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
    console.log(this.state.inputEarth)
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
                  handleSpecie={this.handleSpecie}
                  handleEarth={this.handleEarth}
                  handleReset={this.handleReset}
                  // handleGender={this.handleGender}
                  state={this.state.inputValue}
                  checked={this.state.inputStatus}
                  specie={this.state.inputSpecie}
                  earth={this.state.inputEarth}
                // checkedGender={this.state.inputGender}
                />
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
