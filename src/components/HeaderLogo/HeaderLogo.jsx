import Link from 'next/link';
import Image from 'next/image';
import logoImage from '/public/logo.svg';
import styles from './HeaderLogo.module.scss';

export default function HeaderLogo() {
	return (
		<Link href="/" className={styles.contaier}>
			<Image
				src={logoImage}
				alt="Atman Auto logo"
				className={styles.logo}
				priority
			/>
		</Link>
	);
}
