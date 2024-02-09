// import Icon from "./Icon";

const Header = ({ header, onRefresh }) => {

const handleClick = (evt) => {
	evt.preventDefault();
	onRefresh(evt);
}

	return (
		<header className="header-wrapper">
			<h2 className="header">{header}</h2>
			<button className="refresh-button" onClick={handleClick}>
				Refresh
				{/* <Icon name=refresh width="50" height="50" /> */}
			</button>
		</header>
	)
}

export default Header;