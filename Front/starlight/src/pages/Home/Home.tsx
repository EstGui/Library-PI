import { Banner } from "../../components/Banner/Banner";
import { BookSection } from "../../components/BookSection/BookSection";
import { Footer } from "../../components/Footer/Footer";
import { NewsRegistry } from "../../components/NewsRegistry/NewsRegistry";

export function Home() {
    return (
        <>
            <Banner/>
            <BookSection/>
            <BookSection/>
            <BookSection/>
            <BookSection/>
            <NewsRegistry/>
            <Footer/>
        </>
    )
}