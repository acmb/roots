import { FC, useEffect, useRef, useState } from "react"

import { createPortal } from "react-dom"

import useScreenWidth from "../../hook/useScreenWidth"

import data from "../../data/page-content.json"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { LazyLoadImage } from "react-lazy-load-image-component"

import aboutDesktop from "../../assets/images/about/about-desktop.jpg"
import aboutMobile from "../../assets/images/about/about-mobile.jpg"
import aboutVideo from "../../assets/images/about/video.mp4"
import aboutVideoImg from "../../assets/images/about/video.jpg"

import "./TextVideo.styles.scss"

library.add(
  faPlay
)

const TextVideo: FC = () => {
  const [showModal, setShowModal] = useState(false)
  const videoModalRef = useRef<HTMLDivElement | null>(null)
  const isDesktop = useScreenWidth(992)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [showModal])

  return (
    <div className="container">
      <div className="row about-video">
        <div className="col-12 col-lg-5 about-media">
          {
            isDesktop ? (
              <LazyLoadImage
                alt="Desktop About Image"
                height={1920}
                src={aboutDesktop}
                width={1280}
              />
            ) : (
              <LazyLoadImage
                alt="Mobile About Image"
                height={188}
                src={aboutMobile}
                width={296}
              />
            )
          }

          <button
            type="button"
            className="play-video"
            data-bs-toggle="modal"
            data-bs-target={videoModalRef}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>

          {showModal && createPortal(
            <div
              className={`modal fade video-modal ${showModal ? "show" : ""}`.trim()}
              ref={videoModalRef}
              tabIndex={-1}
              aria-labelledby="aboutVideolLabel"
              aria-hidden={showModal}
            >
              <div className="modal-dialog">
                <video
                  className="modal-video"
                  controls={true}
                  autoPlay={false}
                  loop={false}
                  muted={true}
                  poster={aboutVideoImg}
                >
                  <source
                    src={aboutVideo}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div
                className="modal-overlay"
                onClick={handleClose}
              />
            </div>,
            document.getElementById("modal-root")!
          )}
        </div>

        <div className="col-12 col-lg-7 about-content">
          <h2>{data.about_copy.heading}</h2>

          {data.about_copy.copy.map((copy, index) => {
            return (
              <p key={index}>
                {copy.text}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TextVideo
