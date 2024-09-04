'use client';

import React, { useState } from 'react';

import styles from './ServiceImage.module.scss';

const ServiceImage = ({
	img,
	title,
	defaultColor = 'currentColor',
	hoverColor = 'red',
}) => {
	// Состояние для управления цветом
	const [color, setColor] = useState(defaultColor);

	// Обработчики наведения и ухода мыши
	const handleMouseEnter = () => {
		setColor(hoverColor);
	};

	const handleMouseLeave = () => {
		setColor(defaultColor);
	};

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{ display: 'inline-block', textAlign: 'center' }}
		>
			<img
				src={img}
				alt={title}
				style={{ fill: color, width: '100px', height: '100px' }} // Задайте нужные размеры
			/>
		</div>
	);
};

export default ServiceImage;
