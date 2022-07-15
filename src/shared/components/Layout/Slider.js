const Slider = () => {
    return(
        <>
            <div id="slide" class="carousel slide" data-ride="carousel">

                {/* Indicators  */}
                <ul class="carousel-indicators">
                <li data-target="#slide" data-slide-to="0" class="active"></li>
                <li data-target="#slide" data-slide-to="1"></li>
                <li data-target="#slide" data-slide-to="2"></li>
                <li data-target="#slide" data-slide-to="3"></li>
                <li data-target="#slide" data-slide-to="4"></li>
                <li data-target="#slide" data-slide-to="5"></li>
                </ul>

                {/* The slideshow  */}
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/images/wine-slider1.png" alt="BacHa wineshop" />
                </div>
                <div class="carousel-item">
                    <img src="/images/wine-slider1.png" alt="BacHa wineshop" />
                </div>
                <div class="carousel-item">
                    <img src="/images/wine-slider1.png" alt="Vietpr Academy" />
                </div>
                <div class="carousel-item">
                    <img src="/images/wine-slider1.png" alt="BacHa wineshop" />
                </div>
                <div class="carousel-item">
                    <img src="/images/wine-slider1.png" alt="BacHa wineshop" />
                </div>
                <div class="carousel-item">
                    <img src="/images/wine-slider1.png" alt="BacHa wineshop" />
                </div>
                </div>

                {/* Left and right controls  */}
                <a class="carousel-control-prev" href="#slide" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#slide" data-slide="next">
                <span class="carousel-control-next-icon"></span>
                </a>

            </div>
        </>
    )
}
export default Slider;