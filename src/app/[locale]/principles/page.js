import React from "react";
import FooterBanner from "@/components/footerBanner/FooterBanner";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/nav";
import PrinciplesWrapper from "@/components/principles/wrapper/PrinciplesWrapper";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/localeSwitcher/LocaleSwitcher";

const Principles = () => {
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

  const tPrinciples = useTranslations("Principles");

  const tCommon = useTranslations("Common");

  let obj = {
    banner: {
      subHeading: tPrinciples("banner.subHeading"),
      heading: tPrinciples("banner.heading"),
      par: tPrinciples("banner.par"),
      readMore: tCommon("continueReading"),
    },
    sections: [
      {
        number: "01",
        subHeading: tPrinciples("sections.first.subHeading"),
        heading: tPrinciples("sections.first.heading"),
        text: tPrinciples("sections.first.text"),
        imagePath: "/principlesFirst.png",
      },
      {
        number: "02",
        subHeading: tPrinciples("sections.second.subHeading"),
        heading: tPrinciples("sections.second.heading"),
        text: tPrinciples("sections.second.text"),
        imagePath: "/principlesSecond.png",
      },
      {
        number: "03",
        subHeading: tPrinciples("sections.third.subHeading"),
        heading: tPrinciples("sections.third.heading"),
        text: tPrinciples("sections.third.text"),
        imagePath: "/principlesThird.png",
      },
      {
        number: "04",
        subHeading: tPrinciples("sections.fourth.subHeading"),
        heading: tPrinciples("sections.fourth.heading"),
        text: tPrinciples("sections.fourth.text"),
        imagePath: "/principlesFourth.png",
      },
      {
        number: "05",
        subHeading: tPrinciples("sections.fifth.subHeading"),
        heading: tPrinciples("sections.fifth.heading"),
        text: tPrinciples("sections.fifth.text"),
        imagePath: "/principlesFifth.png",
      },
      {
        number: "06",
        subHeading: tPrinciples("sections.sixth.subHeading"),
        heading: tPrinciples("sections.sixth.heading"),
        text: tPrinciples("sections.sixth.text"),
        imagePath: "/principlesSixth.png",
      },
      {
        number: "07",
        subHeading: tPrinciples("sections.seventh.subHeading"),
        heading: tPrinciples("sections.seventh.heading"),
        text: tPrinciples("sections.seventh.text"),
        imagePath: "/principlesSeventh.png",
      },
      {
        number: "08",
        subHeading: tPrinciples("sections.eighth.subHeading"),
        heading: tPrinciples("sections.eighth.heading"),
        text: tPrinciples("sections.eighth.text"),
        imagePath: "/principlesEight.png",
      },
      {
        number: "09",
        subHeading: tPrinciples("sections.ninth.subHeading"),
        heading: tPrinciples("sections.ninth.heading"),
        text: tPrinciples("sections.ninth.text"),
        imagePath: "/principlesNinth.png",
      },
      {
        number: "10",
        subHeading: tPrinciples("sections.tenth.subHeading"),
        heading: tPrinciples("sections.tenth.heading"),
        text: tPrinciples("sections.tenth.text"),
        imagePath: "/principlesTenth.png",
      },
      {
        number: "11",
        subHeading: tPrinciples("sections.eleventh.subHeading"),
        heading: tPrinciples("sections.eleventh.heading"),
        text: tPrinciples("sections.eleventh.text"),
        imagePath: "/principlesEleventh.png",
      },
      {
        number: "12",
        subHeading: tPrinciples("sections.twelfth.subHeading"),
        heading: tPrinciples("sections.twelfth.heading"),
        text: tPrinciples("sections.twelfth.text"),
        imagePath: "/principlesTwelfth.png",
      },
    ],
  };

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
      <LocaleSwitcher route="principles" />
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
      <PrinciplesWrapper obj={{ ...obj }} />
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

export default Principles;
