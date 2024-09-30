"use client";

import React, { useEffect, useState } from "react";
import styles from "./communityList.module.scss";
import Card from "./Card";
import axios from "axios";

const CommunityList = ({
  partners,
  search,
  organizations,
  individuals,
  trainers,
  institutions,
}) => {
  const typeOptions = [
    { value: "C1", label: "institution" },
    { value: "C2", label: "organization" },
    { value: "C3", label: "partner" },
    { value: "CM1", label: "individual" },
    { value: "CM2", label: "trainer" },
  ];

  const [numbers, setNumbers] = useState({
    C1: 0,
    C2: 0,
    C3: 0,
    CM1: 0,
    CM2: 0,
  });

  const [type, setType] = useState();
  const [communityMembers, setCommunityMembers] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const [shouldSearch, setShouldSearch] = useState(true);

  const [firstSearch, setFirstSearch] = useState(true);

  const baseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;

  useEffect(() => {
    const fetchCommunityMembers = async () => {
      try {
        if (shouldSearch) {
          let queryParams = "";
          if (type && searchWord)
            queryParams = `?type=${type}&searchWord=${searchWord}`;
          else if (type) queryParams = `?type=${type}`;
          else if (searchWord) queryParams = `?searchWord=${searchWord}`;

          const response = await axios.get(
            `${baseURL}/api/community/members${queryParams}`
          );

          if (firstSearch) {
            const countTypes = response.data.reduce(
              (acc, member) => {
                return {
                  ...acc,
                  [member.type]: (acc[member.type] || 0) + 1,
                };
              },
              { C1: 0, C2: 0, C3: 0, CM1: 0, CM2: 0 }
            );

            setNumbers(countTypes);
          }
          setFirstSearch(false);

          const membersWithLabels = response.data.map((member) => {
            const matchedOption = typeOptions.find(
              (option) => option.value === member.type
            );
            return {
              ...member,
              type: matchedOption ? matchedOption.label : member.type,
            };
          });

          setCommunityMembers(membersWithLabels);
          setShouldSearch(false);
        }
      } catch (error) {
        console.error("Failed to fetch community members:", error);
      }
    };

    fetchCommunityMembers();
  }, [shouldSearch]);

  return (
    <div className={styles.communityList}>
      <div className={styles.filter}>
        <div className={styles.input}>
          <label htmlFor="search">
            <img
              src="/communityIcons/search.svg"
              alt="search icon"
              width={24}
            />
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder={search}
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <button
            className={styles.searchBtn}
            onClick={() => setShouldSearch(true)}
          >
            {search}
          </button>
        </div>
        <div className={styles.cards}>
          <FilterCard
            id="C3"
            iconPath="/communityIcons/partners.svg"
            name={partners}
            number={numbers.C3}
            setShouldSearch={setShouldSearch}
            setType={setType}
            type={type}
          />
          <FilterCard
            id="C2"
            iconPath="/communityIcons/organizations.svg"
            name={organizations}
            number={numbers.C2}
            setShouldSearch={setShouldSearch}
            setType={setType}
            type={type}
          />
          <FilterCard
            id="CM1"
            iconPath="/communityIcons/individuals.svg"
            name={individuals}
            number={numbers.CM1}
            setShouldSearch={setShouldSearch}
            setType={setType}
            type={type}
          />
          <FilterCard
            id="CM2"
            iconPath="/communityIcons/trainers.svg"
            name={trainers}
            number={numbers.CM2}
            setShouldSearch={setShouldSearch}
            setType={setType}
            type={type}
          />
          <FilterCard
            id="C1"
            iconPath="/communityIcons/institutions.svg"
            name={institutions}
            number={numbers.C1}
            setShouldSearch={setShouldSearch}
            setType={setType}
            type={type}
          />
        </div>
      </div>
      <div className={styles.list}>
        {communityMembers.map((member) => {
          return (
            <Card
              key={member._id}
              id={member._id}
              imagePath={member.profileImg}
              name={member.name}
              text={member.shortDescription}
              textGer={member.shortDescriptionGer}
              email={member.email}
              number={member.phone}
              communityType={member.type}
              interests={member.interests}
              subject={member.subject}
              subjectGer={member.subjectGer}
            />
          );
        })}
      </div>
    </div>
  );
};

const FilterCard = ({
  id,
  iconPath,
  name,
  number,
  setShouldSearch,
  setType,
  type,
}) => {
  return (
    <button
      className={`${styles.filterCard} ${type === id ? styles.active : ""}`}
      onClick={() => {
        if (type === id) {
          setType(null);
          return;
        }
        setType(id);
        setShouldSearch(true);
      }}
    >
      <img src={iconPath} alt={name} width={35} />
      <p>{number}</p>
      <h4>{name}</h4>
    </button>
  );
};

export default CommunityList;
