import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <a className={styles.wrapper} href="https://redlegacy.ru/" target="_blank" rel="noreferrer">				
			<svg className={styles.svgStar} viewBox="0 10 114.2 119">					
				<polygon className={styles.fill} points="112.86 25.44 85.99 60.48 111.13 97.13 69.3 82.39 42.63 117.48 43.47 73 1.62 58.59 43.99 45.74 45.17 1.54 70.47 38.04 112.86 25.44"/>
				<polygon className={styles.stroke} points="1.62 58.59 43.99 45.74 45.17 1.54 70.47 38.04 112.86 25.44 85.99 60.48 111.13 97.13 69.3 82.39 42.63 117.48 43.47 73 1.62 58.59"/>					
				<text className={styles.text} transform="translate(35.4 70.8)"><tspan x="0" y="0">&lt;/&gt;</tspan></text>					
			</svg>
			<svg className={styles.svgText} viewBox="0 0 455.6 113.7">								
				<text className={styles.text} transform="translate(1 81.05) scale(.65 1)">
					<tspan className={styles.textRed} x="0" y="0">RED</tspan>
					<tspan x="242.81" y="0"> LEGACY</tspan>
				</text>
				<text className={styles.subText} transform="translate(200 107.83)">
					<tspan x="0" y="0">your humble web chaos</tspan>
				</text>
			</svg>
		</a>
  );
}