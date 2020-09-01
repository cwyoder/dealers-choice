import React from "react"
import axios from "axios"

const Header = (props) => {
	return(
		<header>
			<h1>My board games</h1>
		</header>
	)
}

const AllGames = ({ games }) => {
	return (
		<div id='allGames'>
			{ games.map(game => {
				return (
					<div className='game' key={game.id}>
						<a href={`#${game.id}`}>
							<p>{game.name}</p>
							<img src={game.artwork} />
						</a>
					</div>
				)
			})}
		</div>
	)
}

const SingleGame = ({ game }) => {
	return (
		<div id='singleGame'>
			<div class='game-info'>
				<div className='backbutton'><a href='#'>{`<< Back to all games`}</a></div>
				<h2>{game.name}</h2>
				<small>{game.minplayers} to {game.maxplayers} players</small>
				<p>{game.description}</p>
			</div>
			<div class='game-img'>
				<img src={game.artwork} />
			</div>
			<p></p>
		</div>
	)
}

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			games: [],
			selectedGame: {},
			error: {}
		}
		this.loadSingleGame = this.loadSingleGame.bind(this);
	}
	async componentDidMount() {
		window.addEventListener('hashchange', async ()=> {
			const id = window.location.hash.slice(1);
			if (id) {
				this.loadSingleGame(id);
			} else {
				this.setState({
					selectedGame: {}
				})
			}
		});
		const id = window.location.hash.slice(1);
		if (id){
			this.loadSingleGame(id);
		}
		try {
			const response = await axios.get('/api/games');
			const games = response.data;
			this.setState({games: games});
		} catch (error) {
			console.log(error);
			this.setState({error: error});
		}
	}
	async loadSingleGame(id) {
		try {
			const response = await axios.get(`/api/games/${id}`);
			const game = response.data;
			this.setState({selectedGame: game});
		} catch (error) {
			console.log(error);
			this.setState({error: error});
		}
	}
	render() {
		return (
			<div id='app'>
				<Header/>
				<section id='mainContent'>
					{
						this.state.selectedGame.id ? <SingleGame game={this.state.selectedGame} /> : <AllGames games={this.state.games} />
					}
				</section>
			</div>
		)
	}
}
