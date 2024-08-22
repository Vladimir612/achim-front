"use client";

import React, { useEffect, useState } from "react";
import styles from "./panel.module.scss";
import { useRouter } from "next/navigation";
import User from "./User";
import Event from "./Event";
import { useLocale } from "next-intl";

const Panel = () => {
  const [logout, setLogout] = useState(false);
  const locale = useLocale();

  const [communityMembers, setCommunityMembers] = useState([
    {
      type: "C1",
      email: "partner@example.com",
      name: "John Doe",
      phone: "123-456-7890",
      profileImg: "https://via.placeholder.com/100",
      interests: [0, 1],
      shortDescription:
        "Partner organization focusing on community development.",
      shortDescriptionGer:
        "Partnerorganisation mit Fokus auf Gemeindeentwicklung.",
      subject: "Community Development Projects and Collaborations",
      subjectGer: "Gemeindeentwicklungsprojekte und Kooperationen",
    },
    {
      type: "CM1",
      email: "individual@example.com",
      name: "Jane Smith",
      phone: "098-765-4321",
      profileImg: "https://via.placeholder.com/200",
      interests: [2, 3],
      shortDescription: "Passionate about volunteering and self-growth.",
      shortDescriptionGer:
        "Leidenschaftlich über Freiwilligenarbeit und persönliches Wachstum.",
      subject: "Personal Growth and Volunteer Opportunities",
      subjectGer: "Persönliches Wachstum und Freiwilligenmöglichkeiten",
    },
  ]);

  const [events, setEvents] = useState([
    {
      datesFirstFieldEng: "2023-08-01",
      datesSecondFieldEng: "2023-08-05",
      timeFirstFieldEng: "10:00 AM",
      timeSecondFieldEng: "4:00 PM",
      addressTextEng: "123 Main St, Springfield",
      descriptionEng: "A community gathering event for networking and growth.",
      pdfEng: "https://example.com/event-eng.pdf",
      datesFirstFieldGer: "2023-08-01",
      datesSecondFieldGer: "2023-08-05",
      timeFirstFieldGer: "10:00 Uhr",
      timeSecondFieldGer: "16:00 Uhr",
      addressTextGer: "123 Hauptstr., Springfield",
      descriptionGer:
        "Eine Gemeinschaftsveranstaltung für Networking und Wachstum.",
      pdfGer: "https://example.com/event-ger.pdf",
      bgImage: "https://via.placeholder.com/300",
      addressLink: "https://maps.google.com/?q=123+Main+St,+Springfield",
    },
    {
      datesFirstFieldEng: "2023-08-01",
      datesSecondFieldEng: "2023-08-05",
      timeFirstFieldEng: "10:00 AM",
      timeSecondFieldEng: "4:00 PM",
      addressTextEng: "123 Main St, Springfield",
      descriptionEng: "A community gathering event for networking and growth.",
      pdfEng: "https://example.com/event-eng.pdf",
      datesFirstFieldGer: "2023-08-01",
      datesSecondFieldGer: "2023-08-05",
      timeFirstFieldGer: "10:00 Uhr",
      timeSecondFieldGer: "16:00 Uhr",
      addressTextGer: "123 Hauptstr., Springfield",
      descriptionGer:
        "Eine Gemeinschaftsveranstaltung für Networking und Wachstum.",
      pdfGer: "https://example.com/event-ger.pdf",
      bgImage: "https://via.placeholder.com/300",
      addressLink: "https://maps.google.com/?q=123+Main+St,+Springfield",
    },
  ]);

  const [communityMemberData, setCommunityMemberData] = useState({
    type: "",
    email: "",
    name: "",
    phone: "",
    profileImg: null,
    interests: [],
    shortDescription: "",
    shortDescriptionGer: "",
    subject: "",
    subjectGer: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  const interestOptions = [
    "Self Reflection",
    "Connections",
    "Self Growth",
    "Volonterism",
    "Seeking Help",
    "Breaking Isolation",
    "Research",
    "Sharing Experience",
  ];

  const typeOptions = [
    { value: "C1", label: "Institution" },
    { value: "C2", label: "Organization" },
    { value: "C3", label: "Partner" },
    { value: "CM1", label: "Individual" },
    { value: "CM2", label: "Trainer" },
  ];

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        router.push(`/${locale}/admin/login`);
      }
    }
  }, [logout, router]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setLogout(true);
  };

  const handleCommunityMemberChange = (e) => {
    const { name, value } = e.target;
    setCommunityMemberData({
      ...communityMemberData,
      [name]: value,
    });
  };

  const handleProfileImgChange = (e) => {
    const file = e.target.files[0];
    setCommunityMemberData({
      ...communityMemberData,
      profileImg: file,
    });
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleInterestsChange = (e) => {
    const { value, checked } = e.target;
    const index = parseInt(value, 10);
    setCommunityMemberData((prevState) => {
      if (checked) {
        return {
          ...prevState,
          interests: [...prevState.interests, index],
        };
      } else {
        return {
          ...prevState,
          interests: prevState.interests.filter(
            (interest) => interest !== index
          ),
        };
      }
    });
  };

  const handleCommunityMemberSubmit = (e) => {
    e.preventDefault();
  };

  const [eventData, setEventData] = useState({
    datesFirstFieldEng: "",
    datesSecondFieldEng: "",
    timeFirstFieldEng: "",
    timeSecondFieldEng: "",
    addressTextEng: "",
    descriptionEng: "",
    pdfEng: null,
    datesFirstFieldGer: "",
    datesSecondFieldGer: "",
    timeFirstFieldGer: "",
    timeSecondFieldGer: "",
    addressTextGer: "",
    descriptionGer: "",
    pdfGer: null,
    bgImage: null,
    addressLink: "",
  });

  const [previewEventImage, setPreviewEventImage] = useState(null);
  const [previewPdfEng, setPreviewPdfEng] = useState(null);
  const [previewPdfGer, setPreviewPdfGer] = useState(null);

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleEventFileChange = (e, fileType) => {
    const file = e.target.files[0];
    setEventData({
      ...eventData,
      [fileType]: file,
    });

    if (fileType === "bgImage") {
      setPreviewEventImage(URL.createObjectURL(file));
    } else if (fileType === "pdfEng") {
      setPreviewPdfEng(file.name);
    } else if (fileType === "pdfGer") {
      setPreviewPdfGer(file.name);
    }
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log(eventData);
  };

  return (
    <div className={styles.panel}>
      <div className={styles.banner}>
        <h1>Hello, name</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className={styles.formWrapper}>
        <h2>Add Community Member</h2>
        <form onSubmit={handleCommunityMemberSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              value={communityMemberData.type}
              onChange={handleCommunityMemberChange}
            >
              <option value="">Select Type</option>
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={communityMemberData.email}
              onChange={handleCommunityMemberChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={communityMemberData.name}
              onChange={handleCommunityMemberChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={communityMemberData.phone}
              onChange={handleCommunityMemberChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="shortDescription">Short Description</label>
            <input
              type="text"
              id="shortDescription"
              name="shortDescription"
              value={communityMemberData.shortDescription}
              onChange={handleCommunityMemberChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="shortDescriptionGer">
              Short Description (German)
            </label>
            <input
              type="text"
              id="shortDescriptionGer"
              name="shortDescriptionGer"
              value={communityMemberData.shortDescriptionGer}
              onChange={handleCommunityMemberChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={communityMemberData.subject}
              onChange={handleCommunityMemberChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="subjectGer">Subject (German)</label>
            <input
              type="text"
              id="subjectGer"
              name="subjectGer"
              value={communityMemberData.subjectGer}
              onChange={handleCommunityMemberChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="profileImg">Profile Image</label>
            <div className={styles.fileInputWrapper}>
              <label htmlFor="profileImg" className={styles.fileInputLabel}>
                Choose File
              </label>
              <input
                type="file"
                id="profileImg"
                name="profileImg"
                className={styles.fileInput}
                onChange={handleProfileImgChange}
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className={styles.previewImage}
                />
              )}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Interests</label>
            <div className={styles.checkboxGroup}>
              {interestOptions.map((interest, index) => (
                <div key={interest} className={styles.checkboxWrapper}>
                  <input
                    type="checkbox"
                    id={interest}
                    name="interests"
                    value={index}
                    checked={communityMemberData.interests.includes(index)}
                    onChange={handleInterestsChange}
                  />
                  <label htmlFor={interest}>{interest}</label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" style={{ marginTop: "1rem" }}>
            Submit
          </button>
        </form>
      </div>

      <div className={styles.userList}>
        {communityMembers.map((member, index) => (
          <User
            key={index}
            type={member.type}
            email={member.email}
            name={member.name}
            phone={member.phone}
            profileImg={member.profileImg}
            interests={member.interests}
            shortDescription={member.shortDescription}
            shortDescriptionGer={member.shortDescriptionGer}
            subject={member.subject}
            subjectGer={member.subjectGer}
          />
        ))}
      </div>

      <div className={styles.formWrapper}>
        <h2>Add Event</h2>
        <form onSubmit={handleEventSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="datesFirstFieldEng">First Date Field (Eng)</label>
            <input
              type="text"
              id="datesFirstFieldEng"
              name="datesFirstFieldEng"
              value={eventData.datesFirstFieldEng}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="datesSecondFieldEng">Second Date Field (Eng)</label>
            <input
              type="text"
              id="datesSecondFieldEng"
              name="datesSecondFieldEng"
              value={eventData.datesSecondFieldEng}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="timeFirstFieldEng">First Time Field (Eng)</label>
            <input
              type="text"
              id="timeFirstFieldEng"
              name="timeFirstFieldEng"
              value={eventData.timeFirstFieldEng}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="timeSecondFieldEng">Second Time Field (Eng)</label>
            <input
              type="text"
              id="timeSecondFieldEng"
              name="timeSecondFieldEng"
              value={eventData.timeSecondFieldEng}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="addressTextEng">Address Text (Eng)</label>
            <input
              type="text"
              id="addressTextEng"
              name="addressTextEng"
              value={eventData.addressTextEng}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="descriptionEng">Description (Eng)</label>
            <input
              type="text"
              id="descriptionEng"
              name="descriptionEng"
              value={eventData.descriptionEng}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="pdfEng">PDF (Eng)</label>
            <div className={styles.fileInputWrapper}>
              <label htmlFor="pdfEng" className={styles.fileInputLabel}>
                Choose File
              </label>
              <input
                type="file"
                id="pdfEng"
                name="pdfEng"
                className={styles.fileInput}
                onChange={(e) => handleEventFileChange(e, "pdfEng")}
              />
              {previewPdfEng && (
                <p style={{ color: "#fff" }}>{previewPdfEng}</p>
              )}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="datesFirstFieldGer">First Date Field (Ger)</label>
            <input
              type="text"
              id="datesFirstFieldGer"
              name="datesFirstFieldGer"
              value={eventData.datesFirstFieldGer}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="datesSecondFieldGer">Second Date Field (Ger)</label>
            <input
              type="text"
              id="datesSecondFieldGer"
              name="datesSecondFieldGer"
              value={eventData.datesSecondFieldGer}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="timeFirstFieldGer">First Time Field (Ger)</label>
            <input
              type="text"
              id="timeFirstFieldGer"
              name="timeFirstFieldGer"
              value={eventData.timeFirstFieldGer}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="timeSecondFieldGer">Second Time Field (Ger)</label>
            <input
              type="text"
              id="timeSecondFieldGer"
              name="timeSecondFieldGer"
              value={eventData.timeSecondFieldGer}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="addressTextGer">Address Text (Ger)</label>
            <input
              type="text"
              id="addressTextGer"
              name="addressTextGer"
              value={eventData.addressTextGer}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="descriptionGer">Description (Ger)</label>
            <input
              type="text"
              id="descriptionGer"
              name="descriptionGer"
              value={eventData.descriptionGer}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="pdfGer">PDF (Ger)</label>
            <div className={styles.fileInputWrapper}>
              <label htmlFor="pdfGer" className={styles.fileInputLabel}>
                Choose File
              </label>
              <input
                type="file"
                id="pdfGer"
                name="pdfGer"
                className={styles.fileInput}
                onChange={(e) => handleEventFileChange(e, "pdfGer")}
              />
              {previewPdfGer && (
                <p style={{ color: "#fff" }}>{previewPdfGer}</p>
              )}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="bgImage">Background Image</label>
            <div className={styles.fileInputWrapper}>
              <label htmlFor="bgImage" className={styles.fileInputLabel}>
                Choose File
              </label>
              <input
                type="file"
                id="bgImage"
                name="bgImage"
                className={styles.fileInput}
                onChange={(e) => handleEventFileChange(e, "bgImage")}
              />
              {previewEventImage && (
                <img
                  src={previewEventImage}
                  alt="Preview"
                  className={styles.previewImage}
                />
              )}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="addressLink">Address Link</label>
            <input
              type="text"
              id="addressLink"
              name="addressLink"
              value={eventData.addressLink}
              onChange={handleEventChange}
            />
          </div>
          <button type="submit" style={{ marginTop: "1rem" }}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.eventList}>
        {events.map((event, index) => (
          <Event
            key={index}
            datesFirstFieldEng={event.datesFirstFieldEng}
            datesSecondFieldEng={event.datesSecondFieldEng}
            timeFirstFieldEng={event.timeFirstFieldEng}
            timeSecondFieldEng={event.timeSecondFieldEng}
            addressTextEng={event.addressTextEng}
            descriptionEng={event.descriptionEng}
            pdfEng={event.pdfEng}
            datesFirstFieldGer={event.datesFirstFieldGer}
            datesSecondFieldGer={event.datesSecondFieldGer}
            timeFirstFieldGer={event.timeFirstFieldGer}
            timeSecondFieldGer={event.timeSecondFieldGer}
            addressTextGer={event.addressTextGer}
            descriptionGer={event.descriptionGer}
            pdfGer={event.pdfGer}
            bgImage={event.bgImage}
            addressLink={event.addressLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Panel;
