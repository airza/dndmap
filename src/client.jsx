import React from 'react';
import ReactDOM from 'react-dom';
import 'app.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
	Accordion,
		AccordionItem,
		AccordionItemTitle,
		AccordionItemBody,
} from 'react-accessible-accordion';
class Glossary extends React.Component {
	render(){
		return <Accordion>
			<input type="text" value={this.state.value} onChange={this.change.bind(this)} / >
			{this.state.data.map(el=>
					<AccordionItem key={el.title} expanded={this.state.data.length===1}>
					<AccordionItemTitle>
					<h3>{el.title}</h3>
					</AccordionItemTitle>
					<AccordionItemBody>
					{el.body}
					</AccordionItemBody>
					</AccordionItem>
					)
			}
			<div>{this.state.tags.map(e=>
				<div className="tag" onClick={this.change.bind(this,{target:{value:e}})}>{e}</div>
				)}</div>
		</Accordion>

	}
	change(e){
		let value = e.target.value;
		let newData = this.state.allData.filter(el=>
				el.tags.concat(el.body).concat(el.title).join("|").toLowerCase().indexOf(value.toLowerCase())>=0
				);
		this.setState({value:value,data:newData});
	}
	constructor(props){
		super(props)
			let tags = unique(Array.prototype.concat.apply([],datas.map(e=>e.tags))).sort()
			this.state={allData:datas,data:datas,value:'',tags:tags}

	}
}
let datas=[
{'title': 'Terra Brightfist',
	'body': "Muradin's High Priestess in Dur Modan and Council member.  You spoke with her about the Day of Reckoning, and also told her that you had captured Andraste.  She seemed keenly intersted in obtaining Andraste.",
	'tags': ['dwarf','council']
},
{'title': "Dur Modan",
	'body': "An ancient dwarven city (where the players currently are.)  The city is lead by a 5 person Council, and has some of the oldest historcal records the party knows of.  Several thousand years ago, the leaders of Dur Modan refused to participate in the pogroms against fey mandated by the capital city (see: Dur Aud), sparking the Feywar. In the current day, the endless conflicts between Dwarf and Drow have been a severe drain on the kingdom's resources, but a recent treaty between it and the Draseros supplying arms and aid seem poised to change its fate.",
	'tags': ['dwarf','location']
},
{'title':"Feywar",
'body':'A dwarven civil war which took place several thousand years ago.  Dur Modan and its allies prayed rebelled against the King and Crown at Dur Aud.  After a losing campaign of several years, Modanin\'s prayers were answered;  legend says that the beseiging armies were utterly destroyed by Muradin\'s power, also destroying the surrounding kingdoms and their mountains entirely.  You have read several alternative theories as to why it started.',
	'tags': ['dwarf', 'fey','war']
},
{'title':'Aseros',
	'body': "Priestess (?) and local administrator of the Draseros Protectorate.  Currently holding Andraste in prison and running things at Journey's end.  Her magic is very unusual to you;  She similarly was surprised that you could cast 'the magic of the dragons'.",
	'tags': ['dragon']
},
{'title':'Andraste',
'body': "Drow Priestess who you captured during an encounter with her and her sister Enna, who escaped.  She seemed badly addicted to Void's Tears, but seems to have somewhat recovered (last time you saw her, anyway...)",
'tags':['drow']
},
{'title':'Journey\s End',
	'body': "The Starting Town.  A hundred thousand years ago, it appeared to be the local seat of power of Lady Moonflower, but now it's the home of Med'Vin and the sparse few who call it their home.",
	'tags': ['places','Graymane Empire']
},
{'title':"Med'Vin",
	'body': "The former mayor of Journey's End.  You brought his rowdy and dumb sons back to him, and they seem to be monks now in Aseros' church.  He seems reluctant to relinquish his leadership duties to Aseros.",
'tags':[]
},
{'title':"Amber Battlesong",
"body":"Head of the Battlesong family and Council member.  Her niece Terra holds a ring which used to belong to Ruby and Amethyst, and you have heard the family holds several rings.",
"tags":['council','dwarf'],
},
{'title':"Flint Ironfist",
"body":"Head of the military/police (not really distinct concepts to a dwarf) and council member.  Espa's father told stories of his unbeleivable strength and mentioned that he had a magic ring that made him almost invincible.  (You have a better idea of what it might be, now...)",
"tags":['council','dwarf']
},
{'title':"Windwhisper",
"body":"The fey who runs the casino in Dur Modan.  The fey are reportely immortal and unable to lie or break their oaths.  However, bargains or agreements made with them are said to be impossible to willingly break...  She sent you into the Feywild to fetch a piece of legendary music, which you would like to use to beat Terra in a duel.  You promised her that after you used it to win that duel, you would give it to her.",
'tags':['fey','council']
},
{'title':"Guridin and Duridan",
"body":"Gurdian, the king of Dur Modan, and his son, Durdian, the heir apparent.  You spoke to Duridan and he mentioned his father is not well, but still holds a seat on the council.  You spoke to him about the attack that you suffered when coming to Dur Modan, and he offered you his father's vote if you could discover which noble was responsibile.  He said that only a council member would have access to the platinum pieces that your assailant was carrying.",
"tags":['dwarf','council'],
},
{'title':"Ruby and Amethyst",
'body':"The pious Amethyst and her chain-smoking mother Ruby were the first dwarves you met on the way to Dur Modan.  A ring in their family was lost by Ruby's late husband in a very ill-fated gambling match.  Have you heard that Ruby is looking for someone to marry her daughter?",
'tags':['dwarf']
}
].sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); 
function unique(arr) {
	var u = {}, a = [];
	for(var i = 0, l = arr.length; i < l; ++i){
		if(!u.hasOwnProperty(arr[i])) {
			a.push(arr[i]);
			u[arr[i]] = 1;
		}
	}
	return a;
}
ReactDOM.render(<Glossary />, document.querySelector('#root'));
export default Glossary;
