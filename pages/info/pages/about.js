import { prefix } from '../../../utils/prefix.js';
import { getInfo } from '../../../public/data'

import styled from 'styled-components'

import { useEgg, Egg } from '../../../UIcomponents/egg'


const Title = styled.h3`
	font-size: 20px;
	font-weight: 700;
`
const Subtitle = styled.h4`
	font-style:  italic;
	font-weight: bold;
	font-size: 1em;
	color: #0000BB;
`
const GridInfo = styled.div`
	display: grid;
	grid-template-columns: 
	repeat(auto-fit, minmax(min(100%, 300px), 1fr));
	margin: 0px 0px 40px 0px;

	p {
		font-size: 1em;
		text-align: justify;
	}

`
const GridImg = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 150px), 1fr));
	grid-gap: 20px;
	align-items: center;
	margin-left: 20px;
	margin-bottom: 50px;
`
const Img = styled.img`
	transition: .3s ease;
	:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`
const Parrafo = styled.div`
	margin:5px;
	@media screen and (max-width: 800px) {
		font-size: 14px;
	}
`
const Logo=styled.div`
	text-align: center;
`
const Logo2=styled.img`
	width:200px;
	@media screen and (max-width: 450px) {
		width:150px;
	}
`
const About = () => {
	const data = getInfo()
	const {infoA, infoB} = data
	const [isOpen, openEgg, closeEgg] = useEgg(false)


	return (
		<div>
			<Title>_Acerca de Quanticon Valley</Title>
			<GridInfo>
				<Parrafo>
					<p>{data.qv[0]}</p>
					<p>{data.qv[1]}</p>
				</Parrafo>
				<Logo><Logo2 src={`${prefix}/imgs/info/QV.png`} alt="QV"/></Logo>
			</GridInfo>
			<Subtitle>Organiza</Subtitle>
			<GridImg>
				{infoA.map((i) => 
				<img key={i} src={`${prefix}/imgs/info/${i}.png`} alt="Organizador"/>)}
			</GridImg>
			<Subtitle>Apoya</Subtitle>
			<GridImg>
				{infoB.map((i) => 
				<img key={i} src={`${prefix}/imgs/info/${i}.png`} alt="Apoyador"/>)}
				<Img 
					onClick={openEgg} 
					width="150px" 
					src={`${prefix}/imgs/egg.png`}
				/>
			</GridImg>
			<Egg 
				isOpen={isOpen}
				closeE={closeEgg}
			/>
		</div>
	)
}

export default About
