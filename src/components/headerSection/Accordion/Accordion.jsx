'use client';

import Link from 'next/link';
import { useState } from 'react';

import AccordionItem from '../AccordionItem/AccordionItem';

import { menuItems } from '@/data/menuItems';
import socialLinks from '@/data/socialLinks';

import styles from './Accordion.module.scss';

export default function Accordion({ setActive }) {
	const [openId, setOpenId] = useState(null);

	return (
		<nav className={styles.nav}>
			<ul className={styles.accordion}>
				{Object.keys(menuItems).map((key, id) => {
					const menuItem = menuItems[key];
					return (
						<AccordionItem
							onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
							isOpen={id === openId}
							key={id}
							title={menuItem.title}
							items={menuItem.items}
							setActive={setActive}
						/>
					);
				})}
				<li className={styles.link}>
					<Link href="/production" onClick={() => setActive(false)}>
						Производство
					</Link>
				</li>
				<li className={styles.link}>
					<Link href="/knowledge" onClick={() => setActive(false)}>
						База знаний
					</Link>
				</li>
				<li className={styles.link}>
					<Link href="/news" onClick={() => setActive(false)}>
						Новости
					</Link>
				</li>
			</ul>

			<ul className={styles.socialLinks}>
				<li>
					<Link
						href={socialLinks.vkontakte}
						className={styles.socialLink}
						target="_blank"
					>
						<svg
							width="50"
							height="50"
							viewBox="0 0 50 50"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="25" cy="25" r="25" fill={'var(--red)'} />
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12.9639 17.5413C12.75 17.6052 12.6397 17.693 12.5494 17.8711C12.4961 17.976 12.492 18.0043 12.4922 18.2667C12.4924 18.5816 12.5286 18.7975 12.6744 19.3519C13.2024 21.3595 14.3947 23.9121 15.9531 26.3714C16.7831 27.6813 17.3645 28.4688 18.0276 29.1814C19.7171 30.9969 21.7071 32.1283 23.7389 32.4284C24.5409 32.5468 25.6238 32.506 26.0633 32.3407C26.3231 32.2431 26.4914 32.0741 26.5599 31.8423C26.6033 31.6956 26.6047 31.6434 26.6047 30.24C26.6047 29.3573 26.6137 28.7147 26.6275 28.5989C26.6672 28.2679 26.7766 28.0902 26.9775 28.03C27.1378 27.9819 27.4793 27.9934 27.6645 28.0531C28.1871 28.2214 28.7747 28.6492 29.6868 29.5253C30.0493 29.8735 30.4494 30.3079 31.1027 31.0625C31.8796 31.9599 32.1106 32.1868 32.4048 32.3417C32.7113 32.503 32.6487 32.498 34.3694 32.498C36.0259 32.498 36.0538 32.4964 36.2856 32.3826C36.5261 32.2646 36.6421 32.0748 36.6571 31.7746C36.668 31.5586 36.628 31.3584 36.5238 31.1071C36.1707 30.2554 34.9716 28.6896 33.4078 27.0384C32.9898 26.5969 32.5972 26.1634 32.5355 26.075C32.3093 25.7513 32.2563 25.5447 32.336 25.2976C32.3948 25.1153 32.4697 24.9845 32.8019 24.4837C34.0849 22.55 35.1688 20.7207 35.6886 19.6118C36.0139 18.9178 36.1405 18.5306 36.1582 18.1763C36.1683 17.9725 36.1657 17.9551 36.1065 17.8372C36.0294 17.6836 35.9005 17.5872 35.7029 17.5353C35.5775 17.5024 35.3785 17.498 34.0004 17.498C32.292 17.498 32.3141 17.4965 32.0569 17.6333C31.7721 17.7847 31.6749 17.925 31.3832 18.6059C30.3555 21.0044 28.9808 23.2672 27.9632 24.2352C27.6651 24.5189 27.4592 24.6707 27.2867 24.7341C26.9647 24.8524 26.762 24.7329 26.6509 24.3594C26.6214 24.2603 26.6158 23.8648 26.6053 21.1604L26.5934 18.0745L26.5415 17.9285C26.4735 17.7374 26.3367 17.5912 26.1751 17.537C26.0683 17.5012 25.8782 17.498 23.8021 17.498C21.5994 17.498 21.5425 17.4991 21.4298 17.5432C21.1987 17.6336 21.0407 17.8673 21.0407 18.1189C21.0407 18.3121 21.1086 18.4604 21.3349 18.7616C21.5878 19.0983 21.6812 19.2474 21.7912 19.4905C21.9151 19.7644 21.9903 20.0378 22.0423 20.4031C22.0815 20.6786 22.0841 20.8374 22.0836 22.9464C22.0829 25.4468 22.0768 25.5766 21.9492 25.7725C21.8719 25.8913 21.8015 25.933 21.6552 25.9468C21.494 25.9621 21.3799 25.9229 21.1759 25.782C20.6049 25.3876 19.7907 24.2584 18.9602 22.709C18.7397 22.2978 18.1528 21.048 17.9409 20.5387C17.7254 20.0206 17.4353 19.2488 17.2399 18.6736C16.9728 17.8872 16.789 17.6428 16.381 17.5318C16.2764 17.5033 16.0115 17.4983 14.6774 17.4997C13.2342 17.5011 13.0861 17.5047 12.9639 17.5413Z"
								fill={'var(--white)'}
							/>
						</svg>
					</Link>
				</li>
				<li>
					<Link
						href={socialLinks.youtube}
						className={styles.socialLink}
						target="_blank"
					>
						<svg
							width="50"
							height="50"
							viewBox="0 0 50 50"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="25" cy="25" r="25" fill={'var(--red)'} />
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M23.7788 17.3607C23.0266 17.3686 21.4811 17.3986 21.0699 17.4132C20.9408 17.4177 20.7162 17.4253 20.5709 17.43C20.4256 17.4347 20.2218 17.4422 20.1181 17.4467C20.0143 17.4511 19.7973 17.4605 19.6358 17.4674C18.2425 17.5272 16.9895 17.6419 16.4353 17.7603C15.8786 17.8793 15.452 18.1006 15.062 18.4728C14.7 18.8183 14.4428 19.2617 14.3156 19.7596C14.1353 20.4653 14.0068 21.5456 13.933 22.976C13.8599 24.3917 13.8664 25.67 13.954 27.1284C14.0339 28.4597 14.1847 29.5593 14.3662 30.134C14.5368 30.6742 14.8909 31.1604 15.3586 31.4968C15.6758 31.7248 16.0139 31.8705 16.4353 31.9605C16.9918 32.0795 18.2385 32.1935 19.64 32.2536C19.7992 32.2605 20.0143 32.2697 20.1181 32.2742C20.2218 32.2786 20.4256 32.2861 20.5709 32.2908C20.7162 32.2955 20.9408 32.3031 21.0699 32.3077C21.3051 32.316 22.0304 32.3322 22.9737 32.3501C23.6234 32.3625 25.8045 32.3625 26.4542 32.3501C27.3975 32.3322 28.1228 32.316 28.358 32.3077C28.4871 32.3031 28.7117 32.2955 28.857 32.2908C29.0023 32.2861 29.2061 32.2786 29.3098 32.2742C29.4136 32.2697 29.6287 32.2605 29.7879 32.2536C31.1894 32.1935 32.436 32.0795 32.9926 31.9605C33.5493 31.8416 33.9758 31.6202 34.3659 31.248C34.7279 30.9026 34.9851 30.4591 35.1123 29.9612C35.3026 29.2163 35.4373 28.0337 35.5074 26.4933C35.5283 26.0334 35.5495 25.2119 35.5495 24.8604C35.5495 24.5958 35.5412 24.2074 35.5242 23.677C35.4655 21.8482 35.2925 20.3176 35.0617 19.5868C34.7853 18.7115 34.0464 18.0193 33.151 17.7969C32.7922 17.7078 32.2557 17.6354 31.4694 17.57C31.0707 17.5369 30.2696 17.4879 29.7879 17.4672C29.6241 17.4602 29.409 17.4509 29.3098 17.4466C29.2107 17.4423 29.0069 17.4349 28.857 17.4301C28.707 17.4252 28.4825 17.4176 28.358 17.4131C28.1218 17.4046 27.2587 17.3856 26.4961 17.3721C26.0346 17.3639 24.2041 17.3562 23.7788 17.3607ZM22.7611 21.8364C22.9011 21.915 23.2138 22.09 23.4559 22.2254C23.6981 22.3608 24.0585 22.5624 24.2569 22.6733C24.4552 22.7843 24.7571 22.9531 24.9278 23.0485C25.0985 23.144 25.3985 23.3118 25.5945 23.4215C25.7906 23.5311 26.1038 23.7064 26.2906 23.8108C26.4775 23.9153 26.802 24.0969 27.0119 24.2143C27.2218 24.3317 27.5661 24.5242 27.7771 24.642C27.988 24.7599 28.1607 24.8582 28.1607 24.8604C28.1607 24.8627 28.0749 24.9125 27.97 24.9712C27.8651 25.0299 27.6321 25.1601 27.4522 25.2607C27.2723 25.3612 26.944 25.5448 26.7226 25.6686C26.2253 25.9467 25.8429 26.1605 25.3262 26.4495C25.1071 26.572 24.7599 26.7662 24.5546 26.8811C24.3493 26.9959 24.0342 27.1721 23.8543 27.2727C23.2692 27.5996 22.8514 27.8334 22.6771 27.9313C22.5832 27.9841 22.503 28.0273 22.4989 28.0273C22.4946 28.0273 22.4915 26.6931 22.4915 24.8604C22.4915 22.9798 22.4946 21.6936 22.4991 21.6936C22.5032 21.6936 22.6212 21.7578 22.7611 21.8364Z"
								fill={'var(--white)'}
							/>
						</svg>
					</Link>
				</li>
				<li>
					<Link
						href={socialLinks.telegram}
						className={styles.socialLink}
						target="_blank"
					>
						<svg
							width="50"
							height="50"
							viewBox="0 0 50 50"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="25" cy="25" r="25" fill={'var(--red)'} />
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M34.9474 16.1814C34.8857 16.0467 34.756 15.9219 34.6271 15.8731C34.5697 15.8514 34.4944 15.8338 34.4599 15.834C34.4253 15.8342 34.1198 15.9399 33.781 16.0689C31.0873 17.0945 17.7814 22.2835 14.9304 23.4203C14.353 23.6505 14.3058 23.6806 14.2088 23.8811C14.0842 24.1387 14.2082 24.4682 14.4747 24.5874C14.6685 24.6741 15.9029 25.1522 17.2218 25.6515C17.9297 25.9195 18.6883 26.2101 18.9076 26.2974L19.3062 26.456L19.3474 26.5673C19.3981 26.7044 19.8378 28.1037 20.1197 29.0252C20.7465 31.0738 21.1998 32.5158 21.245 32.6049C21.2957 32.7047 21.3976 32.7962 21.4989 32.8329C21.6137 32.8745 21.8587 32.8772 21.9486 32.8379C22.0165 32.8081 22.7889 32.189 23.7089 31.4268C24.3481 30.8972 24.7319 30.5898 24.8638 30.5015C25 30.4105 25.2109 30.3601 25.3367 30.3887C25.5934 30.4468 25.8454 30.6142 27.4639 31.8013C29.5754 33.3499 29.9148 33.5979 30.2007 33.8013C30.6615 34.129 30.7331 34.1673 30.8839 34.1673C30.9527 34.1673 31.0436 34.1569 31.0858 34.1441C31.1863 34.1136 31.3228 33.9905 31.3728 33.8853C31.3947 33.8391 31.4873 33.4588 31.5787 33.04C32.2574 29.9273 34.6755 18.082 34.9536 16.5077L34.9935 16.282L34.9474 16.1814ZM21.0644 25.3936C22.3198 24.5787 27.3175 21.4595 29.5268 20.1119C29.9785 19.8365 30.3642 19.6111 30.384 19.6111C30.4264 19.6111 30.5344 19.7142 30.5344 19.7546C30.5344 19.8175 29.185 21.1133 26.1731 23.9426C22.8885 27.028 22.5412 27.3655 22.4311 27.5781C22.2913 27.8485 22.2409 28.0818 22.0952 29.134C22.0014 29.8115 21.9394 30.1751 21.9074 30.2355C21.8569 30.3309 21.6228 30.3613 21.5641 30.2801C21.5161 30.2137 21.2217 29.252 20.8953 28.0957C20.416 26.397 20.3805 26.181 20.5309 25.8806C20.6134 25.7158 20.7252 25.6138 21.0644 25.3936Z"
								fill={'var(--white)'}
							/>
						</svg>
					</Link>
				</li>
				<li>
					<Link
						href={socialLinks.dzen}
						className={styles.socialLink}
						target="_blank"
					>
						<svg
							width="50"
							height="50"
							viewBox="0 0 50 50"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="25" cy="25" r="25" fill={'var(--red)'} />
							<path
								d="M17.9069 15.0005C20.1735 14.4019 22.5451 14.542 24.866 14.5C24.7296 16.6964 24.859 18.9611 24.1332 21.0718C23.5735 22.6819 22.1778 23.9297 20.5216 24.32C18.554 24.7891 16.5147 24.8276 14.5017 24.8416C14.5664 22.3879 14.3915 19.8537 15.1611 17.4857C15.5423 16.2221 16.6494 15.3085 17.9069 15.0005ZM25.1581 14.5052C27.5786 14.5437 30.0691 14.3757 32.4127 15.1003C33.609 15.4503 34.5604 16.4146 34.905 17.6135C35.6116 19.9499 35.4681 22.4299 35.4961 24.8416C33.4813 24.8276 31.4386 24.7926 29.4745 24.3131C27.778 23.9071 26.3456 22.5944 25.8191 20.9283C25.1651 18.8526 25.277 16.6509 25.1581 14.5052ZM14.5017 25.1567C16.2926 25.1672 18.0923 25.2529 19.8622 25.5417C21.6095 25.8094 23.3025 26.884 23.9932 28.5588C24.9115 30.7536 24.6824 33.1829 24.873 35.5C22.7777 35.4772 20.6597 35.549 18.589 35.1657C17.4119 34.94 16.1649 34.4237 15.5458 33.3333C14.7448 31.9174 14.6556 30.2461 14.5629 28.657C14.5489 27.4896 14.4755 26.324 14.5017 25.1567ZM29.7753 25.6169C31.6554 25.2406 33.5828 25.1794 35.4961 25.1602C35.4681 27.5718 35.6133 30.0518 34.905 32.3882C34.5587 33.5818 33.6108 34.5427 32.4198 34.898C30.0726 35.6207 27.5769 35.4563 25.1529 35.4947C25.2647 33.2983 25.1529 31.0336 25.8699 28.9229C26.4505 27.213 28.0211 25.9564 29.7753 25.6169Z"
								fill={'var(--white)'}
							/>
						</svg>
					</Link>
				</li>

				<Link
					href={socialLinks.drive2}
					className={styles.socialLink}
					target="_blank"
				>
					<svg
						width="50"
						height="50"
						viewBox="0 0 50 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="25" cy="25" r="25" fill={'var(--red)'} />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M22.3214 14H20V35H22.3214C25.9411 35 27.751 35 28.8755 33.8245C30 32.649 30 30.7571 30 26.9733V22.0267C30 18.2429 30 16.351 28.8755 15.1755C27.751 14 25.9411 14 22.3214 14ZM25.7493 17.9288C25.3265 17.64 24.7415 17.64 23.5714 17.64V31.36C24.7415 31.36 25.3265 31.36 25.7493 31.0712C25.9457 30.9371 26.1133 30.7619 26.2416 30.5566C26.5179 30.1146 26.5179 29.5031 26.5179 28.28V20.72C26.5179 19.4969 26.5179 18.8854 26.2416 18.4434C26.1133 18.2381 25.9457 18.0629 25.7493 17.9288Z"
							fill={'var(--white)'}
						/>
					</svg>
				</Link>
			</ul>
		</nav>
	);
}
