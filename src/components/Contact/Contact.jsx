import css from "./Contact.module.css"
import { IoPerson } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";



export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.contact}>
            <div>
            <p><IoPerson />{name}</p>
            <p><MdLocalPhone />
{number}</p></div>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}