import React from "react";
import Banner from "../components/banner/Banner";
import { Merriweather } from "next/font/google";
import FooterBanner from "../components/footerBanner/FooterBanner";
import Footer from "../components/footer/Footer";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
});

const Services = () => {
  return (
    <div>
      <Banner
        subHeading="WHAT WE OFFER"
        heading="Transforming Society Together"
        par="Discover our offerings designed to empower societal change. From events and training to structural consulting and innovative initiatives, we're dedicated to shaping a brighter future. Join us in creating positive impact."
        customText="Explore Our Services"
        imagePath="/servicesBanner.png"
      />
      <div
        style={{
          background: "#0B1D26",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          padding: "4rem 13rem",
          gridGap: "1rem",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(214, 241, 235, 0.35)",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(213, 255, 245, 0.075) 3.85%, rgba(0, 39, 97, 0.06) 100%)",
            padding: "1rem 2rem",
            borderRadius: "2rem",
            paddingBottom: "4 rem",
            gridColumn: "1 / 4",
          }}
        >
          <div
            className="title"
            style={{
              margin: "1.4rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <svg
              width="38"
              height="42"
              viewBox="0 0 38 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0332 32.8992C4.81654 30.877 3.0957 28.6312 1.8707 26.1617C0.645703 23.6923 0.0332031 21.1797 0.0332031 18.6239C0.0332031 13.6446 1.7799 9.41227 5.27329 5.92705C8.76706 2.44183 13.0093 0.699219 17.9999 0.699219C22.0054 0.699219 25.6513 1.93394 28.9374 4.40339C32.2235 6.87283 34.3526 10.052 35.3249 13.9409L37.5602 22.8029C37.7033 23.3504 37.5999 23.8478 37.2499 24.2951C36.8999 24.7423 36.4332 24.9659 35.8499 24.9659H31.2999V33.1326C31.2999 34.0951 30.9573 34.9189 30.272 35.6041C29.5864 36.2897 28.7624 36.6326 27.7999 36.6326H21.9665V40.4826C21.9665 40.7139 21.888 40.908 21.7309 41.0647C21.5742 41.2211 21.3797 41.2992 21.1475 41.2992C20.9158 41.2992 20.7221 41.2211 20.5665 41.0647C20.411 40.908 20.3332 40.7139 20.3332 40.4826V36.7778C20.3332 36.2532 20.501 35.8256 20.8366 35.4951C21.1718 35.1645 21.5874 34.9992 22.0832 34.9992H27.7999C28.3443 34.9992 28.7915 34.8242 29.1415 34.4742C29.4915 34.1242 29.6665 33.677 29.6665 33.1326V25.0826C29.6665 24.5867 29.8343 24.171 30.17 23.8354C30.5052 23.5002 30.9207 23.3326 31.4165 23.3326H35.9665L33.7499 14.2909C32.8554 10.7131 30.9304 7.82561 27.9749 5.62839C25.0193 3.43116 21.6943 2.33255 17.9999 2.33255C13.4888 2.33255 9.63876 3.91319 6.44987 7.07447C3.26098 10.2357 1.66654 14.0801 1.66654 18.6076C1.66654 20.9308 2.14293 23.1379 3.0957 25.229C4.04848 27.32 5.39987 29.1787 7.14987 30.805L8.66654 32.1992V40.4826C8.66654 40.7139 8.58798 40.908 8.43087 41.0647C8.27415 41.2211 8.0797 41.2992 7.84754 41.2992C7.61576 41.2992 7.42209 41.2211 7.26654 41.0647C7.11098 40.908 7.0332 40.7139 7.0332 40.4826V32.8992ZM17.4142 29.7492C17.8435 29.7492 18.204 29.6042 18.4957 29.3141C18.7874 29.0236 18.9332 28.6638 18.9332 28.2349C18.9332 27.8056 18.7881 27.4451 18.498 27.1534C18.2075 26.8617 17.8478 26.7159 17.4189 26.7159C16.9895 26.7159 16.629 26.8609 16.3374 27.1511C16.0457 27.4416 15.8999 27.8013 15.8999 28.2302C15.8999 28.6595 16.0449 29.0201 16.335 29.3117C16.6255 29.6034 16.9853 29.7492 17.4142 29.7492ZM17.5857 11.2576C18.7174 11.2576 19.6526 11.5778 20.3915 12.2183C21.1304 12.8584 21.4999 13.6854 21.4999 14.6992C21.4999 15.3074 21.3346 15.8873 21.004 16.4387C20.6735 16.9902 19.9832 17.8103 18.9332 18.8992C18.311 19.5603 17.8151 20.2214 17.4457 20.8826C17.0763 21.5437 16.8332 22.2048 16.7165 22.8659C16.6776 23.0603 16.7348 23.2451 16.888 23.4201C17.0413 23.5951 17.2349 23.6826 17.469 23.6826C17.6674 23.6826 17.8443 23.6145 17.9999 23.4784C18.1554 23.3423 18.2721 23.1576 18.3499 22.9242C18.4665 22.4187 18.6901 21.9034 19.0207 21.3784C19.3513 20.8534 19.8082 20.2603 20.3915 19.5992C21.4415 18.4326 22.161 17.5089 22.5499 16.8284C22.9388 16.1478 23.1332 15.4381 23.1332 14.6992C23.1332 13.2603 22.6179 12.0645 21.5874 11.1117C20.5568 10.1589 19.2249 9.68255 17.5915 9.68255C16.5427 9.68255 15.5514 9.92561 14.6177 10.4117C13.6836 10.8978 12.9249 11.5881 12.3415 12.4826C12.2249 12.677 12.2054 12.8714 12.2832 13.0659C12.361 13.2603 12.4971 13.3964 12.6915 13.4742C12.886 13.552 13.0804 13.5714 13.2749 13.5326C13.4693 13.4937 13.6443 13.377 13.7999 13.1826C14.2665 12.5603 14.8341 12.0839 15.5026 11.7534C16.1715 11.4228 16.8659 11.2576 17.5857 11.2576Z"
                fill="#FBD784"
                fillOpacity="0.5"
              />
            </svg>

            <h3
              style={{
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Trainers pool
            </h3>
          </div>
          <p
            className={merriweather.className}
            style={{ fontSize: "1rem", letterSpacing: "1px", fontWeight: 300 }}
          >
            There will be a pool of certified trainers who will cover both
            online courses and be bookable for individually designed learning
            processes for organizations.
          </p>
        </div>
        <div
          style={{
            border: "2px solid rgba(214, 241, 235, 0.35)",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(213, 255, 245, 0.075) 3.85%, rgba(0, 39, 97, 0.06) 100%)",
            padding: "1rem 2rem",
            borderRadius: "2rem",
            paddingBottom: "4 rem",
            gridColumn: "4 / 7",
          }}
        >
          <div
            className="title"
            style={{
              margin: "1.4rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6992 34.2165V31.2999H4.19922C3.18811 31.2999 2.352 30.9693 1.69089 30.3082C1.02977 29.6471 0.699219 28.811 0.699219 27.7999V3.5332C0.699219 2.52209 1.02977 1.68598 1.69089 1.02487C2.352 0.363759 3.18811 0.0332031 4.19922 0.0332031H19.9492C20.1826 0.0332031 20.377 0.110981 20.5326 0.266536C20.6881 0.422092 20.7659 0.616536 20.7659 0.84987C20.7659 1.0832 20.6881 1.27765 20.5326 1.4332C20.377 1.58876 20.1826 1.66654 19.9492 1.66654H4.19922C3.73255 1.66654 3.30477 1.86098 2.91589 2.24987C2.527 2.63876 2.33255 3.06654 2.33255 3.5332V27.7999C2.33255 28.2665 2.527 28.6943 2.91589 29.0832C3.30477 29.4721 3.73255 29.6665 4.19922 29.6665H37.7992C38.2659 29.6665 38.6937 29.4721 39.0826 29.0832C39.4714 28.6943 39.6659 28.2665 39.6659 27.7999V24.9999C39.6659 24.7665 39.7437 24.5721 39.8992 24.4165C40.0548 24.261 40.2492 24.1832 40.4826 24.1832C40.7159 24.1832 40.9103 24.261 41.0659 24.4165C41.2214 24.5721 41.2992 24.7665 41.2992 24.9999V27.7999C41.2992 28.811 40.9687 29.6471 40.3076 30.3082C39.6464 30.9693 38.8103 31.2999 37.7992 31.2999H27.2992V34.2165C27.2992 34.7221 27.1339 35.1401 26.8034 35.4707C26.4728 35.8013 26.0548 35.9665 25.5492 35.9665H16.4492C15.9437 35.9665 15.5256 35.8013 15.1951 35.4707C14.8645 35.1401 14.6992 34.7221 14.6992 34.2165ZM31.3826 17.3582V0.84987C31.3826 0.616536 31.4603 0.422092 31.6159 0.266536C31.7714 0.110981 31.9659 0.0332031 32.1992 0.0332031C32.4326 0.0332031 32.627 0.110981 32.7826 0.266536C32.9381 0.422092 33.0159 0.616536 33.0159 0.84987V17.3582L40.1325 10.2415C40.2881 10.086 40.4631 10.0179 40.6576 10.0374C40.852 10.0568 41.027 10.1443 41.1826 10.2999C41.3381 10.4554 41.4159 10.6401 41.4159 10.854C41.4159 11.0679 41.3381 11.2526 41.1826 11.4082L33.4242 19.1665C33.0742 19.5165 32.6659 19.6915 32.1992 19.6915C31.7326 19.6915 31.3242 19.5165 30.9742 19.1665L23.1576 11.3499C23.002 11.1943 22.9339 11.0096 22.9534 10.7957C22.9728 10.5818 23.0603 10.3971 23.2159 10.2415C23.3714 10.086 23.5562 10.0082 23.7701 10.0082C23.9839 10.0082 24.1687 10.086 24.3242 10.2415L31.3826 17.3582Z"
                fill="#FBD784"
                fillOpacity="0.5"
              />
            </svg>

            <h3
              style={{
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Online courses
            </h3>
          </div>
          <p
            className={merriweather.className}
            style={{ fontSize: "1rem", letterSpacing: "1px", fontWeight: 300 }}
          >
            Courses will be bookable here (hopefully free of charge), for
            beginners and advanced learners, moderated learning, practice and
            exchange groups. As well as specific courses for various disciplines
            from healthcare, education or business. And this 7 days a week at
            different times of the day and, as soon as possible, in other
            languages.
          </p>
        </div>
        <div
          style={{
            border: "2px solid rgba(214, 241, 235, 0.35)",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(213, 255, 245, 0.075) 3.85%, rgba(0, 39, 97, 0.06) 100%)",
            padding: "1rem 2rem",
            borderRadius: "2rem",
            paddingBottom: "4 rem",
            gridColumn: "1 / 3",
          }}
        >
          <div
            className="title"
            style={{
              margin: "1.4rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66579 35.9665C0.969678 35.9665 0.474817 35.6554 0.181206 35.0332C-0.112405 34.411 -0.0453216 33.8276 0.382456 33.2832L14.0325 16.7165V1.66654H10.5325C10.3011 1.66654 10.107 1.58798 9.95029 1.43087C9.79395 1.27415 9.71579 1.0797 9.71579 0.847538C9.71579 0.61576 9.79395 0.422092 9.95029 0.266536C10.107 0.110981 10.3011 0.0332031 10.5325 0.0332031H25.4658C25.6972 0.0332031 25.891 0.111757 26.0474 0.268869C26.2041 0.425591 26.2825 0.620035 26.2825 0.852202C26.2825 1.08398 26.2041 1.27765 26.0474 1.4332C25.891 1.58876 25.6972 1.66654 25.4658 1.66654H21.9658V16.7165L35.6158 33.2832C36.0436 33.8276 36.1106 34.411 35.817 35.0332C35.5234 35.6554 35.0286 35.9665 34.3325 35.9665H1.66579ZM6.33246 31.9999H29.6658L21.7325 22.6665H14.2658L6.33246 31.9999ZM1.66579 34.3332H34.3325L20.3325 17.2999V1.66654H15.6658V17.2999L1.66579 34.3332Z"
                fill="#FBD784"
                fillOpacity="0.5"
              />
            </svg>

            <h3
              style={{
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Science networks
            </h3>
          </div>
          <p
            className={merriweather.className}
            style={{ fontSize: "1rem", letterSpacing: "1px", fontWeight: 300 }}
          >
            Science networks are supported by the forum in order to weave the
            various research strands even more closely together.
          </p>
        </div>
        <div
          style={{
            border: "2px solid rgba(214, 241, 235, 0.35)",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(213, 255, 245, 0.075) 3.85%, rgba(0, 39, 97, 0.06) 100%)",
            padding: "1rem 2rem",
            borderRadius: "2rem",
            paddingBottom: "4 rem",
            gridColumn: "3 / 5",
          }}
        >
          <div
            className="title"
            style={{
              margin: "1.4rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <svg
              width="36"
              height="38"
              viewBox="0 0 36 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.1249 34.2922L27.9165 37.4422C27.761 37.5977 27.5763 37.6658 27.3624 37.6464C27.1485 37.6269 26.9638 37.5394 26.8082 37.3839C26.6526 37.2283 26.5749 37.0533 26.5749 36.8589C26.5749 36.6644 26.6526 36.4894 26.8082 36.3339L29.9582 33.1255L26.8082 29.9755C26.6526 29.82 26.5749 29.6352 26.5749 29.4214C26.5749 29.2075 26.6526 29.0227 26.8082 28.8672C26.9638 28.6727 27.1582 28.5852 27.3915 28.6047C27.6249 28.6241 27.8193 28.7116 27.9749 28.8672L31.1249 32.0172L34.2165 28.8672C34.3721 28.7116 34.5665 28.6339 34.7999 28.6339C35.0332 28.6339 35.2276 28.7116 35.3832 28.8672C35.5776 29.0616 35.6749 29.2561 35.6749 29.4505C35.6749 29.645 35.5776 29.8394 35.3832 30.0339L32.2332 33.1255L35.3832 36.2755C35.5388 36.4311 35.6263 36.6255 35.6457 36.8589C35.6651 37.0922 35.5776 37.2866 35.3832 37.4422C35.2276 37.5977 35.0332 37.6658 34.7999 37.6464C34.5665 37.6269 34.3721 37.5394 34.2165 37.3839L31.1249 34.2922ZM5.51654 36.3339C6.56654 36.3339 7.4707 35.9547 8.22904 35.1964C8.98737 34.438 9.36654 33.5339 9.36654 32.4839C9.36654 31.4339 8.98737 30.5297 8.22904 29.7714C7.4707 29.013 6.56654 28.6339 5.51654 28.6339C4.46654 28.6339 3.56237 29.013 2.80404 29.7714C2.0457 30.5297 1.66654 31.4339 1.66654 32.4839C1.66654 33.5339 2.0457 34.438 2.80404 35.1964C3.56237 35.9547 4.46654 36.3339 5.51654 36.3339ZM5.51654 37.9672C3.99987 37.9672 2.70681 37.4325 1.63737 36.363C0.567925 35.2936 0.0332031 34.0005 0.0332031 32.4839C0.0332031 30.9672 0.567925 29.6741 1.63737 28.6047C2.70681 27.5352 3.99987 27.0005 5.51654 27.0005C6.87765 27.0005 8.07348 27.438 9.10404 28.313C10.1346 29.188 10.7471 30.3061 10.9415 31.6672C12.8471 31.5894 14.461 30.87 15.7832 29.5089C17.1054 28.1477 17.7665 26.5339 17.7665 24.6672V16.2089C17.7665 13.4089 18.7582 11.0172 20.7415 9.03385C22.7249 7.05052 25.1165 6.05885 27.9165 6.05885H32.8165L28.2082 1.45052C28.0526 1.29497 27.9651 1.11024 27.9457 0.896354C27.9263 0.682465 28.0138 0.478299 28.2082 0.283854C28.4026 0.0894097 28.5971 -0.0078125 28.7915 -0.0078125C28.986 -0.0078125 29.1804 0.0894097 29.3749 0.283854L34.7415 5.65052C35.0915 6.00052 35.2665 6.40885 35.2665 6.87552C35.2665 7.34219 35.0915 7.75052 34.7415 8.10052L29.3165 13.5255C29.161 13.6811 28.986 13.7589 28.7915 13.7589C28.5971 13.7589 28.4026 13.6811 28.2082 13.5255C28.0138 13.37 27.9263 13.1852 27.9457 12.9714C27.9651 12.7575 28.0526 12.5533 28.2082 12.3589L32.7582 7.69219H27.9165C25.5443 7.69219 23.5318 8.51858 21.879 10.1714C20.2263 11.8241 19.3999 13.8366 19.3999 16.2089V24.6672C19.3999 27.0005 18.5735 28.9936 16.9207 30.6464C15.2679 32.2991 13.2749 33.1839 10.9415 33.3005C10.7471 34.6616 10.1346 35.7797 9.10404 36.6547C8.07348 37.5297 6.87765 37.9672 5.51654 37.9672ZM4.87487 8.04219L1.66654 11.1922C1.51098 11.3477 1.32626 11.4158 1.11237 11.3964C0.898481 11.3769 0.713759 11.2894 0.558203 11.1339C0.402648 10.9783 0.32487 10.8033 0.32487 10.6089C0.32487 10.4144 0.402648 10.2394 0.558203 10.0839L3.7082 6.87552L0.558203 3.72552C0.402648 3.56997 0.32487 3.38524 0.32487 3.17135C0.32487 2.95747 0.402648 2.77274 0.558203 2.61719C0.713759 2.42274 0.908203 2.33524 1.14154 2.35469C1.37487 2.37413 1.56931 2.46163 1.72487 2.61719L4.87487 5.76719L7.96654 2.61719C8.12209 2.46163 8.31654 2.38385 8.54987 2.38385C8.7832 2.38385 8.97765 2.46163 9.1332 2.61719C9.32765 2.81163 9.42487 3.00608 9.42487 3.20052C9.42487 3.39497 9.32765 3.58941 9.1332 3.78385L5.9832 6.87552L9.1332 10.0255C9.28876 10.1811 9.37626 10.3755 9.3957 10.6089C9.41515 10.8422 9.32765 11.0366 9.1332 11.1922C8.97765 11.3477 8.7832 11.4158 8.54987 11.3964C8.31654 11.3769 8.12209 11.2894 7.96654 11.1339L4.87487 8.04219Z"
                fill="#FBD784"
                fillOpacity="0.5"
              />
            </svg>

            <h3
              style={{
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Structural consulting
            </h3>
          </div>
          <p
            className={merriweather.className}
            style={{ fontSize: "1rem", letterSpacing: "1px", fontWeight: 300 }}
          >
            Here, larger structures such as municipalities, universities,
            federal states or (federal) politics and later also the EU
            institutions can find advice and support.
          </p>
        </div>
        <div
          style={{
            border: "2px solid rgba(214, 241, 235, 0.35)",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(213, 255, 245, 0.075) 3.85%, rgba(0, 39, 97, 0.06) 100%)",
            padding: "1rem 2rem",
            borderRadius: "2rem",
            paddingBottom: "4 rem",
            gridColumn: "5 / 7",
          }}
        >
          <div
            className="title"
            style={{
              margin: "1.4rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <svg
              width="42"
              height="32"
              viewBox="0 0 42 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9992 18.9172L22.9826 20.4922C23.3326 20.7644 23.6826 20.7741 24.0326 20.5214C24.3826 20.2686 24.4992 19.9283 24.3826 19.5005L23.5659 16.9339L26.0742 15.0089C26.3853 14.7366 26.4826 14.4061 26.3659 14.0172C26.2492 13.6283 25.977 13.4339 25.5492 13.4339H22.7492L21.8159 10.6339C21.6992 10.2061 21.427 9.99219 20.9992 9.99219C20.5714 9.99219 20.2992 10.2061 20.1826 10.6339L19.2492 13.4339H16.3909C15.9631 13.4339 15.6909 13.6283 15.5742 14.0172C15.4576 14.4061 15.5548 14.7366 15.8659 15.0089L18.3159 16.9339L17.4992 19.6172C17.3826 20.045 17.4895 20.3852 17.8201 20.638C18.1506 20.8908 18.4909 20.8811 18.8409 20.6089L20.9992 18.9172ZM4.19922 31.6339C3.227 31.6339 2.40061 31.2936 1.72005 30.613C1.0395 29.9325 0.699219 29.1061 0.699219 28.1339V24.1089C0.699219 23.7977 0.767274 23.5061 0.903385 23.2339C1.0395 22.9616 1.24366 22.7477 1.51589 22.5922C2.68255 21.8533 3.61589 20.92 4.31589 19.7922C5.01589 18.6644 5.36589 17.4005 5.36589 16.0005C5.36589 14.6005 5.01589 13.3366 4.31589 12.2089C3.61589 11.0811 2.68255 10.1477 1.51589 9.40885C1.24366 9.2533 1.0395 9.03941 0.903385 8.76719C0.767274 8.49497 0.699219 8.2033 0.699219 7.89219V3.86719C0.699219 2.89497 1.0395 2.06858 1.72005 1.38802C2.40061 0.707465 3.227 0.367188 4.19922 0.367188H37.7992C38.7714 0.367188 39.5978 0.707465 40.2784 1.38802C40.9589 2.06858 41.2992 2.89497 41.2992 3.86719V7.89219C41.2992 8.2033 41.2312 8.49497 41.0951 8.76719C40.9589 9.03941 40.7548 9.2533 40.4826 9.40885C39.3159 10.1477 38.3826 11.0811 37.6826 12.2089C36.9826 13.3366 36.6326 14.6005 36.6326 16.0005C36.6326 17.4005 36.9826 18.6644 37.6826 19.7922C38.3826 20.92 39.3159 21.8533 40.4826 22.5922C40.7548 22.7477 40.9589 22.9616 41.0951 23.2339C41.2312 23.5061 41.2992 23.7977 41.2992 24.1089V28.1339C41.2992 29.1061 40.9589 29.9325 40.2784 30.613C39.5978 31.2936 38.7714 31.6339 37.7992 31.6339H4.19922ZM4.19922 30.0005H37.7992C38.3437 30.0005 38.7909 29.8255 39.1409 29.4755C39.4909 29.1255 39.6659 28.6783 39.6659 28.1339V24.0505C38.227 23.195 37.0895 22.0575 36.2534 20.638C35.4173 19.2186 34.9992 17.6727 34.9992 16.0005C34.9992 14.3283 35.4173 12.7825 36.2534 11.363C37.0895 9.94358 38.227 8.80608 39.6659 7.95052V3.86719C39.6659 3.32274 39.4909 2.87552 39.1409 2.52552C38.7909 2.17552 38.3437 2.00052 37.7992 2.00052H4.19922C3.65477 2.00052 3.20755 2.17552 2.85755 2.52552C2.50755 2.87552 2.33255 3.32274 2.33255 3.86719V7.95052C3.77144 8.80608 4.90894 9.94358 5.74505 11.363C6.58116 12.7825 6.99922 14.3283 6.99922 16.0005C6.99922 17.6727 6.58116 19.2186 5.74505 20.638C4.90894 22.0575 3.77144 23.195 2.33255 24.0505V28.1339C2.33255 28.6783 2.50755 29.1255 2.85755 29.4755C3.20755 29.8255 3.65477 30.0005 4.19922 30.0005Z"
                fill="#FBD784"
                fillOpacity="0.5"
              />
            </svg>

            <h3
              style={{
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Events
            </h3>
          </div>
          <p
            className={merriweather.className}
            style={{ fontSize: "1rem", letterSpacing: "1px", fontWeight: 300 }}
          >
            Check all our conferences, trainings, annual groups, etc.
          </p>
        </div>
        <div
          style={{
            border: "2px solid rgba(214, 241, 235, 0.35)",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(213, 255, 245, 0.075) 3.85%, rgba(0, 39, 97, 0.06) 100%)",
            padding: "1rem 2rem",
            borderRadius: "2rem",
            gridColumn: "1 / 4",
            gridRow: "3 / 4",
          }}
        >
          <div
            className="title"
            style={{
              margin: "1.4rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <svg
              width="36"
              height="42"
              viewBox="0 0 36 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.69987 41.3007C3.4037 41.3007 2.30179 40.847 1.39412 39.9398C0.486842 39.0321 0.0332031 37.9302 0.0332031 36.634V5.36735C0.0332031 4.07118 0.486842 2.96927 1.39412 2.0616C2.30179 1.15432 3.4037 0.700684 4.69987 0.700684H24.9999C25.9624 0.700684 26.7864 1.04329 27.472 1.72852C28.1573 2.41413 28.4999 3.23818 28.4999 4.20068V30.334C28.4999 31.2965 28.1573 32.1204 27.472 32.8056C26.7864 33.4912 25.9624 33.834 24.9999 33.834H4.69987C3.8832 33.834 3.17348 34.1125 2.5707 34.6694C1.96793 35.2266 1.66654 35.9169 1.66654 36.7402C1.66654 37.5639 1.96793 38.2576 2.5707 38.8215C3.17348 39.3854 3.8832 39.6674 4.69987 39.6674H32.4665C33.011 39.6674 33.4582 39.4924 33.8082 39.1424C34.1582 38.7924 34.3332 38.3451 34.3332 37.8007V6.18402C34.3332 5.95263 34.4118 5.75877 34.5689 5.60244C34.7256 5.44571 34.92 5.36735 35.1522 5.36735C35.384 5.36735 35.5776 5.44571 35.7332 5.60244C35.8888 5.75877 35.9665 5.95263 35.9665 6.18402V37.8007C35.9665 38.7632 35.6239 39.587 34.9387 40.2723C34.2531 40.9579 33.429 41.3007 32.4665 41.3007H4.69987ZM9.1332 32.2007H24.9999C25.5443 32.2007 25.9915 32.0257 26.3415 31.6757C26.6915 31.3257 26.8665 30.8785 26.8665 30.334V4.20068C26.8665 3.65624 26.6915 3.20902 26.3415 2.85902C25.9915 2.50902 25.5443 2.33402 24.9999 2.33402H9.1332V32.2007ZM7.49987 32.2007V2.33402H4.69987C3.84043 2.33402 3.12001 2.63541 2.53862 3.23818C1.95723 3.84096 1.66654 4.55068 1.66654 5.36735V33.309C2.09431 32.9979 2.56059 32.7354 3.06537 32.5215C3.57054 32.3076 4.11537 32.2007 4.69987 32.2007H7.49987Z"
                fill="#FBD784"
                fillOpacity="0.5"
              />
            </svg>

            <h3
              style={{
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Self-study area
            </h3>
          </div>
          <p
            className={merriweather.className}
            style={{ fontSize: "1rem", letterSpacing: "1px", fontWeight: 300 }}
          >
            There will be videos, lectures, case studies and exercises, learning
            groups and probably at some point a three-dimensional metaverse as
            an interactive learning space.
          </p>
        </div>
        <div
          style={{
            border: "2px solid rgba(214, 241, 235, 0.35)",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(213, 255, 245, 0.075) 3.85%, rgba(0, 39, 97, 0.06) 100%)",
            padding: "1rem 2rem",
            borderRadius: "2rem",
            gridColumn: "4 / 7",
            gridRow: "3 / 4",
          }}
        >
          <div
            className="title"
            style={{
              margin: "1.4rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <svg
              width="44"
              height="41"
              viewBox="0 0 44 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.659 32.609H29.634C29.4026 32.609 29.2088 32.5305 29.0524 32.3734C28.8957 32.2166 28.8174 32.0222 28.8174 31.79C28.8174 31.5582 28.8957 31.3646 29.0524 31.209C29.2088 31.0535 29.4026 30.9757 29.634 30.9757H40.659L36.0507 26.309C35.8951 26.1535 35.8076 25.959 35.7882 25.7257C35.7687 25.4924 35.8504 25.2946 36.0332 25.1324C36.2004 24.9835 36.4007 24.9187 36.634 24.9382C36.8674 24.9576 37.0618 25.0451 37.2174 25.2007L42.584 30.5674C42.934 30.9174 43.109 31.3257 43.109 31.7924C43.109 32.259 42.934 32.6674 42.584 33.0174L37.159 38.4424C37.0035 38.5979 36.8285 38.6757 36.634 38.6757C36.4396 38.6757 36.2409 38.5946 36.0379 38.4324C35.852 38.2835 35.7687 38.0924 35.7882 37.859C35.8076 37.6257 35.8951 37.4312 36.0507 37.2757L40.659 32.609ZM16.6257 26.484C18.259 26.484 19.766 26.1243 21.1465 25.4049C22.5271 24.6854 23.684 23.7229 24.6174 22.5174C23.4507 21.7396 22.2004 21.1562 20.8665 20.7674C19.5326 20.3785 18.1229 20.184 16.6374 20.184C15.1518 20.184 13.7382 20.3785 12.3965 20.7674C11.0549 21.1562 9.80068 21.7396 8.63402 22.5174C9.56735 23.7229 10.7243 24.6854 12.1049 25.4049C13.4854 26.1243 14.9924 26.484 16.6257 26.484ZM16.6257 14.8174C17.5201 14.8174 18.2687 14.516 18.8715 13.9132C19.4743 13.3104 19.7757 12.5618 19.7757 11.6674C19.7757 10.7729 19.4743 10.0243 18.8715 9.42152C18.2687 8.81874 17.5201 8.51735 16.6257 8.51735C15.7312 8.51735 14.9826 8.81874 14.3799 9.42152C13.7771 10.0243 13.4757 10.7729 13.4757 11.6674C13.4757 12.5618 13.7771 13.3104 14.3799 13.9132C14.9826 14.516 15.7312 14.8174 16.6257 14.8174ZM16.6257 40.3674C16.3146 40.3674 16.0035 40.3187 15.6924 40.2215C15.3812 40.1243 15.0896 39.959 14.8174 39.7257C13.4174 38.4424 11.9007 36.9257 10.2674 35.1757C8.63402 33.4257 7.10763 31.5493 5.68818 29.5465C4.26874 27.5437 3.08263 25.4826 2.12985 23.3632C1.17707 21.2437 0.700684 19.1535 0.700684 17.0924C0.700684 12.4257 2.22707 8.52707 5.27985 5.39652C8.33263 2.26596 12.1146 0.700684 16.6257 0.700684C21.1368 0.700684 24.9187 2.26596 27.9715 5.39652C31.0243 8.52707 32.5507 12.4257 32.5507 17.0924V18.056C32.5507 18.3858 32.5118 18.7062 32.434 19.0174H30.7424C30.8201 18.7062 30.8687 18.3858 30.8882 18.056C30.9076 17.7262 30.9174 17.405 30.9174 17.0924C30.9174 12.8146 29.566 9.27568 26.8632 6.47568C24.1604 3.67568 20.7479 2.27568 16.6257 2.27568C12.5035 2.27568 9.09096 3.67568 6.38818 6.47568C3.68541 9.27568 2.33402 12.8146 2.33402 17.0924C2.33402 20.009 3.64652 23.4993 6.27152 27.5632C8.89652 31.6271 12.3479 35.4868 16.6257 39.1424C17.6368 38.2868 18.5993 37.4021 19.5132 36.4882C20.4271 35.5743 21.2924 34.6701 22.109 33.7757L22.3132 33.9215C22.4493 34.0187 22.5872 34.1354 22.7268 34.2715C22.8664 34.4076 22.9928 34.534 23.1059 34.6507L23.2757 34.8257C22.5368 35.6424 21.759 36.459 20.9424 37.2757C20.1257 38.0924 19.309 38.8896 18.4924 39.6674C18.2341 39.9007 17.9407 40.0757 17.6121 40.1924C17.2831 40.309 16.9543 40.3674 16.6257 40.3674Z"
                fill="#FBD784"
                fillOpacity="0.5"
              />
            </svg>

            <h3
              style={{
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Model projects
            </h3>
          </div>
          <p
            className={merriweather.className}
            style={{ fontSize: "1rem", letterSpacing: "1px", fontWeight: 300 }}
          >
            We don't yet know what a more nervous system-friendly daycare
            center, school or local government looks like. This needs to be
            researched through professionally designed and scientifically
            supported model projects.
          </p>
        </div>
      </div>
      <FooterBanner
        subHeading="JOIN ME"
        heading="How can you join in?"
        par="There are many ways to help shape the forum. You can become active as a trainer, join or found a local group, you can help build the club, you can become part of the forum movement with your organization or support us with your ideas, your commitment or your money."
      />
      <Footer />
    </div>
  );
};

export default Services;
