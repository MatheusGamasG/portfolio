import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

<Carousel autoPlay showStatus={false} showThumbs={false}>
    <div>
        <img src={background} />
        <p className="legend">Oh god my lord</p>
    </div>
    <div>
        <img src={background} />
        <p className="legend">Oh no Im Lunatic</p>
    </div>
</Carousel>