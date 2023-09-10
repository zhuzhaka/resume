import styles from './InfoList.module.scss'

export const InfoList = ({list, title}) => {
  
  return (
    <div className={styles.wrapper}>
			{title && <h3>{title}</h3>}
			<ul className={styles.list}>
				{list.map(item => <li key={item}>{item}</li>)}
			</ul>
		</div>
  );
}