import Likes from "./components/Likes/Likes";
import Cards from "./components/Cards/Cards";
import Social from "./components/Social/Social";
import { GlobalStyles } from "./styles/globalStyles";
import { useState } from "react";
import { CARDS } from "./constants/cards";
import { LIKES } from "./constants/likes";

const App = () => {

	const [active, setActive] = useState(true);

	return (
		<>
		<GlobalStyles active={active}/>
			<div className="container">
				<Social 
				active={active}
				setActive={setActive}
				/>
			</div>
			<div className="container2">
				{
					CARDS.map(card=>(
						<Cards
						key={card.id}
						color={card.color}
						src={card.src}
						alt={card.alt}
						text1={card.text1}
						text2={card.text2}
						text3={card.text3}
						text4={card.text4}
						arrow={card.arrow}
						colorLetra={card.colorLetra}
						active={active}
						setActive={setActive}
						/>
					))
				}
			</div>
			<div className="container3">
				<h1 className="over">Overview - Today</h1>
			</div>
			<div className="container4">
				{
				LIKES.map(likes=>(
					<Likes
						key={likes.id}
						src={likes.src}
						src2={likes.src2}
						alt={likes.alt}
						t1={likes.t1}
						t2={likes.t2}
						t3={likes.t3}
						color={likes.color}
						active={active}
						setActive={setActive}
					/>
				))
				}
				
			</div>
		</>
	)
};

export default App;
