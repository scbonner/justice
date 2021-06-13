// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import { useTransition, animated } from 'react-spring';
// import './footer.css'



// const Transitions = styled.div`
// 	width: 200px;
// 	height: 200px;
// 	position: absolute;
// 	top: 100px;
// 	left: 100px;
// 	background: green;
// 	zIndex: 2;
// }
// `;
// const Animate = () => {
// 	const [blocks, setBlocks] = useState([]);

// 	useEffect(() => {
// 		let visible = false;
// 		const interval = setInterval(() => {
// 			visible = !visible;
// 			const id = Math.random().toString();
// 			setBlocks(visible ? [{ id }] : []);
// 		}, 3000);

// 		return () => clearInterval(interval);
// 	}, [setBlocks]);

// 	const transitions = useTransition(blocks, b => b.id, {
// 		from: { opacity: 0 },
// 		enter: { opacity: 1 },
// 		leave: { opacity: 0 },
// 	});

// 	return transitions.map(({ key, props }) => (
// 		<animated.div key={key} style={{ ...props }}>
// 			<div
// 				style={{
// 					width: '200px',
// 					height: '200px',
// 					position: 'absolute',
// 					top: '100px',
// 					left: '100px',
// 					background: 'green',
// 					zIndex: 2,
// 				}}
// 			/>
// 		</animated.div>
// 	));
// };

// export default Animate