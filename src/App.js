import {Component} from "react";
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

//class App extends React.Component{
class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
            title: ''
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    //this need to be bound inside constructor
    // handleChange(e){
    //   this.setState({searchField:e.target.value})
    // }
//auto binding if arrow functions are used, lexical scope, bound where it''s defined
    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='Search Monsters'
                    //handleChange={e=>this.setState({searchField:e.target.value})}/>
                    handleChange={e => this.setState({searchField: e.target.value})}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
