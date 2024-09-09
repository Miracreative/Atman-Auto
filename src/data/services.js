import longitudinalCuttingImg from './../../public/services/longitudinal-cutting.svg';
import flatDieCuttingImg from './../../public/services/flat-die-cutting.svg';
import plotterCuttingImg from './../../public/services/plotter-cutting.svg';
import faceCuttingImg from './../../public/services/face-cutting.svg';
import rotaryDieCuttingImg from './../../public/services/rotary-die-cutting.svg';
import laminationImg from './../../public/services/lamination.svg';

const services = {
	longitudinalCutting: {
		title: 'Продольная резка',
		img: longitudinalCuttingImg,
	},

	flatDieCutting: {
		title: 'Плоская высечка',
		img: flatDieCuttingImg,
	},

	plotterCutting: {
		title: 'Плоттерная резка',
		img: plotterCuttingImg,
	},

	faceCutting: {
		title: 'Резка торцевая',
		img: faceCuttingImg,
	},

	rotaryDieCutting: {
		title: 'Ротационная высечка',
		img: rotaryDieCuttingImg,
	},

	lamination: {
		title: 'Ламинация',
		img: laminationImg,
	},
};

export default services;
