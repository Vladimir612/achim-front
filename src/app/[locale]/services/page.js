import React from "react";
import Nav from "@/components/nav/nav";
import FooterBanner from "@/components/footerBanner/FooterBanner";
import ServicesWrapper from "@/components/services/ServicesWrapper";
import Footer from "@/components/footer/Footer";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/localeSwitcher/LocaleSwitcher";

const Services = () => {
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

  const footerTermsFirst = tFooter("termsLinks.first");
  const footerText = tFooter("text");
  const footerLinksHeading = tFooter("linksHeading");

  const navBtn = tNav("btn");

  const tServices = useTranslations("Services");

  const tCommon = useTranslations("Common");

  let obj = {
    banner: {
      subHeading: tServices("banner.subHeading"),
      heading: tServices("banner.heading"),
      par: tServices("banner.par"),
      readMore: tCommon("explore"),
    },
    content: [
      {
        heading: tServices("content.first.heading"),
        text: tServices("content.first.text"),
      },
      {
        heading: tServices("content.second.heading"),
        text: tServices("content.second.text"),
      },
      {
        heading: tServices("content.third.heading"),
        text: tServices("content.third.text"),
      },
      {
        heading: tServices("content.fourth.heading"),
        text: tServices("content.fourth.text"),
      },
      {
        heading: tServices("content.fifth.heading"),
        text: tServices("content.fifth.text"),
      },
      {
        heading: tServices("content.sixth.heading"),
        text: tServices("content.sixth.text"),
      },
      {
        heading: tServices("content.seventh.heading"),
        text: tServices("content.seventh.text"),
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
    sizeExceeds: tReg("sizeExceeds"),
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
      <LocaleSwitcher route="services" />
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
      <ServicesWrapper obj={{ ...obj }} />
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
        termsFirst={footerTermsFirst}
      />
    </div>
  );
};

export default Services;
