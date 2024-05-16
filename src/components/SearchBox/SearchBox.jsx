
import css from "./SerachBox.module.css"

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.searchBox}>
            <p>Find contacts by name</p>
            <input className={css.input} type="text"
                value={value}
                onChange={(evt) => {
                onFilter(evt.target.value)
                }} />
            <button className={css.btn} type="button">Find</button>
        </div>
    )
}