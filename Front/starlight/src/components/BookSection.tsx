import { BookCard } from "./Book";

export function BookSection() {
    return (
        <>
            <div className="bookSection">
                <h1>BookSection</h1>
                <div className="bookCarosel">
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                </div>
            </div>
        </>
    )
}