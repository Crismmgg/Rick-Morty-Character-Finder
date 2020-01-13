import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import FetchCharacter from '../services/FetchCharacter';
import CharacterList from './CharacterList';

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

  render() {
    return (
      <div className="App">
        <Header
          handleSearch={this.handleSearch}
        />
        <CharacterList characters={this.state.characters} />

      </div>
    );
  }
}

export default App;
