import React from "react";
import styles from "./uvpList.module.scss";
import UvpSingle from "./UvpSingle";

const UvpList = ({ list, readMoreTxt }) => {
  return (
    <div className={styles.uvpList}>
      {list.map((item) => (
        <UvpSingle
          key={item.number}
          number={item.number}
          subHeading={item.subHeading}
          title={item.title}
          par={item.par}
          fullText={item.fullText}
          imagePath={item.imagePath}
          readMoreTxt={readMoreTxt}
          link={item.link}
          linkText={item.linkText}
        />
      ))}
    </div>
  );
};

export default UvpList;
