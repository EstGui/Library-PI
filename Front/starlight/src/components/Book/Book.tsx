import { Book }  from "./style"

const BookCard = () => {
    return (
        <>
        <Book>
            <img src="https://via.placeholder.com/200x300" alt="Book"/>
                <h4>Book Name</h4>
                <a href="">
                    <button type="button">Button</button>
                </a>
        </Book>
        </>
    )
}

export { BookCard }