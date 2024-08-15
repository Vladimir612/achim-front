import React from "react";
import styles from "./sliderHero.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
});

const SliderHero = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "green",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          backgroundColor: "#2A5251",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        onClick={onClick}
      >
        <img src="/arrowForward.svg" alt="Arrow forward" width={20} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "green",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          backgroundColor: "#2A5251",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        onClick={onClick}
      >
        <img src="/arrowBackward.svg" alt="Arrow forward" width={20} />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrowClass: "custom-slick-arrow",
    className: "custom-slick-slider",
    arrows: true,
    swipeToSlide: true,
    customPaging: () => <div></div>,
  };

  return (
    <div className={styles.sliderHero}>
      <Slider {...settings}>
        <div className={styles.card}>
          <Image
            src="/eventImageExample.png"
            alt="Woods"
            className={styles.eventImage}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.content}>
            <h1>Trauma & Nervous System Converence</h1>
            <p className={`${styles.firstPar} ${merriweather.className}`}>
              Join us for an insightful lecture on trauma and the nervous
              system, exploring vital insights to enhance understanding and
              support. Reserve your spot now!
            </p>
            <div className={styles.columns}>
              <div className={styles.col}>
                <img src="/event.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">26. - 28.</p>
                  <p className="second">September 2024.</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/alarm.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Start: 11:00 AM</p>
                  <p className="second">End: 20:00 PM</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/location_on.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Bahnhofstrasse 25, </p>
                  <p className="second">8001 Zurich</p>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <button className={`${styles.btnCta} ${styles.borderBg}`}>
                More details
              </button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/eventImageExample.png"
            alt="Woods"
            className={styles.eventImage}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.content}>
            <h1>Trauma & Nervous System Converence</h1>
            <p className={styles.firstPar}>
              Join us for an insightful lecture on trauma and the nervous
              system, exploring vital insights to enhance understanding and
              support. Reserve your spot now!
            </p>
            <div className={styles.columns}>
              <div className={styles.col}>
                <img src="/event.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">26. - 28.</p>
                  <p className="second">September 2024.</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/alarm.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Start: 11:00 AM</p>
                  <p className="second">End: 20:00 PM</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/location_on.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Bahnhofstrasse 25, </p>
                  <p className="second">8001 Zurich</p>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <button className={`${styles.btnCta} ${styles.borderBg}`}>
                More details
              </button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/eventImageExample.png"
            alt="Woods"
            className={styles.eventImage}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.content}>
            <h1>Trauma & Nervous System Converence</h1>
            <p className={styles.firstPar}>
              Join us for an insightful lecture on trauma and the nervous
              system, exploring vital insights to enhance understanding and
              support. Reserve your spot now!
            </p>
            <div className={styles.columns}>
              <div className={styles.col}>
                <img src="/event.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">26. - 28.</p>
                  <p className="second">September 2024.</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/alarm.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Start: 11:00 AM</p>
                  <p className="second">End: 20:00 PM</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/location_on.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Bahnhofstrasse 25, </p>
                  <p className="second">8001 Zurich</p>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <button className={`${styles.btnCta} ${styles.borderBg}`}>
                More details
              </button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/eventImageExample.png"
            alt="Woods"
            className={styles.eventImage}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.content}>
            <h1>Trauma & Nervous System Converence</h1>
            <p className={styles.firstPar}>
              Join us for an insightful lecture on trauma and the nervous
              system, exploring vital insights to enhance understanding and
              support. Reserve your spot now!
            </p>
            <div className={styles.columns}>
              <div className={styles.col}>
                <img src="/event.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">26. - 28.</p>
                  <p className="second">September 2024.</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/alarm.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Start: 11:00 AM</p>
                  <p className="second">End: 20:00 PM</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/location_on.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Bahnhofstrasse 25, </p>
                  <p className="second">8001 Zurich</p>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <button className={`${styles.btnCta} ${styles.borderBg}`}>
                More details
              </button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/eventImageExample.png"
            alt="Woods"
            className={styles.eventImage}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.content}>
            <h1>Trauma & Nervous System Converence</h1>
            <p className={styles.firstPar}>
              Join us for an insightful lecture on trauma and the nervous
              system, exploring vital insights to enhance understanding and
              support. Reserve your spot now!
            </p>
            <div className={styles.columns}>
              <div className={styles.col}>
                <img src="/event.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">26. - 28.</p>
                  <p className="second">September 2024.</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/alarm.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Start: 11:00 AM</p>
                  <p className="second">End: 20:00 PM</p>
                </div>
              </div>
              <div className={styles.col}>
                <img src="/location_on.svg" alt="Arrow forward" width={30} />
                <div className={styles.data}>
                  <p className="first">Bahnhofstrasse 25, </p>
                  <p className="second">8001 Zurich</p>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <button className={`${styles.btnCta} ${styles.borderBg}`}>
                More details
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderHero;
