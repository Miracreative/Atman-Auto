import styles from './TriangleIcon.module.scss';

const DEFAULT_COLOR = '#353535';

function TriangleIcon({ color = DEFAULT_COLOR, isOpen }) {
	return (
		<svg
			className={`${styles.triangle} ${isOpen ? styles.active : ''}`}
			width="11"
			height="9"
			viewBox="0 0 11 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.37622 8.40688C5.99629 9.09766 5.00371 9.09766 4.62378 8.40688L0.815055 1.48192C0.448506 0.815466 0.930668 9.12994e-07 1.69127 8.79746e-07L9.30873 5.46777e-07C10.0693 5.1353e-07 10.5515 0.815466 10.1849 1.48192L6.37622 8.40688Z"
				fill={color}
			/>
		</svg>
	);
}

export { DEFAULT_COLOR, TriangleIcon };
