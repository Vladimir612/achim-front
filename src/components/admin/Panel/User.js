import React, { useState } from "react";
import styles from "./user.module.scss";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

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

const getTypeLabel = (type) => {
  const typeObj = typeOptions.find((option) => option.value === type);
  return typeObj ? typeObj.label : type;
};

const getInterestLabels = (interests) => {
  return interests.map((interest) =>
    typeof interest === "number" ? interestOptions[interest] : interest
  );
};

const User = ({
  id,
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
  setCommunityMembers,
  communityMembers,
}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
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
  });

  const baseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;
  const [newProfileImg, setNewProfileImg] = useState(profileImg);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.size > 300 * 1024) {
      setErrorMsg("File size exceeds 300kB");
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfileImg(reader.result);
        setFormData({
          ...formData,
          profileImg: file,
        });
        setUploadedImg(true);
      };
      reader.readAsDataURL(file);
    }

    setErrorMsg("");
  };

  const handleEdit = async () => {
    setErrorMsg("");
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
    } = formData;

    if (
      !type ||
      !email ||
      !name ||
      !phone ||
      interests.length === 0 ||
      !shortDescription ||
      !shortDescriptionGer ||
      !subject ||
      !subjectGer
    ) {
      setErrorMsg("Every field must be filled out.");
      return;
    }

    try {
      const token = localStorage.getItem("jwtToken");

      const interestStrings = formData.interests.map(
        (index) => interestOptions[index]
      );

      const updatedCommunityMemberData = {
        ...formData,
        interests: interestStrings,
        ...(uploadedImg && { profileImg: profileImg }),
      };

      const res = await axios.patch(
        `${baseURL}/api/community/members/${id}`,
        updatedCommunityMemberData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        setCommunityMembers(
          communityMembers.map((member) =>
            member._id === res.data._id ? res.data : member
          )
        );
        setErrorMsg("");
        setEditModalOpen(false);
      }
    } catch (err) {
      console.log(err);
      setErrorMsg(err.response.data.error || "Error on the server");
    }
  };

  const handleDelete = async () => {
    setErrorMsg("");
    try {
      const token = localStorage.getItem("jwtToken");

      const res = await axios.delete(`${baseURL}/api/community/members/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      if (res.status === 200) {
        setCommunityMembers(
          communityMembers.filter((member) => member._id !== id)
        );
        setErrorMsg("");
        setDeleteModalOpen(false);
      }
    } catch (err) {
      console.log(err);
      setErrorMsg(err.response?.data?.error || "Error on the server");
    }
  };

  return (
    <div className={styles.userCard}>
      <img
        src={profileImg}
        alt={`${name}'s profile`}
        className={styles.profileImg}
      />
      <div className={styles.userInfo}>
        <h3>{name}</h3>
        <p>
          <strong>Type:</strong> {getTypeLabel(type)}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Short Description:</strong> {shortDescription}
        </p>
        <p>
          <strong>Short Description (German):</strong> {shortDescriptionGer}
        </p>
        <p>
          <strong>Subject:</strong> {subject}
        </p>
        <p>
          <strong>Subject (German):</strong> {subjectGer}
        </p>
        <p>
          <strong>Interests:</strong> {getInterestLabels(interests).join(", ")}
        </p>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setErrorMsg("");
              setEditModalOpen(true);
            }}
          >
            Edit
          </button>
          <button onClick={() => setDeleteModalOpen(true)}>Delete</button>
        </div>
      </div>

      {isEditModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Edit User</h2>
            <form>
              <div className={styles.inputGroup}>
                <label htmlFor="type">Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
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
                <label htmlFor="profileImg">Profile Image</label>
                <input
                  type="file"
                  id="profileImg"
                  name="profileImg"
                  onChange={handleImageChange}
                />
              </div>
              {errorMsg && <p className={styles.error}>{errorMsg}</p>}
              {newProfileImg && (
                <div className={styles.imagePreview}>
                  <img src={newProfileImg} alt="Profile Preview" />
                </div>
              )}
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="shortDescription">Short Description</label>
                <textarea
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  className={inter.className}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="shortDescriptionGer">
                  Short Description (German)
                </label>
                <textarea
                  id="shortDescriptionGer"
                  name="shortDescriptionGer"
                  value={formData.shortDescriptionGer}
                  onChange={handleInputChange}
                  className={inter.className}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="subjectGer">Subject (German)</label>
                <input
                  type="text"
                  id="subjectGer"
                  name="subjectGer"
                  value={formData.subjectGer}
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
            <p>Do you really want to delete this user?</p>
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

export default User;
