import { NewsRegistryContainer } from './style'

const NewsRegistry = () => {
    return (
        <>
            <section>
                <NewsRegistryContainer>
                    <h1>Receba Novidades</h1>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Email"/>
                    <button type="submit">Enviar</button>
                </NewsRegistryContainer>
            </section>
        </>
    )
}

export { NewsRegistry }