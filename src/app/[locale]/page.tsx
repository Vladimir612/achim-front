// import { useTranslations } from "next-intl";
import Nav from "@/components/nav/nav";
import Footer from "../../components/footer/Footer";
import FooterBanner from "../../components/footerBanner/FooterBanner";
import Hero from "../../components/home/hero/Hero";
import Team from "../../components/home/team/Team";
import UvpList from "../../components/home/uvp/UvpList";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/localeSwitcher/LocaleSwitcher";

export default function Home() {
  const t = useTranslations("Home");
  const tUvp = useTranslations("UvpList");
  const tFooterBanner = useTranslations("FooterBanner");
  const tFooter = useTranslations("Footer");

  const uvpList = [
    {
      number: "01",
      subHeading: tUvp("first.subHeading"),
      title: tUvp("first.title"),
      par: tUvp("first.par"),
      fullText: tUvp("first.fullText"),
      imagePath: "/uvpFirst.png",
    },
    {
      number: "02",
      subHeading: tUvp("second.subHeading"),
      title: tUvp("second.title"),
      par: tUvp("second.par"),
      fullText: tUvp("second.fullText"),
      imagePath: "/uvpSecond.png",
    },
    {
      number: "03",
      subHeading: tUvp("third.subHeading"),
      title: tUvp("third.title"),
      par: tUvp("third.par"),
      fullText: tUvp("third.fullText"),
      imagePath: "/uvpThird.png",
    },
    {
      number: "04",
      subHeading: tUvp("fourth.subHeading"),
      title: tUvp("fourth.title"),
      par: tUvp("fourth.par"),
      fullText: tUvp("fourth.fullText"),
      imagePath: "/uvpFourth.png",
    },
    {
      number: "05",
      subHeading: tUvp("fifth.subHeading"),
      title: tUvp("fifth.title"),
      par: tUvp("fifth.par"),
      fullText: tUvp("fifth.fullText"),
      imagePath: "/uvpFifth.png",
    },
  ];

  const tTeam = useTranslations("Team");

  const teamList = [
    {
      name: tTeam("second.name"),
      role: tTeam("second.role"),
      imagePath: "/team/susie.png",
      text: tTeam("second.text"),
    },
    {
      name: tTeam("third.name"),
      role: tTeam("third.role"),
      imagePath: "/team/nikola.png",
      text: tTeam("third.text"),
    },
    {
      name: tTeam("fourth.name"),
      role: tTeam("fourth.role"),
      imagePath: "/team/franziska.jpg",
      text: tTeam("fourth.text"),
    },
    {
      name: tTeam("first.name"),
      role: tTeam("first.role"),
      imagePath: "/team/franziska.jpg",
      text: tTeam("first.text"),
    },
    {
      name: tTeam("fifth.name"),
      role: tTeam("fifth.role"),
      imagePath: "/team/achim.png",
      text: tTeam("fifth.text"),
    },
  ];

  const tTestimonials = useTranslations("Testimonials");

  const testimonialsList = [
    {
      name: tTestimonials("first.name"),
      text: tTestimonials("first.text"),
      imagePath: "/eventImageExample.png",
    },
    {
      name: tTestimonials("second.name"),
      text: tTestimonials("second.text"),
      imagePath: "/eventImageExample.png",
    },
    {
      name: tTestimonials("third.name"),
      text: tTestimonials("third.text"),
      imagePath: "/eventImageExample.png",
    },
    {
      name: tTestimonials("fourth.name"),
      text: tTestimonials("fourth.text"),
      imagePath: "/eventImageExample.png",
    },
  ];

  const footerText = tFooter("text");
  const footerLinksHeading = tFooter("linksHeading");

  const footerHome = tFooter("links.home");
  const footerAbout = tFooter("links.about");
  const footerPrinciples = tFooter("links.principles");
  const footerServices = tFooter("links.services");
  const footerEvents = tFooter("links.events");
  const footerCommunity = tFooter("links.community");
  const footerContact = tFooter("links.contact");

  const footerTermsFirst = tFooter("termsLinks.first");
  const footerTermsSecond = tFooter("termsLinks.second");

  const tNav = useTranslations("Navigation");
  const navBtn = tNav("btn");

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
    <main>
      <LocaleSwitcher route={null} />
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
      <Hero
        subHeading={t("subHeading")}
        title={t("title")}
        scrollTxt={t("scroll")}
        readMoreTxt={t("moreDetails")}
      />
      <UvpList list={uvpList} readMoreTxt={t("moreDetails")} />
      <Team
        teamList={teamList}
        testimonialsList={testimonialsList}
        readMore={t("moreDetails")}
      />
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
        termsSecond={footerTermsSecond}
      />
    </main>
  );
}
