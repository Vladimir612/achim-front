import React from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/principles/card/Card";
import FooterBanner from "../../components/footerBanner/FooterBanner";
import Footer from "../../components/footer/Footer";

const Principles = () => {
  return (
    <div>
      <Banner
        subHeading="OUR APPROACH"
        heading="Learn Our Principles"
        par="Discover a transformative space at the Forum, where we explore trauma, social justice, and societal transformation.  Dive in and explore the depths of human experience with compassion and courage."
        imagePath="/principlesBanner.png"
      />
      <div
        style={{
          background: "#0B1D26",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem 0",
        }}
      >
        <Card
          number="01"
          subHeading="BASIC PRINCIPLES"
          heading="The principle of the 2 pillars"
          text="The forum swings like a pendulum between the pillar of “going outward” in the form of passing on knowledge to society and the pillar of “going inward” in the form of creating safe spaces in which we look within ourselves and perceive our shadows and integrate, back and forth."
          imagePath="/principlesFirst.png"
        />
        <Card
          number="02"
          subHeading="BASIC PRINCIPLES"
          heading="Storytelling"
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
          imagePath="/principlesSecond.png"
        />
        <Card
          number="03"
          subHeading="BASIC PRINCIPLES"
          heading="Avoiding shame and maintaining self-image"
          text="...are powerful driving forces within ourselves that cause us to ignore the aspects of reality that draw our attention to our own inner pain and reflect our own incompleteness. To avoid shame and maintain our self-image, we create stories about ourselves and the world. In the forum we discover and question these stories. We are honest with ourselves and others and treat each other lovingly from the start as vulnerable and unfinished beings. We draw our strength from this honesty and transparency and meet the outside world on an equal footing."
          imagePath="/principlesThird.png"
        />
        <Card
          number="04"
          subHeading="BASIC PRINCIPLES"
          heading="Multiperspectivity"
          text="The central starting point is to focus on the perspective of those “affected” by the support systems and not to make the process of knowledge generation and transfer in a “white” educated middle class bubble. We are aware of the limitations of our own perspectives and try to integrate as many social perspectives as possible into the forum."
          imagePath="/principlesFourth.png"
        />
        <Card
          number="05"
          subHeading="BASIC PRINCIPLES"
          heading="The harmony principle"
          text="Controversial discussions and the emergence of intense feelings are warmly welcomed and are part of a healthy and lively energy body. Power struggles are not part of this healthy liveliness. Striving for power can and should be reflected in a safe space and transformed into growth. However, it is not possible to change the foundations of the forum along its journey. If there are internal breaks with the forum, there can and will be farewells and reunions. Anyone who cannot support the forum can take a different, own path for a while until their soul can reconnect with the forum again."
          imagePath="/principlesFifth.png"
        />
        <Card
          number="06"
          subHeading="BASIC PRINCIPLES"
          heading="The scaling and effectiveness principle"
          text="Everything the forum builds is designed to be as scalable and effective as possible. Knowledge about trauma should be fed into the systems at the nodes with the greatest reach. To this end, political and civil society structures are specifically involved. Local groups work within their sphere of influence, use the citizens' consultation hours of their representatives and local networking structures to promote centrally controlled campaigns. Working groups and political alliances emerge.
            In the accompanying training sessions, in addition to the cognitive level, the heart level and the cellular level are also addressed."
          imagePath="/principlesSixth.png"
        />
        <Card
          number="07"
          subHeading="BASIC PRINCIPLES"
          heading="The principle of transparent shadows"
          text="Our inner shadow parts are welcome. Instead of hiding them, we bring them to light and practice lovingly integrating them into our self-image. Non-transparent shadow parts are dangerous for the forum because they prevent trauma integration. We will often not meet our demands because this does not allow our development as individuals and as energy bodies. We make the discrepancy between expectations and reality transparent. We will also receive financial support generated by exploitative capitalist means. We also make the shadows of the resources made available to us transparent."
          imagePath="/principlesSeventh.png"
        />
        <Card
          number="08"
          subHeading="BASIC PRINCIPLES"
          heading="The principle of organic hierarchy"
          text="The forum presents itself to us in varying degrees of clarity. The more clearly someone can see and feel the forum, the more decision-making authority that person has. The forum is flexible and clear in its work. It will grow quickly. The slowness of grassroots democratic decision-making is not suitable for the forum in the first few years. The 2 pillar principle provides safe spaces for slowness, pause, feeling and healing."
          imagePath="/principlesEight.png"
        />
        <Card
          number="09"
          subHeading="BASIC PRINCIPLES"
          heading="The principle of listening"
          text="Every being can and should contribute to the forum according to their abilities and interests. Where does my soul and body feel in the right place. We listen within ourselves, into the universe and into life to hear what we are being called to do. This can create new fields of action. Inside and outside the forum."
          imagePath="/principlesNinth.png"
        />
        <Card
          number="10"
          subHeading="BASIC PRINCIPLES"
          heading="Spirituality"
          text="In the forum we practice connecting with our higher selves. Free from religious dogmas, we establish a spiritual practice that is absolutely voluntary and also pleasant for atheists"
          imagePath="/principlesTenth.png"
        />
        <Card
          number="11"
          subHeading="BASIC PRINCIPLES"
          heading="Regenerative work"
          text="We try to adapt the workplaces to the individual needs of the nervous system and to design the working conditions, including the salary structure, in a joint process."
          imagePath="/principlesEleventh.png"
        />
        <Card
          number="12"
          subHeading="BASIC PRINCIPLES"
          heading="Research space for social transformation"
          text="Our aim is to open up a research space for sustainable social action and new social structures. We see a need to contribute to change because we recognize that a nervous system-oriented and trauma-sensitive life and work is made more difficult by the current social economic and social system."
          imagePath="/principlesTwelfth.png"
        />
      </div>
      <FooterBanner
        subHeading="JOIN ME"
        heading="How can you join in?"
        par="There are many ways to help shape the forum. You can become active as a trainer, join or found a local group, you can help build the club, you can become part of the forum movement with your organization or support us with your ideas, your commitment or your money."
      />
      <Footer />
    </div>
  );
};

export default Principles;
