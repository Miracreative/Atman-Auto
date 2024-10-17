import styles from './Afoam.module.scss';
import Link from 'next/link';
import Image from 'next/image';



export default function Afoam() {





	return (
		<>
			<section className={styles.section}>
				<div className='container'>
					<div className={styles.wrap}>
						<div className={styles.innerWrap}>
							<div className={styles.afoamTitle}>
								<Image
									className={styles.imgAfoam}
									src='/about/Afoam/afoam.png'
									width={1068}
									height={212}
									alt='Afoam'
								/>
							</div>
							<h2 className={styles.title}>
								Невидимое соединение, видимый результат.
							</h2>

							<div className={styles.subtitle}>Собственная торговая марка</div>

							<div className={styles.bottomSide}>

								<div className={styles.linkWrap}>
									<Link href={'/afoam'} className={styles.afoamLink} >Узнать больше</Link>
								</div>

								<div className={styles.law}>
									Исключительное право на использование торговой марки <br /> AFOAM®- принадлежит ООО "Атман-АВТО"
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}