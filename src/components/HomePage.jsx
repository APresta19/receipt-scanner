import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'

function HomePage()
{
    return(
        <>
            <Header />
            <main>
                <Welcome />
            </main>
            {/*<Footer />*/}
        </>
    );
}
export default HomePage;