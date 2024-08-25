import React, { useState } from "react";
import styles from "./registerForm.module.scss";
import axios from "axios";

const RegisterForm = ({ onClose, selectedType, regObj }) => {
  const [step, setStep] = useState(1);
  const [disableSubmit, setDisableSubmit] = useState(false);

  const [formData, setFormData] = useState({
    type: selectedType,
    name: "",
    email: "",
    phone: "",
    shortDescription: "",
    subject: "",
    image: null,
    interests: [],
    acceptedTerms: false,
  });

  const [previewImage, setPreviewImage] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const typeOptions = [
    { value: "C1", label: regObj.institution },
    { value: "C2", label: regObj.organization },
    { value: "C3", label: regObj.partner },
    { value: "CM1", label: regObj.individual },
    { value: "CM2", label: regObj.trainer },
  ];

  const interestOptions = [
    {
      value: "Self Reflection",
      label: regObj.selfReflection,
      imgPath: "/interests/selfReflection.png",
    },
    {
      value: "Connections",
      label: regObj.conn,
      imgPath: "/interests/selfReflection.png",
    },
    {
      value: "Self Growth",
      label: regObj.selfGrowth,
      imgPath: "/interests/selfReflection.png",
    },
    {
      value: "Volonterism",
      label: regObj.volonterism,
      imgPath: "/interests/selfReflection.png",
    },
    {
      value: "Seeking Help",
      label: regObj.seekingHelp,
      imgPath: "/interests/selfReflection.png",
    },
    {
      value: "Breaking Isolation",
      label: regObj.breakingIso,
      imgPath: "/interests/selfReflection.png",
    },
    {
      value: "Research",
      label: regObj.research,
      imgPath: "/interests/selfReflection.png",
    },
    {
      value: "Sharing Experience",
      label: regObj.sharingExp,
      imgPath: "/interests/selfReflection.png",
    },
  ];

  const handleNextStep = () => {
    if (step === 2) {
      if (
        formData.name === "" ||
        formData.email === "" ||
        formData.phone === "" ||
        formData.shortDescription === "" ||
        formData.subject === "" ||
        formData.image === null ||
        formData.acceptedTerms === false
      ) {
        setErrorMsg(regObj.reqFields);
        return;
      }
    }
    if (step === 3) {
      if (formData.interests.length === 0) {
        setErrorMsg(regObj.oneInterest);
        return;
      }
    }
    setErrorMsg("");
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setErrorMsg("");
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setPreviewImage(true);
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, interests: [...formData.interests, value] });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(
          (interest) => interest.value !== value
        ),
      });
    }
  };

  const handleTermsChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setFormData({ ...formData, acceptedTerms: true });
    } else {
      setFormData({
        ...formData,
        acceptedTerms: false,
      });
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();

    data.append("type", formData.type);
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("shortDescription", formData.shortDescription);
    data.append("subject", formData.subject);

    if (formData.image) {
      data.append("image", formData.image);
    }
    setDisableSubmit(true);

    await axios.post("http://localhost:5000/api/community/join-us", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setDisableSubmit(false);

    setFormData({
      type: "C1",
      name: "",
      email: "",
      phone: "",
      shortDescription: "",
      subject: "",
      image: null,
      interests: [],
      acceptedTerms: false,
    });

    setPreviewImage(false);
    handleNextStep(); // Move to congratulations step
  };

  const handleTypeSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      type: value,
    }));
    setDropdownOpen(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={() => {
            setStep(1);
            onClose();
          }}
        >
          &times;
        </button>

        {step === 1 && (
          <div className={styles.step}>
            <h2>{regObj.selectRType}</h2>
            <button
              className={styles.selectBtn}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>
                {formData.type
                  ? typeOptions.find((option) => option.value === formData.type)
                      ?.label
                  : "Select Type"}
              </span>

              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: dropdownOpen ? "rotate(180deg)" : "none" }}
              >
                <path
                  d="M16.2535 8.21606C16.6663 7.80171 16.6663 7.13163 16.2535 6.71727C15.8388 6.30089 15.1647 6.30058 14.7495 6.7166L9.5625 11.9147L9.5625 1.0625C9.5625 0.475697 9.0868 0 8.5 0C7.9132 0 7.4375 0.475697 7.4375 1.0625L7.4375 11.9147L2.26573 6.71331C1.84825 6.29345 1.16894 6.29314 0.751085 6.71264C0.335797 7.12955 0.335797 7.80378 0.751085 8.2207L7.08302 14.5775C7.8647 15.3622 9.1353 15.3622 9.91698 14.5775L16.2535 8.21606Z"
                  fill="white"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className={styles.dropdown}>
                {typeOptions.map((option) => (
                  <div
                    key={option.value}
                    className={styles.dropdownItem}
                    onClick={() => handleTypeSelect(option.value)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
            <div className={styles.buttonGroup}>
              <button onClick={handleNextStep} disabled={!formData.type}>
                {regObj.nextStep}{" "}
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.71606 0.746465C8.30171 0.333732 7.63162 0.333732 7.21727 0.746465C6.80088 1.16123 6.80058 1.83532 7.2166 2.25046L12.4147 7.4375L1.5625 7.4375C0.975697 7.4375 0.5 7.9132 0.5 8.5C0.5 9.0868 0.975697 9.5625 1.5625 9.5625L12.4147 9.5625L7.21331 14.7343C6.79345 15.1517 6.79314 15.8311 7.21264 16.2489C7.62955 16.6642 8.30378 16.6642 8.7207 16.2489L15.0775 9.91698C15.8622 9.1353 15.8622 7.8647 15.0775 7.08302L8.71606 0.746465Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.step}>
            <h2>{regObj.personalInfo}</h2>
            <div className={styles.top}>
              <div className={styles.fileInputWrapper}>
                <label htmlFor="profileImage" className={styles.fileInputLabel}>
                  {previewImage ? (
                    <img
                      className={styles.previewImage}
                      src={URL.createObjectURL(formData.image)}
                      alt="Uploaded Preview"
                    />
                  ) : (
                    <div>
                      <svg
                        width="56"
                        height="57"
                        viewBox="0 0 56 57"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.43154 56.6669C3.95076 56.6669 2.68312 56.1397 1.62862 55.0852C0.574124 54.0308 0.046875 52.7631 0.046875 51.2824V8.7182C0.046875 7.23742 0.574124 5.96981 1.62862 4.91536C2.68312 3.86086 3.95076 3.33361 5.43154 3.33361H31.7135C32.1858 3.33361 32.5816 3.49356 32.901 3.81345C33.2205 4.13328 33.3802 4.52964 33.3802 5.00253C33.3802 5.47536 33.2205 5.87097 32.901 6.18936C32.5816 6.50775 32.1858 6.66695 31.7135 6.66695H5.43154C4.83326 6.66695 4.34182 6.85925 3.95721 7.24386C3.57254 7.62847 3.38021 8.11992 3.38021 8.7182V51.2824C3.38021 51.8806 3.57254 52.3721 3.95721 52.7567C4.34182 53.1413 4.83326 53.3336 5.43154 53.3336H47.9956C48.5939 53.3336 49.0854 53.1413 49.47 52.7567C49.8546 52.3721 50.0469 51.8806 50.0469 51.2824V25.0003C50.0469 24.5281 50.2068 24.1322 50.5267 23.8128C50.8466 23.4933 51.243 23.3336 51.7159 23.3336C52.1887 23.3336 52.5843 23.4933 52.9027 23.8128C53.2211 24.1322 53.3803 24.5281 53.3803 25.0003V51.2824C53.3803 52.7631 52.853 54.0308 51.7985 55.0852C50.744 56.1397 49.4764 56.6669 47.9956 56.6669H5.43154ZM45.9444 10.7695H40.9444C40.4722 10.7695 40.0763 10.6096 39.7569 10.2897C39.4374 9.96981 39.2777 9.57344 39.2777 9.10061C39.2777 8.62772 39.4374 8.23211 39.7569 7.91378C40.0763 7.59539 40.4722 7.4362 40.9444 7.4362H45.9444V2.4362C45.9444 1.96398 46.1043 1.56814 46.4241 1.2487C46.744 0.929254 47.1404 0.769531 47.6133 0.769531C48.0861 0.769531 48.4817 0.929254 48.8001 1.2487C49.1185 1.56814 49.2777 1.96398 49.2777 2.4362V7.4362H54.2777C54.7499 7.4362 55.1458 7.59614 55.4652 7.91603C55.7847 8.23586 55.9444 8.63222 55.9444 9.10511C55.9444 9.57795 55.7847 9.97356 55.4652 10.2919C55.1458 10.6103 54.7499 10.7695 54.2777 10.7695H49.2777V15.7695C49.2777 16.2418 49.1178 16.6376 48.7979 16.957C48.478 17.2765 48.0816 17.4362 47.6088 17.4362C47.1359 17.4362 46.7403 17.2765 46.4219 16.957C46.1035 16.6376 45.9444 16.2418 45.9444 15.7695V10.7695ZM24.0854 43.4618L19.329 37.7118C19.0383 37.3956 18.6901 37.2374 18.2841 37.2374C17.8781 37.2374 17.5298 37.4169 17.2392 37.7759L13.393 42.8464C13.034 43.3165 12.9838 43.793 13.2424 44.2759C13.5009 44.7588 13.8888 45.0003 14.4059 45.0003H39.5341C40.0512 45.0003 40.439 44.7588 40.6975 44.2759C40.9561 43.793 40.9273 43.3165 40.611 42.8464L33.8803 33.8015C33.5897 33.4426 33.2307 33.2631 32.8034 33.2631C32.376 33.2631 32.0154 33.4481 31.7217 33.8181L24.0854 43.4618Z"
                          fill="#C4D0D6"
                        />
                      </svg>
                      <p>{regObj.addImg} *</p>
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  className={styles.fileInput}
                  onChange={(e) => handleImageUpload(e, "profileImage")}
                />
              </div>
              <div className={styles.topRight}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">{regObj.name}*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.rowSecond}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">{regObj.email}*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="phone">{regObj.phone}*</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      // placeholder="(+381) 653207856"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.inputGroup}>
                <label htmlFor="shortDescription">{regObj.shortDesc}*</label>
                <textarea
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="subject">{regObj.subject}*</label>
                <textarea
                  id="subject"
                  name="subject"
                  className={styles.subject}
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className={styles.inputGroup}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1rem",
                }}
              >
                <label
                  htmlFor="acceptedTerms"
                  style={{ position: "initial", fontSize: "1rem" }}
                >
                  {regObj.acceptTerms}*
                </label>
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  id="acceptedTerms"
                  onChange={handleTermsChange}
                  checked={formData.acceptedTerms}
                />
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button onClick={handlePrevStep} className={styles.prevStep}>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.28394 0.746465C7.69829 0.333732 8.36838 0.333732 8.78273 0.746465C9.19912 1.16123 9.19942 1.83532 8.7834 2.25046L3.58533 7.4375L14.4375 7.4375C15.0243 7.4375 15.5 7.9132 15.5 8.5C15.5 9.0868 15.0243 9.5625 14.4375 9.5625L3.58533 9.5625L8.78669 14.7343C9.20655 15.1517 9.20686 15.8311 8.78736 16.2489C8.37045 16.6642 7.69622 16.6642 7.2793 16.2489L0.922536 9.91698C0.137794 9.1353 0.137793 7.8647 0.922535 7.08302L7.28394 0.746465Z"
                    fill="#366951"
                  />
                </svg>
                {regObj.prevStep}
              </button>
              <button onClick={handleNextStep}>
                {regObj.nextStep}{" "}
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.71606 0.746465C8.30171 0.333732 7.63162 0.333732 7.21727 0.746465C6.80088 1.16123 6.80058 1.83532 7.2166 2.25046L12.4147 7.4375L1.5625 7.4375C0.975697 7.4375 0.5 7.9132 0.5 8.5C0.5 9.0868 0.975697 9.5625 1.5625 9.5625L12.4147 9.5625L7.21331 14.7343C6.79345 15.1517 6.79314 15.8311 7.21264 16.2489C7.62955 16.6642 8.30378 16.6642 8.7207 16.2489L15.0775 9.91698C15.8622 9.1353 15.8622 7.8647 15.0775 7.08302L8.71606 0.746465Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.step}>
            <h2>{regObj.interests}</h2>
            <div className={styles.interestsList}>
              {interestOptions.map((interest) => (
                <label key={interest.value} className={styles.interestWrapper}>
                  <img
                    src={interest.imgPath}
                    alt={interest.value}
                    className={styles.interestImg}
                  />
                  <input
                    type="checkbox"
                    value={interest.value}
                    checked={formData.interests.includes(interest.value)}
                    onChange={handleInterestChange}
                  />
                  {interest.label}
                </label>
              ))}
            </div>
            <div className={styles.buttonGroup}>
              <button onClick={handlePrevStep} className={styles.prevStep}>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.28394 0.746465C7.69829 0.333732 8.36838 0.333732 8.78273 0.746465C9.19912 1.16123 9.19942 1.83532 8.7834 2.25046L3.58533 7.4375L14.4375 7.4375C15.0243 7.4375 15.5 7.9132 15.5 8.5C15.5 9.0868 15.0243 9.5625 14.4375 9.5625L3.58533 9.5625L8.78669 14.7343C9.20655 15.1517 9.20686 15.8311 8.78736 16.2489C8.37045 16.6642 7.69622 16.6642 7.2793 16.2489L0.922536 9.91698C0.137794 9.1353 0.137793 7.8647 0.922535 7.08302L7.28394 0.746465Z"
                    fill="#366951"
                  />
                </svg>
                {regObj.prevStep}
              </button>
              <button onClick={handleNextStep}>
                {regObj.nextStep}{" "}
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.71606 0.746465C8.30171 0.333732 7.63162 0.333732 7.21727 0.746465C6.80088 1.16123 6.80058 1.83532 7.2166 2.25046L12.4147 7.4375L1.5625 7.4375C0.975697 7.4375 0.5 7.9132 0.5 8.5C0.5 9.0868 0.975697 9.5625 1.5625 9.5625L12.4147 9.5625L7.21331 14.7343C6.79345 15.1517 6.79314 15.8311 7.21264 16.2489C7.62955 16.6642 8.30378 16.6642 8.7207 16.2489L15.0775 9.91698C15.8622 9.1353 15.8622 7.8647 15.0775 7.08302L8.71606 0.746465Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className={`${styles.step} ${styles.preview}`}>
            <div className={styles.top}>
              <div className={styles.fileInputWrapper}>
                <label htmlFor="profileImage" className={styles.fileInputLabel}>
                  {previewImage ? (
                    <img
                      className={styles.previewImage}
                      src={URL.createObjectURL(formData.image)}
                      alt="Uploaded Preview"
                    />
                  ) : (
                    <div>
                      <svg
                        width="56"
                        height="57"
                        viewBox="0 0 56 57"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.43154 56.6669C3.95076 56.6669 2.68312 56.1397 1.62862 55.0852C0.574124 54.0308 0.046875 52.7631 0.046875 51.2824V8.7182C0.046875 7.23742 0.574124 5.96981 1.62862 4.91536C2.68312 3.86086 3.95076 3.33361 5.43154 3.33361H31.7135C32.1858 3.33361 32.5816 3.49356 32.901 3.81345C33.2205 4.13328 33.3802 4.52964 33.3802 5.00253C33.3802 5.47536 33.2205 5.87097 32.901 6.18936C32.5816 6.50775 32.1858 6.66695 31.7135 6.66695H5.43154C4.83326 6.66695 4.34182 6.85925 3.95721 7.24386C3.57254 7.62847 3.38021 8.11992 3.38021 8.7182V51.2824C3.38021 51.8806 3.57254 52.3721 3.95721 52.7567C4.34182 53.1413 4.83326 53.3336 5.43154 53.3336H47.9956C48.5939 53.3336 49.0854 53.1413 49.47 52.7567C49.8546 52.3721 50.0469 51.8806 50.0469 51.2824V25.0003C50.0469 24.5281 50.2068 24.1322 50.5267 23.8128C50.8466 23.4933 51.243 23.3336 51.7159 23.3336C52.1887 23.3336 52.5843 23.4933 52.9027 23.8128C53.2211 24.1322 53.3803 24.5281 53.3803 25.0003V51.2824C53.3803 52.7631 52.853 54.0308 51.7985 55.0852C50.744 56.1397 49.4764 56.6669 47.9956 56.6669H5.43154ZM45.9444 10.7695H40.9444C40.4722 10.7695 40.0763 10.6096 39.7569 10.2897C39.4374 9.96981 39.2777 9.57344 39.2777 9.10061C39.2777 8.62772 39.4374 8.23211 39.7569 7.91378C40.0763 7.59539 40.4722 7.4362 40.9444 7.4362H45.9444V2.4362C45.9444 1.96398 46.1043 1.56814 46.4241 1.2487C46.744 0.929254 47.1404 0.769531 47.6133 0.769531C48.0861 0.769531 48.4817 0.929254 48.8001 1.2487C49.1185 1.56814 49.2777 1.96398 49.2777 2.4362V7.4362H54.2777C54.7499 7.4362 55.1458 7.59614 55.4652 7.91603C55.7847 8.23586 55.9444 8.63222 55.9444 9.10511C55.9444 9.57795 55.7847 9.97356 55.4652 10.2919C55.1458 10.6103 54.7499 10.7695 54.2777 10.7695H49.2777V15.7695C49.2777 16.2418 49.1178 16.6376 48.7979 16.957C48.478 17.2765 48.0816 17.4362 47.6088 17.4362C47.1359 17.4362 46.7403 17.2765 46.4219 16.957C46.1035 16.6376 45.9444 16.2418 45.9444 15.7695V10.7695ZM24.0854 43.4618L19.329 37.7118C19.0383 37.3956 18.6901 37.2374 18.2841 37.2374C17.8781 37.2374 17.5298 37.4169 17.2392 37.7759L13.393 42.8464C13.034 43.3165 12.9838 43.793 13.2424 44.2759C13.5009 44.7588 13.8888 45.0003 14.4059 45.0003H39.5341C40.0512 45.0003 40.439 44.7588 40.6975 44.2759C40.9561 43.793 40.9273 43.3165 40.611 42.8464L33.8803 33.8015C33.5897 33.4426 33.2307 33.2631 32.8034 33.2631C32.376 33.2631 32.0154 33.4481 31.7217 33.8181L24.0854 43.4618Z"
                          fill="#C4D0D6"
                        />
                      </svg>
                    </div>
                  )}
                </label>
              </div>
              <div className={styles.topRight}>
                <div className={styles.row}>
                  <div className={styles.column}>
                    <h3>{formData.name}</h3>
                    <h4>{formData.email}</h4>
                    <h4>{formData.phone}</h4>
                    <div className={styles.interests}>
                      {formData.interests.map((interest, index) => {
                        const matchingInterest = interestOptions.find(
                          (option) => option.value === interest
                        );
                        return (
                          matchingInterest && (
                            <div key={index} className={styles.interestLabel}>
                              {matchingInterest.label}
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </div>
                <p>{formData.shortDescription}</p>
              </div>
            </div>
            <div className={styles.bottom}>
              <p>{formData.subject}</p>
            </div>
            <div className={styles.buttonGroup}>
              <button onClick={handlePrevStep} className={styles.prevStep}>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.28394 0.746465C7.69829 0.333732 8.36838 0.333732 8.78273 0.746465C9.19912 1.16123 9.19942 1.83532 8.7834 2.25046L3.58533 7.4375L14.4375 7.4375C15.0243 7.4375 15.5 7.9132 15.5 8.5C15.5 9.0868 15.0243 9.5625 14.4375 9.5625L3.58533 9.5625L8.78669 14.7343C9.20655 15.1517 9.20686 15.8311 8.78736 16.2489C8.37045 16.6642 7.69622 16.6642 7.2793 16.2489L0.922536 9.91698C0.137794 9.1353 0.137793 7.8647 0.922535 7.08302L7.28394 0.746465Z"
                    fill="#366951"
                  />
                </svg>
                {regObj.prevStep}
              </button>
              <button disabled={disableSubmit} onClick={handleSubmit}>
                {regObj.submit}{" "}
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.71606 0.746465C8.30171 0.333732 7.63162 0.333732 7.21727 0.746465C6.80088 1.16123 6.80058 1.83532 7.2166 2.25046L12.4147 7.4375L1.5625 7.4375C0.975697 7.4375 0.5 7.9132 0.5 8.5C0.5 9.0868 0.975697 9.5625 1.5625 9.5625L12.4147 9.5625L7.21331 14.7343C6.79345 15.1517 6.79314 15.8311 7.21264 16.2489C7.62955 16.6642 8.30378 16.6642 8.7207 16.2489L15.0775 9.91698C15.8622 9.1353 15.8622 7.8647 15.0775 7.08302L8.71606 0.746465Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className={styles.step}>
            <h2>{regObj.congratulations}</h2>
            <p>{regObj.congratsText}</p>
            <p style={{ margin: "1rem 0" }}>{regObj.congratsSecond}</p>
            <p>{regObj.congratsThird}</p>
            <div className={styles.buttonGroup}>
              <button
                onClick={() => {
                  setStep(1);
                  onClose();
                }}
              >
                {regObj.close}{" "}
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.71606 0.746465C8.30171 0.333732 7.63162 0.333732 7.21727 0.746465C6.80088 1.16123 6.80058 1.83532 7.2166 2.25046L12.4147 7.4375L1.5625 7.4375C0.975697 7.4375 0.5 7.9132 0.5 8.5C0.5 9.0868 0.975697 9.5625 1.5625 9.5625L12.4147 9.5625L7.21331 14.7343C6.79345 15.1517 6.79314 15.8311 7.21264 16.2489C7.62955 16.6642 8.30378 16.6642 8.7207 16.2489L15.0775 9.91698C15.8622 9.1353 15.8622 7.8647 15.0775 7.08302L8.71606 0.746465Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {step !== 5 && (
          <div className={styles.numbers}>
            <div className={`${styles.number} ${styles.active}`}>1</div>
            <div
              className={`${styles.line} ${step > 1 && styles.active}`}
            ></div>
            <div className={`${styles.number} ${step > 1 && styles.active}`}>
              2
            </div>
            <div
              className={`${styles.line} ${step > 2 && styles.active}`}
            ></div>
            <div className={`${styles.number} ${step > 2 && styles.active}`}>
              3
            </div>
            <div
              className={`${styles.line} ${step > 3 && styles.active}`}
            ></div>
            <div className={`${styles.number} ${step > 3 && styles.active}`}>
              4
            </div>
          </div>
        )}
        <p className={styles.errMsg}>{errorMsg}</p>
      </div>
    </div>
  );
};

export default RegisterForm;
