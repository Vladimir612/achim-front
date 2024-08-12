"use client";

import React, { useState } from "react";
import styles from "./communityList.module.scss";
import Card from "./Card";

const CommunityList = () => {
  const [communities, setCommunities] = useState([]);
  const [searchWord, setSearchWord] = useState("");

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
            placeholder="Search"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </div>
        <div className={styles.cards}>
          <FilterCard
            id="1"
            iconPath="/communityIcons/organizations.svg"
            name="All"
            number="12"
          />
          <FilterCard
            id="1"
            iconPath="/communityIcons/organizations.svg"
            name="All"
            number="12"
          />
          <FilterCard
            id="1"
            iconPath="/communityIcons/organizations.svg"
            name="All"
            number="12"
          />
          <FilterCard
            id="1"
            iconPath="/communityIcons/organizations.svg"
            name="All"
            number="12"
          />
          <FilterCard
            id="1"
            iconPath="/communityIcons/organizations.svg"
            name="All"
            number="12"
          />
        </div>
      </div>
      <div className={styles.list}>
        <Card
          id="1"
          imagePath="/test.png"
          name="John Doe"
          text="In all my activities and manifestations, I am guided by principles that provide me with orientation. My view of humanity is characterized by comprehensive and loving acceptance of what is and is orien."
          website="www.idiaspora.ch"
          email="info@idiaspora.com"
          number="+21 979 123 239 12"
          communityType="partners"
        />
        <Card
          id="2"
          imagePath="/test.png"
          name="John Doe"
          text="In all my activities and manifestations, I am guided by principles that provide me with orientation. My view of humanity is characterized by comprehensive and loving acceptance of what is and is orien."
          website="www.idiaspora.ch"
          email="info@idiaspora.com"
          number="+21 979 123 239 12"
          communityType="partners"
        />
        <Card
          id="3"
          imagePath="/test.png"
          name="John Doe"
          text="In all my activities and manifestations, I am guided by principles that provide me with orientation. My view of humanity is characterized by comprehensive and loving acceptance of what is and is orien."
          website="www.idiaspora.ch"
          email="info@idiaspora.com"
          number="+21 979 123 239 12"
          communityType="partners"
        />
        <Card
          id="4"
          imagePath="/test.png"
          name="John Doe"
          text="In all my activities and manifestations, I am guided by principles that provide me with orientation. My view of humanity is characterized by comprehensive and loving acceptance of what is and is orien."
          website="www.idiaspora.ch"
          email="info@idiaspora.com"
          number="+21 979 123 239 12"
          communityType="partners"
        />
        <Card
          id="5"
          imagePath="/test.png"
          name="John Doe"
          text="In all my activities and manifestations, I am guided by principles that provide me with orientation. My view of humanity is characterized by comprehensive and loving acceptance of what is and is orien."
          website="www.idiaspora.ch"
          email="info@idiaspora.com"
          number="+21 979 123 239 12"
          communityType="partners"
        />
        <Card
          id="6"
          imagePath="/test.png"
          name="John Doe"
          text="In all my activities and manifestations, I am guided by principles that provide me with orientation. My view of humanity is characterized by comprehensive and loving acceptance of what is and is orien."
          website="www.idiaspora.ch"
          email="info@idiaspora.com"
          number="+21 979 123 239 12"
          communityType="partners"
        />
      </div>
    </div>
  );
};

const FilterCard = ({ id, iconPath, name, number }) => {
  return (
    <button className={styles.filterCard} id={id}>
      <img src={iconPath} alt={name} width={35} />
      <p>{number}</p>
      <h4>{name}</h4>
    </button>
  );
};

export default CommunityList;
