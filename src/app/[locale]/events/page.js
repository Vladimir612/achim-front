import React from "react";
import SliderHeroEvents from "@/components/events/SliderHeroEvents/SliderHeroEvents";
import Footer from "@/components/footer/Footer";
import FooterBanner from "@/components/footerBanner/FooterBanner";
import EventsComponent from "@/components/events/Events";
import Nav from "@/components/nav/nav";
import { useTranslations } from "next-intl";

const Events = () => {
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
      <SliderHeroEvents />
      <EventsComponent />
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

export default Events;