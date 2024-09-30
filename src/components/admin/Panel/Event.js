import React, { useState } from "react";
import styles from "./event.module.scss";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

const Event = ({
  id,
  datesFirstFieldEng,
  datesSecondFieldEng,
  timeFirstFieldEng,
  timeSecondFieldEng,
  addressTextEng,
  titleEng,
  descriptionEng,
  pdfEngLink,
  datesFirstFieldGer,
  datesSecondFieldGer,
  timeFirstFieldGer,
  timeSecondFieldGer,
  addressTextGer,
  titleGer,
  descriptionGer,
  pdfGerLink,
  bgImage,
  addressLink,
  setEvents,
  eventList,
}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [uploadedImg, setUploadedImg] = useState(false);

  const [eventData, setEventData] = useState({
    datesFirstFieldEng,
    datesSecondFieldEng,
    timeFirstFieldEng,
    timeSecondFieldEng,
    addressTextEng,
    titleEng,
    descriptionEng,
    pdfEngLink,
    datesFirstFieldGer,
    datesSecondFieldGer,
    timeFirstFieldGer,
    timeSecondFieldGer,
    addressTextGer,
    titleGer,
    descriptionGer,
    pdfGerLink,
    bgImage,
    addressLink,
  });

  const baseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;
  const [newBgImage, setNewBgImage] = useState(bgImage);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData({
          ...eventData,
          [name]: reader.result,
        });
        if (name === "bgImage") {
          setNewBgImage(reader.result);
          setEventData({
            ...eventData,
            bgImage: file,
          });
          setUploadedImg(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    setErrorMsg(""); // Clear previous error messages

    const {
      datesFirstFieldEng,
      datesSecondFieldEng,
      timeFirstFieldEng,
      timeSecondFieldEng,
      addressTextEng,
      titleEng,
      descriptionEng,
      pdfEngLink,
      datesFirstFieldGer,
      datesSecondFieldGer,
      timeFirstFieldGer,
      timeSecondFieldGer,
      addressTextGer,
      titleGer,
      descriptionGer,
      pdfGerLink,
      bgImage,
      addressLink,
    } = eventData;

    // Validate that all required fields are filled in
    if (
      !datesFirstFieldEng ||
      !datesSecondFieldEng ||
      !timeFirstFieldEng ||
      !timeSecondFieldEng ||
      !addressTextEng ||
      !titleEng ||
      !descriptionEng ||
      !datesFirstFieldGer ||
      !datesSecondFieldGer ||
      !timeFirstFieldGer ||
      !timeSecondFieldGer ||
      !addressTextGer ||
      !titleGer ||
      !descriptionGer ||
      !pdfEngLink ||
      !pdfGerLink ||
      !addressLink
    ) {
      setErrorMsg("All fields must be filled out.");
      return;
    }

    try {
      const token = localStorage.getItem("jwtToken");

      const updatedEventData = {
        ...eventData,
        ...(uploadedImg && { bgImage: bgImage }),
      };

      const res = await axios.patch(
        `${baseURL}/api/events/${id}`,
        updatedEventData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        setEvents(
          eventList.map((event) =>
            event._id === res.data._id ? res.data : event
          )
        );
        setErrorMsg("");
        setEditModalOpen(false);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.error || "Server error occurred.");
    }
  };

  const handleDelete = async () => {
    setErrorMsg("");
    try {
      const token = localStorage.getItem("jwtToken");

      const res = await axios.delete(`${baseURL}/api/events/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      if (res.status === 200) {
        setEvents(eventList.filter((event) => event._id !== id));
        setErrorMsg("");
        setDeleteModalOpen(false);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.error || "Error on the server"); // Set the error message if something goes wrong
    }
  };

  return (
    <div className={styles.eventCard}>
      {bgImage && (
        <img src={bgImage} alt="Event background" className={styles.bgImage} />
      )}
      <div className={styles.eventInfo}>
        <h3>
          {datesFirstFieldEng} - {datesSecondFieldEng}
        </h3>
        <p>
          <strong>Time:</strong> {timeFirstFieldEng} - {timeSecondFieldEng}
        </p>
        <p>
          <strong>Address:</strong> {addressTextEng}
        </p>
        <p>
          <strong>Title:</strong> {titleEng}
        </p>
        <p>
          <strong>Description:</strong> {descriptionEng}
        </p>
        <p style={{ marginTop: "2rem" }}>
          <strong>Pdf (English) Link:</strong>{" "}
          <a href={pdfEngLink} target="_blank">
            Open PDF
          </a>
        </p>
        <h3 style={{ marginTop: "2rem" }}>
          {datesFirstFieldGer} - {datesSecondFieldGer}
        </h3>
        <p>
          <strong>Time (German):</strong> {timeFirstFieldGer} -{" "}
          {timeSecondFieldGer}
        </p>
        <p>
          <strong>Address (German):</strong> {addressTextGer}
        </p>
        <p>
          <strong>Title (German):</strong> {titleGer}
        </p>
        <p>
          <strong>Description (German):</strong> {descriptionGer}
        </p>
        <p style={{ marginTop: "2rem" }}>
          <strong>Pdf (German) Link:</strong>{" "}
          <a href={pdfGerLink} target="_blank">
            Open PDF
          </a>
        </p>
        <p style={{ marginTop: "2rem" }}>
          <strong>Address Link:</strong>{" "}
          <a href={addressLink} target="_blank">
            Open in Google Maps
          </a>
        </p>
        <div className={styles.buttons}>
          <button onClick={() => setEditModalOpen(true)}>Edit</button>
          <button onClick={() => setDeleteModalOpen(true)}>Delete</button>
        </div>
      </div>

      {isEditModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Edit Event</h2>
            <form>
              <div className={styles.inputGroup}>
                <label htmlFor="titleEng">Title (English)</label>
                <textarea
                  id="titleEng"
                  name="titleEng"
                  value={eventData.titleEng}
                  onChange={handleInputChange}
                  className={inter.className}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="descriptionEng">Description (English)</label>
                <textarea
                  id="descriptionEng"
                  name="descriptionEng"
                  value={eventData.descriptionEng}
                  onChange={handleInputChange}
                  className={inter.className}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="datesFirstFieldEng">Start Date (English)</label>
                <input
                  type="text"
                  id="datesFirstFieldEng"
                  name="datesFirstFieldEng"
                  value={eventData.datesFirstFieldEng}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="datesSecondFieldEng">End Date (English)</label>
                <input
                  type="text"
                  id="datesSecondFieldEng"
                  name="datesSecondFieldEng"
                  value={eventData.datesSecondFieldEng}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="timeFirstFieldEng">Start Time (English)</label>
                <input
                  type="text"
                  id="timeFirstFieldEng"
                  name="timeFirstFieldEng"
                  value={eventData.timeFirstFieldEng}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="timeSecondFieldEng">End Time (English)</label>
                <input
                  type="text"
                  id="timeSecondFieldEng"
                  name="timeSecondFieldEng"
                  value={eventData.timeSecondFieldEng}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="addressTextEng">Address (English)</label>
                <input
                  type="text"
                  id="addressTextEng"
                  name="addressTextEng"
                  value={eventData.addressTextEng}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="pdfEngLink">Pdf (English) Link</label>
                <input
                  type="text"
                  id="pdfEngLink"
                  name="pdfEngLink"
                  value={eventData.pdfEngLink}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="titleGer">Title (German)</label>
                <textarea
                  id="titleGer"
                  name="titleGer"
                  value={eventData.titleGer}
                  onChange={handleInputChange}
                  className={inter.className}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="descriptionGer">Description (German)</label>
                <textarea
                  id="descriptionGer"
                  name="descriptionGer"
                  value={eventData.descriptionGer}
                  onChange={handleInputChange}
                  className={inter.className}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="datesFirstFieldGer">Start Date (German)</label>
                <input
                  type="text"
                  id="datesFirstFieldGer"
                  name="datesFirstFieldGer"
                  value={eventData.datesFirstFieldGer}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="datesSecondFieldGer">End Date (German)</label>
                <input
                  type="text"
                  id="datesSecondFieldGer"
                  name="datesSecondFieldGer"
                  value={eventData.datesSecondFieldGer}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="timeFirstFieldGer">Start Time (German)</label>
                <input
                  type="text"
                  id="timeFirstFieldGer"
                  name="timeFirstFieldGer"
                  value={eventData.timeFirstFieldGer}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="timeSecondFieldGer">End Time (German)</label>
                <input
                  type="text"
                  id="timeSecondFieldGer"
                  name="timeSecondFieldGer"
                  value={eventData.timeSecondFieldGer}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="addressTextGer">Address (German)</label>
                <input
                  type="text"
                  id="addressTextGer"
                  name="addressTextGer"
                  value={eventData.addressTextGer}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="pdfGerLink">Pdf (German) Link</label>
                <input
                  type="text"
                  id="pdfGerLink"
                  name="pdfGerLink"
                  value={eventData.pdfGerLink}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="bgImage">Background Image</label>
                <input
                  type="file"
                  id="bgImage"
                  name="bgImage"
                  onChange={handleFileChange}
                />
                {newBgImage && (
                  <div className={styles.imagePreview}>
                    <img src={newBgImage} alt="Background Preview" />
                  </div>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="addressLink">Address Link</label>
                <input
                  type="text"
                  id="addressLink"
                  name="addressLink"
                  value={eventData.addressLink}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.buttons}>
                <button type="button" onClick={handleEdit}>
                  Save
                </button>
                <button type="button" onClick={() => setEditModalOpen(false)}>
                  Cancel
                </button>
              </div>
              {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            </form>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className={styles.modal}>
          <div className={`${styles.modalContent} ${styles.delete}`}>
            <h2>Are you sure?</h2>
            <p>Do you really want to delete this event?</p>
            <div className={styles.buttons}>
              <button onClick={handleDelete}>Yes</button>
              <button onClick={() => setDeleteModalOpen(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
