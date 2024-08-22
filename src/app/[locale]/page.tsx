// import { useTranslations } from "next-intl";
import Nav from "@/components/nav/nav";
import Footer from "../../components/footer/Footer";
import FooterBanner from "../../components/footerBanner/FooterBanner";
import Hero from "../../components/home/hero/Hero";
import Team from "../../components/home/team/Team";
import UvpList from "../../components/home/uvp/UvpList";
import { useTranslations } from "next-intl";

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
      name: tTeam("first.name"),
      role: tTeam("first.role"),
      imagePath: "/team/lukas.png",
      text: tTeam("first.text"),
    },
    {
      name: tTeam("second.name"),
      role: tTeam("second.role"),
      imagePath: "/team/evgenia.png",
      text: tTeam("second.text"),
    },
    {
      name: tTeam("third.name"),
      role: tTeam("third.role"),
      imagePath: "/team/lars.png",
      text: tTeam("third.text"),
    },
    {
      name: tTeam("fourth.name"),
      role: tTeam("fourth.role"),
      imagePath: "/team/mathias.png",
      text: tTeam("fourth.text"),
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

  const footerTerms = tFooter("terms");
  const footerTermsFirst = tFooter("termsLinks.first");
  const footerTermsSecond = tFooter("termsLinks.second");
  const footerTermsThird = tFooter("termsLinks.third");

  const tNav = useTranslations("Navigation");
  const navBtn = tNav("btn");

  return (
    <main>
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
        terms={footerTerms}
        termsFirst={footerTermsFirst}
        termsSecond={footerTermsSecond}
        termsThird={footerTermsThird}
      />
    </main>
  );
}