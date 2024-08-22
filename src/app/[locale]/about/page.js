import React from "react";
import Banner from "@/components/banner/Banner";
import AboutSection from "@/components/about/aboutSection/AboutSection";
import Footer from "@/components/footer/Footer";
import FooterBanner from "@/components/footerBanner/FooterBanner";
import Nav from "@/components/nav/nav";
import { useTranslations } from "next-intl";

const about = () => {
  const tFooter = useTranslations("Footer");
  const tFooterBanner = useTranslations("FooterBanner");
  const tNav = useTranslations("Navigation");

  const footerHome = tFooter("links.home");
  const footerAbout = tFooter("links.about");
  const footerPrinciples = tFooter("links.principles");
  const footerServices = tFooter("links.services");
  const footerEvents = tFooter("links.events");
  const footerCommunity = tFooter("links.community");
  const footerContact = tFooter("links.contact");

  const footerTerms = tFooter("terms");
  const footerTermsFirst = tFooter("termsLinks.first");
  const footerTermsSecond = tFooter("termsLinks.second");
  const footerTermsThird = tFooter("termsLinks.third");
  const footerText = tFooter("text");
  const footerLinksHeading = tFooter("linksHeading");

  const navBtn = tNav("btn");

  return (
    <div>
      <Nav
        home={footerHome}
        about={footerAbout}
        principles={footerPrinciples}
        services={footerServices}
        events={footerEvents}
        community={footerCommunity}
        contact={footerContact}
        btn={navBtn}
      />
      <Banner
        subHeading="OUR LAYERS"
        heading="Building a Healthier Future"
        par="Explore trauma-informed, nervous system-oriented solutions for societal change. Join us in shaping a healthier, more equitable future."
        aboutBanner={true}
        imagePath="/aboutBanner.png"
      />
      <div>
        <AboutSection
          imagePath="/aboutFirst.png"
          heading="The forum itself"
          text="...is based on trauma-informed and nervous system-oriented principles in both its full-time and voluntary structures. In addition to the content of the work, the focus is on ensuring that the work processes and methods have a positive, regulating effect on health. The forum is therefore a research and development field for regenerative work methods that combines New Work approaches with current findings about the nervous system. The forum also offers nervous system-friendly and trauma-integrating rooms for groups."
        />
        <AboutSection
          imagePath="/aboutSecond.png"
          heading="The forum as a knowledge platform"
          text="...connects with existing (scientific) structures, prepares trauma and nervous system-oriented knowledge and makes it accessible and understandable to a public beyond the specialist world. In addition to scientific knowledge, it is about developing and disseminating concrete solutions that are appropriate to the nervous system for politics, business, health, education and social sectors. Some of these solutions already exist and some of the scientific findings still need to be translated into concrete options for action. In addition to specialists and managers, the forum addresses private individuals through brochures, social media, etc. and promotes options for actions appropriate to the nervous system for “personal use” in relationships, upbringing or in dealing with oneself."
        />
        <AboutSection
          imagePath="/aboutThird.png"
          heading="The forum as a training center"
          text="...develops tailor-made training concepts for the various areas and trains trainers to implement them. These will, for example, be tailored training courses for teachers, social workers, politicians, managers or socio-politically active people."
        />
        <AboutSection
          imagePath="/aboutFourth.png"
          heading="The Forum as a social movement"
          text="...identifies nervous system orientation as a crucial common denominator and common goal of all social transformational movements. Social structures that are more compatible with the nervous system have a positive impact on health, educational equality, environmental awareness and conflict transformation. Nervous system-based approaches flow into the various socio-political movements and a movement of its own is forming, which has the vision of a global society that is more compatible with the nervous system as its main goal."
        />
        <AboutSection
          imagePath="/aboutFifth.png"
          heading="The forum as a lobby structure"
          text="...has two pillars. One is a constantly professionalizing lobby organization that promotes nervous system-based approaches within the existing structures in the municipality, the state, the federal government and beyond. The second pillar is a – in the long term perspective – a global party that, on the one hand, advocates for a society that is more compatible with the nervous system, but on the other hand does not adapt to the existing political structures. More important than achieving concrete election results is establishing an alternative style of politics that aims at solidarity and “well-being” instead of generating power."
        />
        <AboutSection
          imagePath="/aboutSixth.png"
          heading="The local groups"
          text="...have three levels of impact. They offer spaces for self- and co-regulation. And they create opportunities for civil society engagement by networking with other civil society actors on site and promoting nervous system-oriented approaches. They also have a targeted effect on the municipal structures, influence the local political agenda and contribute to well-being in the municipality."
        />
      </div>
      <FooterBanner
        subHeading={tFooterBanner("subHeading")}
        heading={tFooterBanner("heading")}
        par={tFooterBanner("par")}
        btnText={tFooterBanner("button")}
      />
      <Footer
        text={footerText}
        linksHeading={footerLinksHeading}
        home={footerHome}
        about={footerAbout}
        principles={footerPrinciples}
        services={footerServices}
        events={footerEvents}
        community={footerCommunity}
        contact={footerContact}
        terms={footerTerms}
        termsFirst={footerTermsFirst}
        termsSecond={footerTermsSecond}
        termsThird={footerTermsThird}
      />
    </div>
  );
};

export default about;
