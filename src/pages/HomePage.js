import About from "../Components/About/About"
import Banner from "../Components/Banner/Banner"
import Discover from "../Components/Discover/Discover"
import Newsletter from "../Components/Newsletter/Newsletter"
import Service from "../Components/Service/Service"
import Shop from "../Components/Shop/Shop"
import Testimonial from "../Components/Testimonial/Testimonial"

function HomePage() {
    return (
        <>
            <Banner />
            <Service />
            <About />
            <Shop />
            <Discover />
            <Testimonial />
            <Newsletter />
        </>
    )
}

export default HomePage