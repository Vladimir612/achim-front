import React, { useState } from "react";
import styles from "./event.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Event = ({
  datesFirstFieldEng,
  datesSecondFieldEng,
  timeFirstFieldEng,
  timeSecondFieldEng,
  addressTextEng,
  descriptionEng,
  pdfEng,
  datesFirstFieldGer,
  datesSecondFieldGer,
  timeFirstFieldGer,
  timeSecondFieldGer,
  addressTextGer,
  descriptionGer,
  pdfGer,
  bgImage,
  addressLink,
}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [eventData, setEventData] = useState({
    datesFirstFieldEng,
    datesSecondFieldEng,
    timeFirstFieldEng,
    timeSecondFieldEng,
    addressTextEng,
    descriptionEng,
    pdfEng,
    datesFirstFieldGer,
    datesSecondFieldGer,
    timeFirstFieldGer,
    timeSecondFieldGer,
    addressTextGer,
    descriptionGer,
    pdfGer,
    bgImage,
    addressLink,
  });
  const [newBgImage, setNewBgImage] = useState(bgImage);

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
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    // Perform save operation here
    setEditModalOpen(false);
  };

  const handleDelete = () => {
    // Perform delete operation here
    setDeleteModalOpen(false);
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
          <strong>Description:</strong> {descriptionEng}
        </p>
        {pdfEng && (
          <p>
            <strong>PDF:</strong>{" "}
            <a href={pdfEng} target="_blank">
              Download PDF
            </a>
          </p>
        )}
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
          <strong>Description (German):</strong> {descriptionGer}
        </p>
        {pdfGer && (
          <p>
            <strong>PDF (German):</strong>{" "}
            <a href={pdfGer} target="_blank">
              Download PDF
            </a>
          </p>
        )}
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
                <label htmlFor="pdfEng">PDF (English)</label>
                <input
                  type="file"
                  id="pdfEng"
                  name="pdfEng"
                  onChange={handleFileChange}
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
                <label htmlFor="pdfGer">PDF (German)</label>
                <input
                  type="file"
                  id="pdfGer"
                  name="pdfGer"
                  onChange={handleFileChange}
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
