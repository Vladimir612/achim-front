import React from "react";
import Footer from "@/components/footer/Footer";
import ContactBanner from "@/components/contact/ContactBanner/ContactBanner";
import MessageForm from "@/components/contact/MessageForm/MessageForm";
import Nav from "@/components/nav/nav";
import { useTranslations } from "next-intl";
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
      <ContactBanner
        subHeading="JOIN US"
        heading="How can you join in?"
        par="There are many ways to help shape the forum. You can become active as a trainer, join or found a local group, you can help build the club, you can become part of the forum movement with your organization or support us with your ideas, your commitment or your money."
      />
      <MessageForm />
      {/* <Faq /> */}
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

export default Contact;
