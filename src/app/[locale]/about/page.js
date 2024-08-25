import React from "react";
import Banner from "@/components/banner/Banner";
import AboutSection from "@/components/about/aboutSection/AboutSection";
import Footer from "@/components/footer/Footer";
import FooterBanner from "@/components/footerBanner/FooterBanner";
import Nav from "@/components/nav/nav";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/localeSwitcher/LocaleSwitcher";

const about = () => {
  const tFooter = useTranslations("Footer");
  const tFooterBanner = useTranslations("FooterBanner");
  const tNav = useTranslations("Navigation");

  const tCommon = useTranslations("Common");

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

  const tAbout = useTranslations("About");

  const tContact = useTranslations("Contact");
  const tReg = useTranslations("Register");

  const regObj = {
    selectRType: tReg("selectRType"),
    institution: tReg("institution"),
    organization: tReg("organization"),
    partner: tReg("partner"),
    individual: tReg("individual"),
    trainer: tReg("trainer"),
    personalInfo: tReg("personalInfo"),
    addImg: tReg("addImg"),
    shortDesc: tReg("shortDesc"),
    acceptTerms: tReg("acceptTerms"),
    interests: tReg("interests"),
    selfReflection: tReg("selfReflection"),
    conn: tReg("conn"),
    selfGrowth: tReg("selfGrowth"),
    volonterism: tReg("volonterism"),
    seekingHelp: tReg("seekingHelp"),
    breakingIso: tReg("breakingIso"),
    research: tReg("research"),
    sharingExp: tReg("sharingExp"),
    reqFields: tReg("reqFields"),
    oneInterest: tReg("oneInterest"),
    nextStep: tReg("nextStep"),
    prevStep: tReg("prevStep"),
    submit: tReg("submit"),
    name: tContact("form.name"),
    email: tContact("form.email"),
    phone: tContact("form.phone"),
    subject: tContact("form.subject"),
    congratulations: tReg("congratulations"),
    congratsText: tReg("congratsText"),
    congratsSecond: tReg("congratsSecond"),
    congratsThird: tReg("congratsThird"),
    close: tReg("close"),
  };

  return (
    <div>
      <LocaleSwitcher route="about" />
      <Nav
        home={footerHome}
        about={footerAbout}
        principles={footerPrinciples}
        services={footerServices}
        events={footerEvents}
        community={footerCommunity}
        contact={footerContact}
        btn={navBtn}
        regObj={regObj}
      />
      <Banner
        subHeading={tAbout("banner.subHeading")}
        heading={tAbout("banner.heading")}
        par={tAbout("banner.par")}
        customText={tCommon("continueReading")}
        aboutBanner={true}
        imagePath="/aboutBanner.png"
        startingPointSubHeading={tAbout("startingPoint.subHeading")}
        startingPointHeading={tAbout("startingPoint.heading")}
        startingPointPar={tAbout("startingPoint.par")}
      />
      <div>
        <AboutSection
          imagePath="/aboutFirst.png"
          heading={tAbout("sections.first.heading")}
          text={tAbout("sections.first.text")}
        />
        <AboutSection
          imagePath="/aboutSecond.png"
          heading={tAbout("sections.second.heading")}
          text={tAbout("sections.second.text")}
        />
        <AboutSection
          imagePath="/aboutThird.png"
          heading={tAbout("sections.third.heading")}
          text={tAbout("sections.third.text")}
        />
        <AboutSection
          imagePath="/aboutFourth.png"
          heading={tAbout("sections.fourth.heading")}
          text={tAbout("sections.fourth.text")}
        />
        <AboutSection
          imagePath="/aboutFifth.png"
          heading={tAbout("sections.fifth.heading")}
          text={tAbout("sections.fifth.text")}
        />
        <AboutSection
          imagePath="/aboutSixth.png"
          heading={tAbout("sections.sixth.heading")}
          text={tAbout("sections.sixth.text")}
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
