import React from "react";
import styles from "./uvpList.module.scss";
import UvpSingle from "./UvpSingle";

const UvpList = () => {
  return (
    <div className={styles.uvpList}>
      <UvpSingle
        number="01"
        subHeading="PURPOSE"
        title="Why do I exist and what am I?"
        par="Awareness of trauma and the nervous system and the creation of safe
          spaces is the key to collective and individual healing and
          transformation. I am a think, feel and do tank who imagines a
          trauma-informed and nervous system-oriented social transformation,
          tries out the next steps and creates the necessary offers to accompany
          people from all areas of society in the transformation."
        imagePath={"/uvpFirst.png"}
      />
      <UvpSingle
        number="02"
        subHeading="APPROACH"
        title="What are my basic principles?"
        par="In all my activities and manifestations I am guided by basic 
        principles that give me orientation. My view of humanity is characterized
        by an all-encompassing and loving acceptance of what is and is based on the
        life's work of Martinus Thomsen. 
        The forum swings like a pendulum between the pillar of “going outward” in the
        form of passing on knowledge to society and the pillar of “going inward” in the 
        form of creating safe spaces in which we look within ourselves and perceive our
        shadows and integrate, back and forth."
        imagePath={"/uvpSecond.png"}
      />
      <UvpSingle
        number="03"
        subHeading="PURPOSE"
        title="My view of humanity"
        par="...is characterized by the fact that we all have animal and human parts,
        as well as childish and adult parts of consciousness, within us. Our animal
        structures are focused on competition, power, possession and self-interest,
        whereas our human parts want to serve, can share, are compassionate and prefer
        to give rather than receive. "
        imagePath={"/uvpThird.png"}
      />
      <UvpSingle
        number="04"
        subHeading="NETWORK"
        title="Building a global network"
        par="The forum is a holistic transformation idea that interlinks all necessary levels of impact and actors.
        The forum is a global knowledge and networking platform that, like a prism, brings together actors from civil society,
        the health sector, education, politics and business and promotes joint, sustainably effective action."
        imagePath={"/uvpFourth.png"}
      />
      <UvpSingle
        number="05"
        subHeading="SERVICES"
        title="What do I offer?"
        par="I'm setting up a pool of trainers, organizing events, building networks, offering online and offline further training,
        nervous system-oriented advice and support, and setting up an attractive interactive self-study area (we're currently doing
        almost nothing?)"
        imagePath={"/uvpFifth.png"}
      />
    </div>
  );
};

export default UvpList;
