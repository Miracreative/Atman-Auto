// import styles from './ArrowButton.module.scss';

const ArrowButton = ({
	className,
	width = 82,
	height = 82,
	backgroundColor = 'white',
	strokeColor = 'white',
	fillColor = 'white',
	opacity = 1,
}) => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 82 82"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity={opacity}>
				<rect
					x="1"
					y="1"
					width="80"
					height="80"
					rx="20"
					fill={backgroundColor}
					stroke={strokeColor}
				/>
				<path
					d="M26 41.0001L36 46.7736L36 35.2266L26 41.0001ZM56 40L35 40.0001L35 42.0001L56 42L56 40Z"
					fill={fillColor}
				/>
			</g>
		</svg>
	);
};

export default ArrowButton;
