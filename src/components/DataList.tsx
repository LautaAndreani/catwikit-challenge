import style from "./DataList.module.css"

type Props = {
    children: JSX.Element | JSX.Element[]
    isFocus: boolean
    setIsFocus:   React.Dispatch<React.SetStateAction<boolean>>
}

export default function DataList({ children, isFocus, setIsFocus }: Props) {
	return (
			<datalist className={isFocus ? style.datalist : ''} onMouseLeave={() => setIsFocus(false)}>
                { children }
            </datalist>
	)
}
