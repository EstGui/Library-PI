import { BookCard } from "../Book/Book";
import { BookContainer, BookCarouselContainer } from './style'

const BookSection = () => {
    return (
        <>
            <BookContainer>
                <h1>BookSection</h1>
                <BookCarouselContainer>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                </BookCarouselContainer>
            </BookContainer>
        </>
    )
}

export { BookSection }