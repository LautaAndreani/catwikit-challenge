import style from './Chart.module.css'

type Props = {
	length: number
	label: string
}

export default function Chart({ length, label }: Props) {
	return (
		<div className={style.chart_container}>
			<b>{label}</b>
			<div className={style.chart_layout}>
				{Array.from({ length: length }).map((_, index) => {
					return <div className={style.chart} key={index}></div>
				})}
			</div>
		</div>
	)
}
