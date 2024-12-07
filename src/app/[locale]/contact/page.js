import React from "react";
import Footer from "@/components/footer/Footer";
import ContactBanner from "@/components/contact/ContactBanner/ContactBanner";
import MessageForm from "@/components/contact/MessageForm/MessageForm";
import Nav from "@/components/nav/nav";
import { useTranslations } from "next-intl";
import { text } from "stream/consumers";
import LocaleSwitcher from "@/components/localeSwitcher/LocaleSwitcher";
// import Faq from "@/components/contact/Faq/Faq";

const Contact = () => {
  const tFooter = useTranslations("Footer");
  const tNav = useTranslations("Navigation");

  const footerHome = tFooter("links.home");
  const footerAbout = tFooter("links.about");
  const footerPrinciples = tFooter("links.principles");
  const footerServices = tFooter("links.services");
  const footerEvents = tFooter("links.events");
  const footerCommunity = tFooter("links.community");
  const footerContact = tFooter("links.contact");

  const footerTermsFirst = tFooter("termsLinks.first");
  const footerText = tFooter("text");
  const germany = tFooter("germany");

  const navBtn = tNav("btn");

  const t = useTranslations("Contact");
  const tCommunity = useTranslations("Community");

  const cardsData = [
    {
      id: "C3",
      communityType: "partners",
      name: tCommunity("partners"),
      bulletOne: t("partners.bulletOne"),
      bulletTwo: t("partners.bulletTwo"),
      bulletThree: t("partners.bulletThree"),
    },
    {
      id: "C2",
      communityType: "organizations",
      name: tCommunity("organizations"),
      bulletOne: t("organizations.bulletOne"),
      bulletTwo: t("organizations.bulletTwo"),
      bulletThree: t("organizations.bulletThree"),
    },
    {
      id: "CM1",
      communityType: "individuals",
      name: tCommunity("individuals"),
      bulletOne: t("individuals.bulletOne"),
      bulletTwo: t("individuals.bulletTwo"),
      bulletThree: t("individuals.bulletThree"),
    },
    {
      id: "CM2",
      communityType: "trainers",
      name: tCommunity("trainers"),
      bulletOne: t("trainers.bulletOne"),
      bulletTwo: t("trainers.bulletTwo"),
      bulletThree: t("trainers.bulletThree"),
    },
    {
      id: "C1",
      communityType: "institutions",
      name: tCommunity("institutions"),
      bulletOne: t("institutions.bulletOne"),
      bulletTwo: t("institutions.bulletTwo"),
      bulletThree: t("institutions.bulletThree"),
    },
  ];

  const obj = {
    simply: t("simply"),
    writeUs: t("writeUs"),
    text: t("text"),
    yourInfo: t("yourInfo"),
    yourMessage: t("yourMessage"),
    name: t("form.name"),
    surname: t("form.surname"),
    email: t("form.email"),
    phone: t("form.phone"),
    subject: t("form.subject"),
    message: t("form.message"),
    button: t("form.button"),
  };

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
    sizeExceeds: tReg("sizeExceeds"),
    maxSize: tReg("maxSize"),
    oneInterest: tReg("oneInterest"),
    nextStep: tReg("nextStep"),
    prevStep: tReg("prevStep"),
    submit: tReg("submit"),
    name: t("form.name"),
    email: t("form.email"),
    phone: t("form.phone"),
    subject: tReg("subject"),
    congratulations: tReg("congratulations"),
    congratsText: tReg("congratsText"),
    congratsSecond: tReg("congratsSecond"),
    congratsThird: tReg("congratsThird"),
    close: tReg("close"),
  };

  return (
    <div>
      <LocaleSwitcher route="contact" />
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
        termsFirst={footerTermsFirst}
      />
      <ContactBanner
        subHeading={t("subHeading")}
        heading={t("heading")}
        par={t("par")}
        btn={t("btn")}
        cards={cardsData}
        regObj={regObj}
        termsFirst={footerTermsFirst}
      />
      <MessageForm obj={{ ...obj }} />
      {/* <Faq /> */}
      <Footer
        text={footerText}
        home={footerHome}
        about={footerAbout}
        principles={footerPrinciples}
        services={footerServices}
        events={footerEvents}
        community={footerCommunity}
        contact={footerContact}
        termsFirst={footerTermsFirst}
        germany={germany}
      />
    </div>
  );
};

export default Contact;
