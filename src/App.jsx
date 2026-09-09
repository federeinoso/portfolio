function App() {
  return (
    <main className="container px-4">
      {/* HEADER */}
      <header className="d-flex flex-column flex-md-row justify-content-md-between fw-bold fs-3 mt-5">
        <div className="d-flex flex-column flex-md-row">
          <a href="#skills" className="me-2 me-sm-5 mb-2 mb-sm-0">
            skills
          </a>

          <a href="#projects" className="me-2 me-sm-5 mb-2 mb-sm-0">
            projects
          </a>

          <a href="#work" className="me-2 me-sm-5 mb-4 mb-sm-0">
            works
          </a>
        </div>
        <div>
          <a href="#contact" id="btn" className="px-2 rounded-3 btn-light">
            contact me!
          </a>
        </div>
      </header>
      {/* HERO */}

      <section
        className="d-flex justify-content-around py-5"
        style={{ marginTop: "5rem" }}
      >
        <div className="d-flex flex-column position-relative">
          <h1
            className="fw-bolder spacing mt-3"
            style={{
              fontSize: "min(20vw, 6rem)",
              zIndex: 10,
            }}
          >
            federico
          </h1>

          <h1
            className="fw-bolder spacing ms-5 z-10"
            style={{
              fontSize: "min(20vw, 6rem)",
              marginTop: "min(-3vw, -1.5rem)",
              zIndex: 10,
            }}
          >
            reinoso
          </h1>

          <img
            src="/images/Blob.svg"
            alt="violet blob"
            className="position-absolute img-fluid levitation"
            style={{
              zIndex: 0,
              width: "300px",
            }}
          />
        </div>

        <div className="position-relative d-none d-sm-block">
          <img src="/images/header-image.svg" alt="boy with computer" />

          <img
            src="/images/icon1.svg"
            alt="square levitating"
            className="position-absolute icon1 levitation levitation-shadow"
          />

          <img
            src="/images/icon2.svg"
            alt="square levitating"
            className="position-absolute icon2 levitation levitation-shadow"
          />

          <img
            src="/images/icon3.svg"
            alt="emoji levitating"
            className="position-absolute icon3 levitation levitation-shadow"
          />
        </div>
      </section>
      {/* ABOUT */}
      <section className="d-flex position-relative justify-content-between align-content-center py-5">
        <div>
          <h2>
            frontend developer with <span className="fw-bold">react js</span>
          </h2>

          <h2>
            web design, <span className="fw-bold">figma to web</span>
          </h2>

          <h2>
            ready to <span className="fw-bold">work</span>
          </h2>
        </div>

        <div className="d-flex">
          <div className="d-flex flex-column justify-content-center text-end">
            <span className="display-4 fw-bolder" style={{ zIndex: 10 }}>
              about
            </span>

            <span
              className="display-4 fw-bolder"
              style={{
                zIndex: 10,
                marginTop: "-20px",
              }}
            >
              me
            </span>
          </div>

          <img
            src="/images/Blob2.svg"
            alt="green blob"
            className="position-absolute end-0 mt-4 mt-sm-0 img-fluid levitation"
            style={{ zIndex: -1 }}
          />
        </div>
      </section>
      {/* SKILLS */}
      <section className="py-5 d-flex flex-column" id="skills">
        <div className="position-relative d-flex mb-5">
          <span className="display-4 fw-bolder" style={{ zIndex: 10 }}>
            skills
          </span>

          <img
            src="/images/Blob3.svg"
            alt="lightblue blob"
            className="position-absolute top-0 img-fluid levitation"
            style={{ zIndex: -1 }}
          />
        </div>

        <div className="mt-4">
          <h2>html</h2>

          <div className="d-flex align-items-baseline">
            <h2>css</h2>

            <span className="ms-2 spacing-0">
              vanilla or frameworks (bootstrap, tailwind)
            </span>
          </div>

          <div className="d-flex align-items-baseline">
            <h2>javascript</h2>

            <span className="ms-2 spacing-0">react, nextjs</span>
          </div>

          <h2>git, github</h2>

          <div className="d-flex align-items-baseline">
            <h2>api</h2>

            <span className="ms-2 spacing-0">rest, crud</span>
          </div>

          <h2>figma</h2>

          <div className="d-flex align-items-baseline">
            <h2>methodologys</h2>

            <span className="ms-2 spacing-0">freelancer, scrum, devops</span>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section className="py-5" id="projects">
        <div className="position-relative d-flex justify-content-end align-items-center mb-5">
          <span
            className="display-4 fw-bolder"
            style={{
              zIndex: 10,
              marginTop: "40px",
            }}
          >
            projects
          </span>

          <img
            src="/images/Blob4.svg"
            alt="yellow blob"
            className="position-absolute me-1 me-sm-5 top-0 img-fluid levitation"
            style={{ zIndex: -1 }}
          />
        </div>

        <div className="row py-5">
          {/* COLUMN 1 */}
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <a href="http://fm-ecommerce-sneakers.vercel.app/">
              <img
                src="/images/projects/project4.png"
                className="w-100 mb-4"
                alt="project screenshot"
              />
            </a>

            <a href="http://tenzies-game-pi.vercel.app/">
              <img
                src="/images/projects/project6.png"
                className="w-100 mb-4"
                alt="project screenshot"
              />
            </a>

            <a href="https://rock-paper-scissors-federeinoso.vercel.app/">
              <img
                src="/images/projects/project7.png"
                className="w-100 mb-4"
                alt="project screenshot"
              />
            </a>
          </div>

          {/* COLUMN 2 */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <a href="https://federeinoso.github.io/digitalNAO-reto1/">
              <img
                src="/images/projects/project2.png"
                className="w-100 mb-4"
                alt="project screenshot"
              />
            </a>

            <a href="https://federeinoso.github.io/TOP-weather-app/">
              <img
                src="/images/projects/project3.png"
                className="w-100 mb-4"
                alt="project screenshot"
              />
            </a>
          </div>

          {/* COLUMN 3 */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <a href="https://fm-room-homepage-bay.vercel.app/">
              <img
                src="/images/projects/project5.png"
                className="w-100 mb-4"
                alt="project screenshot"
              />
            </a>

            <a href="https://logiports.com.ar/">
              <img
                src="/images/projects/project1.png"
                className="w-100 mb-4"
                alt="project screenshot"
              />
            </a>
          </div>
        </div>
      </section>
      {/* WORK */}
      <section className="mb-5" id="work">
        <div className="position-relative d-flex mb-5">
          <span className="display-4 fw-bolder" style={{ zIndex: 10 }}>
            works
          </span>

          <img
            src="/images/Blob6.svg"
            alt="lightblue blob"
            className="position-absolute top-0 img-fluid levitation"
            style={{ zIndex: -1 }}
          />
        </div>

        <div className="d-flex flex-md-row flex-column row">
          <h4 className="spacing-0 col-md-8 d-flex flex-column fw-normal">
            <span className="mb-3">
              engineered an operational management system for port logistics
              services, focusing on real-time data visualization and user
              experience.
            </span>

            <span className="mb-3">
              implemented driver documentation tracking and vehicle monitoring
              dashboards with live data updates.
            </span>
            <span className="mb-3">
              designed and developed intuitive user interfaces for both internal
              staff and external clients
            </span>
            <span className="mb-1">
              optimized application performance for handling real-time logistics
              data streams
            </span>
            <span style={{ fontSize: "18px" }} className="fw-semibold">
              at Logiports
            </span>
          </h4>

          <span className="spacing-0 col-md-4">
            html, css, bootstrap, react, react-router-dom, axios, formik, yup,
            prime react, react-bootstrap, api rest, abm, git, github
          </span>
        </div>

        <div className="d-flex mt-4 flex-md-row flex-column row">
          <h4 className="spacing-0 col-md-8 d-flex flex-column fw-normal">
            <span className="mb-3">
              frontend development team coordination and management, task
              assignment, definition of implementation approaches and
              development workflows, and establishment of coding standards
            </span>
            <span className="mb-3">
              developed and maintained a carrier management system for
              industrial plant access control, implementing driver and vehicle
              documentation workflows, creating reusable UI components and
              integrating RESTful APIs
            </span>
            <span className="mb-3">
              built a customizable order management platform for a wholesale
              apparel company
            </span>
            <span className="mb-3">
              collaborated with cross-functional teams using SCRUM methodology
              to deliver features on schedule
            </span>
            <span className="mb-1">
              translated Figma designs into pixel-perfect, responsive interfaces
            </span>
            <span style={{ fontSize: "18px" }} className="fw-semibold">
              at Rubik Solutions
            </span>
          </h4>

          <span className="spacing-0 col-md-4">
            html, css, bootstrap, react, react-router-dom, axios, api rest, abm,
            git, azure
          </span>
        </div>
      </section>
      {/* CONTACT */}
      <section
        className="py-5 d-flex flex-column flex-sm-row justify-content-between position-relative"
        id="contact"
      >
        <div className="d-flex flex-column text-start">
          <span className="display-4 fw-bolder" style={{ zIndex: 10 }}>
            contact
          </span>

          <span
            className="display-4 fw-bolder"
            style={{
              zIndex: 10,
              marginTop: "-20px",
            }}
          >
            me
          </span>

          <img
            src="/images/Blob5.svg"
            alt="pink blob"
            className="position-absolute top-0 img-fluid levitation"
            style={{ zIndex: -1 }}
          />
        </div>

        <div className="d-flex mx-auto mx-sm-0">
          <h2 className="me-2">open to</h2>

          <div>
            <h2>work</h2>
            <h2>contribute</h2>
            <h2>help</h2>
          </div>
        </div>
      </section>
      {/* SOCIAL / FOOTER */}
      <section className="d-flex flex-column flex-sm-row justify-content-around align-content-center py-5">
        <div className="mx-auto mb-5 mb-sm-0">
          {/* LINKEDIN */}
          <a href="https://linkedin.com/in/federeinoso">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="me-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
                fill="black"
                id="icons"
              />
            </svg>
          </a>

          {/* GITHUB */}
          <a href="https://github.com/federeinoso">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="me-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8 16.1675C8 11.7639 11.5718 8.192 15.9755 8.192C20.3792 8.192 23.951 11.7639 24 16.1675C24 19.6905 21.7492 22.6752 18.5688 23.7516C18.1774 23.8006 18.0306 23.5559 18.0306 23.3602V21.1584C18.0306 20.4244 17.7859 19.9351 17.4924 19.6905C19.2538 19.4948 21.1132 18.8587 21.1132 15.7761C21.1132 14.8954 20.7706 14.1614 20.2814 13.6232C20.2852 13.6078 20.2906 13.5885 20.297 13.5655C20.3719 13.2953 20.5892 12.5111 20.1835 11.5192C20.1835 11.5192 19.4985 11.3235 17.9816 12.351C17.3456 12.2042 16.6605 12.1064 15.9755 12.1064C15.2905 12.1064 14.6055 12.1553 13.9694 12.351C12.4526 11.3235 11.7676 11.5192 11.7676 11.5192C11.3351 12.5763 11.6105 13.3975 11.6669 13.5657L11.6697 13.5743C11.1315 14.1614 10.8379 14.8464 10.8379 15.7272C10.8379 18.8097 12.6973 19.4948 14.4587 19.6905C14.263 19.8862 14.0184 20.2287 13.9694 20.7669C13.5291 20.9626 12.4037 21.3052 11.6697 20.0819C11.6697 20.0819 11.2294 19.299 10.4465 19.2501C10.4465 19.2501 9.66364 19.2501 10.3976 19.7394C10.3976 19.7394 10.9358 19.9841 11.2783 20.9137C11.2783 20.9137 11.7676 22.4795 13.9694 21.9902V23.3602C13.9694 23.5559 13.8226 23.8006 13.4312 23.7516C10.2997 22.6752 8 19.6905 8 16.1675Z"
                fill="black"
                id="icons"
              />
            </svg>
          </a>

          {/* EMAIL */}
          <a href="mailto:federeinoso01@gmail.com">
            <svg
              width="32"
              height="32"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M256.000,512.000 C114.615,512.000 0.000,397.385 0.000,256.000 C0.000,114.615 114.615,0.000 256.000,0.000 C397.385,0.000 512.000,114.615 512.000,256.000 C512.000,397.385 397.385,512.000 256.000,512.000 ZM108.159,344.493 L191.319,265.831 L108.159,197.002 L108.159,344.493 ZM403.839,147.838 L108.159,147.838 L108.159,177.337 L255.999,305.162 L403.839,177.337 L403.839,147.838 ZM403.839,197.002 L320.679,265.831 L403.839,344.493 L403.839,197.002 ZM311.439,275.663 L255.999,324.827 L200.559,275.663 L108.159,364.158 L403.839,364.158 L311.439,275.663 Z"
                fill="black"
                id="icons"
              />
            </svg>
          </a>
        </div>

        <h4 className="mx-auto">📍 italia</h4>
      </section>
    </main>
  );
}

export default App;
