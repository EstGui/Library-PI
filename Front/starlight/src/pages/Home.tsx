import { Banner } from "../components/Banner";
import { BookSection } from "../components/BookSection";
import { Footer } from "../components/Footer";
import { NewsRegistry } from "../components/NewsRegistry";

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