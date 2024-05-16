import css from "./Contact.module.css"

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.contact}>
            <div>
            <p>{name}</p>
            <p>{number}</p></div>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}