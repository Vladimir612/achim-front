"use client";

import React, { useEffect, useState } from "react";
import styles from "./panel.module.scss";
import { useRouter } from "next/navigation";
import User from "./User";
import Event from "./Event";
import { useLocale } from "next-intl";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Panel = () => {
  const baseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;

  const [logout, setLogout] = useState(false);
  const locale = useLocale();

  const [errorMsgUser, setErrorMsgUser] = useState("");
  const [errorMsgEvent, setErrorMsgEvent] = useState("");
  const [user, setUser] = useState("");

  const [communityMembers, setCommunityMembers] = useState([]);

  const [events, setEvents] = useState([]);

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
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      router.push(`/${locale}/admin/login`);
      return;
    }

    const decodedToken = jwtDecode(token);
    setUser(decodedToken.userId);

    const fetchCommunityMembers = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/community/members`);
        setCommunityMembers(response.data);
      } catch (err) {
        console.log(
          err.response.data.error
            ? err.response.data.error
            : "Internal Server error"
        );
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/events`);
        setEvents(response.data);
      } catch (err) {
        console.log(
          err.response.data.error
            ? err.response.data.error
            : "Internal Server error"
        );
      }
    };

    if (typeof window !== "undefined") {
      fetchCommunityMembers();
      fetchEvents();
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

    if (file && file.size > 300 * 1024) {
      setErrorMsgUser("Profile image file size exceeds 300kB");
      return;
    }

    setCommunityMemberData({
      ...communityMemberData,
      profileImg: file,
    });

    setPreviewImage(URL.createObjectURL(file));
    setErrorMsgUser("");
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

  const handleCommunityMemberSubmit = async (e) => {
    e.preventDefault();

    const {
      type,
      email,
      name,
      phone,
      profileImg,
      interests,
      shortDescription,
      shortDescriptionGer,
      subject,
      subjectGer,
    } = communityMemberData;

    if (
      !type ||
      !email ||
      !name ||
      !phone ||
      !profileImg ||
      interests.length === 0 ||
      !shortDescription ||
      !shortDescriptionGer ||
      !subject ||
      !subjectGer
    ) {
      setErrorMsgUser("Every field must be filled out.");
      return;
    }

    try {
      const token = localStorage.getItem("jwtToken");

      const interestStrings = communityMemberData.interests.map(
        (index) => interestOptions[index]
      );

      const updatedCommunityMemberData = {
        ...communityMemberData,
        interests: interestStrings,
      };

      const res = await axios.post(
        `${baseURL}/api/community/members`,
        updatedCommunityMemberData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        setCommunityMembers([...communityMembers, res.data]);
        setCommunityMemberData({
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
        setPreviewImage(null);
        setErrorMsgUser("");
      }
    } catch (err) {
      console.log(err.response);
      setErrorMsgUser(err.response.data.error || "Error on the server");
    }
  };

  const [eventData, setEventData] = useState({
    datesFirstFieldEng: "",
    datesSecondFieldEng: "",
    timeFirstFieldEng: "",
    timeSecondFieldEng: "",
    addressTextEng: "",
    titleEng: "",
    descriptionEng: "",
    pdfEngLink: "",
    datesFirstFieldGer: "",
    datesSecondFieldGer: "",
    timeFirstFieldGer: "",
    timeSecondFieldGer: "",
    addressTextGer: "",
    titleGer: "",
    descriptionGer: "",
    pdfGerLink: "",
    bgImage: null,
    addressLink: "",
  });

  const [previewEventImage, setPreviewEventImage] = useState(null);

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
    }
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();

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

    if (
      !datesFirstFieldEng ||
      !datesSecondFieldEng ||
      !timeFirstFieldEng ||
      !timeSecondFieldEng ||
      !addressTextEng ||
      !titleEng ||
      !descriptionEng ||
      !pdfEngLink ||
      !datesFirstFieldGer ||
      !datesSecondFieldGer ||
      !timeFirstFieldGer ||
      !timeSecondFieldGer ||
      !addressTextGer ||
      !titleGer ||
      !descriptionGer ||
      !pdfGerLink ||
      !bgImage ||
      !addressLink
    ) {
      setErrorMsgEvent("Every field must be filled out.");
      return;
    }

    try {
      const token = localStorage.getItem("jwtToken");

      const res = await axios.post(`${baseURL}/api/events`, eventData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        setEvents([...events, res.data]);
        setEventData({
          datesFirstFieldEng: "",
          datesSecondFieldEng: "",
          timeFirstFieldEng: "",
          timeSecondFieldEng: "",
          addressTextEng: "",
          titleEng: "",
          descriptionEng: "",
          pdfEngLink: "",
          datesFirstFieldGer: "",
          datesSecondFieldGer: "",
          timeFirstFieldGer: "",
          timeSecondFieldGer: "",
          addressTextGer: "",
          titleGer: "",
          descriptionGer: "",
          pdfGerLink: "",
          bgImage: null,
          addressLink: "",
        });
        setPreviewEventImage(null);
        setErrorMsgEvent("");
      }
    } catch (err) {
      console.log(err.response);
      setErrorMsgEvent(err.response.data.error || "Error on the server");
    }
  };

  return (
    <div className={styles.panel}>
      <div className={styles.banner}>
        <h1>Admin: {user}</h1>
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
          {errorMsgUser && <p style={{ color: "red" }}>{errorMsgUser}</p>}
        </form>
      </div>

      <div className={styles.userList}>
        {communityMembers.map((member) => (
          <User
            key={member._id}
            id={member._id}
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
            setCommunityMembers={setCommunityMembers}
            communityMembers={communityMembers}
          />
        ))}
      </div>

      <div className={styles.formWrapper}>
        <h2>Add Event</h2>
        <form onSubmit={handleEventSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="titleEng">Title (Eng)</label>
            <input
              type="text"
              id="titleEng"
              name="titleEng"
              value={eventData.titleEng}
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
            <label htmlFor="pdfEngLink">PDF (Eng) Link</label>
            <input
              type="text"
              id="pdfEngLink"
              name="pdfEngLink"
              value={eventData.pdfEngLink}
              onChange={handleEventChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="titleGer">Title (Ger)</label>
            <input
              type="text"
              id="titleGer"
              name="titleGer"
              value={eventData.titleGer}
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
            <label htmlFor="pdfGerLink">PDF (Ger) Link</label>
            <input
              type="text"
              id="pdfGerLink"
              name="pdfGerLink"
              value={eventData.pdfGerLink}
              onChange={handleEventChange}
            />
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
          {errorMsgEvent && <p style={{ color: "red" }}>{errorMsgEvent}</p>}
        </form>
      </div>
      <div className={styles.eventList}>
        {events.map((event) => (
          <Event
            key={event._id}
            id={event._id}
            datesFirstFieldEng={event.datesFirstFieldEng}
            datesSecondFieldEng={event.datesSecondFieldEng}
            timeFirstFieldEng={event.timeFirstFieldEng}
            timeSecondFieldEng={event.timeSecondFieldEng}
            addressTextEng={event.addressTextEng}
            titleEng={event.titleEng}
            descriptionEng={event.descriptionEng}
            pdfEngLink={event.pdfEngLink}
            datesFirstFieldGer={event.datesFirstFieldGer}
            datesSecondFieldGer={event.datesSecondFieldGer}
            timeFirstFieldGer={event.timeFirstFieldGer}
            timeSecondFieldGer={event.timeSecondFieldGer}
            addressTextGer={event.addressTextGer}
            titleGer={event.titleGer}
            descriptionGer={event.descriptionGer}
            pdfGerLink={event.pdfGerLink}
            bgImage={event.bgImage}
            addressLink={event.addressLink}
            setEvents={setEvents}
            eventList={events}
          />
        ))}
      </div>
    </div>
  );
};

export default Panel;
