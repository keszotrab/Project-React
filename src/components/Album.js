import { createUseStyles } from 'react-jss';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//basicly a focking slider gallery




const styles = createUseStyles({
    logo: {
        width: '100px',
        height: '100px',
    },

})


function Album() {
    const classes = styles();


    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
}

export default Album;

/*

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});



*/


/*

* {
  box-sizing: border-box;
}

body {
  max-width: 1440px;
  margin: auto;
}

.slider-wrapper {
  margin: 1rem;
  position: relative;
  overflow: hidden;
}

.slides-container {
  height: calc(100vh - 2rem);
  width: 100%;
  display: flex;
  overflow: scroll;
  scroll-behavior: smooth;
  list-style: none;
  margin: 0;
  padding: 0;
}

.slide-arrow {
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 4rem;
  background-color: white;
  border: none;
  width: 2rem;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 100ms;
}

.slide-arrow:hover,
.slide-arrow:focus {
  opacity: 1;
}

#slide-arrow-prev {
  left: 0;
  padding-left: 0.25rem;
  border-radius: 0 2rem 2rem 0;
}

#slide-arrow-next {
  right: 0;
  padding-left: 0.75rem;
  border-radius: 2rem 0 0 2rem;
}

.slide {
  width: 100%;
  height: 100%;
  flex: 1 0 100%;
}

.slide:nth-child(1) {
  background-color: #49b293;
}

.slide:nth-child(2) {
  background-color: #b03532;
}

.slide:nth-child(3) {
  background-color: #6a478f;
  margin: 0;
}

.slide:nth-child(4) {
  background-color: #da6f2b;
}


footer {
  padding: 1em;
  text-align: center;
  background-color: #FFDFB9;
}

footer a {
  color: inherit;
  text-decoration: none;
}

footer .heart {
  color: #DC143C;
}

*/


