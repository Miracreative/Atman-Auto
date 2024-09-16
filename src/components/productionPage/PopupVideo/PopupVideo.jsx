import styles from './PopupVideo.module.scss';
import { useEffect, useRef } from 'react';

export default function PopupVideo({ active, setActive, videoSrc }) {

	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.srcObject = null;
			videoRef.current.src = videoSrc;
			videoRef.current.load();
		}
	}, [videoSrc]);

	return (
		<div className={`${active ? styles.popup + ' ' + styles.active : styles.popup}`} onClick={() => setActive(false)}>
			<div className={styles.content} onClick={e => e.stopPropagation()} >
				<video controls ref={videoRef} className={styles.video} >
					{/* <source src={videoSrc} type="video/mp4" /> */}

					{videoSrc && (
						<source src={videoSrc} type="video/mp4, video/quicktime" />
					)}

				</video>
			</div>
		</div>
	);
}



// variant with type mp4 + mov. Но в ProductionContent надо еще добавить пропс и возможно поменять ф-ию handle
// import styles from './PopupVideo.module.scss';
// import { useEffect, useRef } from 'react';

// export default function PopupVideo({ active, setActive, videoSrc, type }) {
// 	const videoRef = useRef(null);

// 	useEffect(() => {
// 		if (videoRef.current) {
// 			videoRef.current.srcObject = null;
// 			videoRef.current.src = videoSrc;
// 			videoRef.current.load();
// 		}
// 	}, [videoSrc]);

// 	return (
// 		<div className={`${active ? styles.popup + ' ' + styles.active : styles.popup}`} onClick={() => setActive(false)}>
// 			<div className={styles.content} onClick={e => e.stopPropagation()} >
// 				<video controls ref={videoRef} className={styles.video} >
// 					{videoSrc && (
// 							<source src={videoSrc} type={`video/${type === 'mp4' ? 'mp4' : 'quicktime'}`} />
// 						)
// 					}
// 				</video>
// 			</div>
// 		</div>
// 	);
// }