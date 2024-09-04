import styles from './Service.module.scss';

const Service = ({ title }) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{title}</h3>
		</div>
	);
};

export default Service;
