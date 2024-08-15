import Footer from "../components/footer/Footer";
import FooterBanner from "../components/footerBanner/FooterBanner";
import Hero from "../components/home/hero/Hero";
import Team from "../components/home/team/Team";
import UvpList from "../components/home/uvp/UvpList";

export default function Home() {
  return (
    <main>
      <Hero />
      <UvpList />
      <Team />
      <FooterBanner
        subHeading="JOIN ME"
        heading="How can you join in?"
        par="There are many ways to help shape the forum. You can become active as a trainer, join or found a local group, you can help build the club, you can become part of the forum movement with your organization or support us with your ideas, your commitment or your money."
      />
      <Footer />
    </main>
  );
}
