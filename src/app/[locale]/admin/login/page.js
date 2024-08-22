import Login from "@/components/admin/Login/Login";
import Nav from "@/components/nav/nav";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const tFooter = useTranslations("Footer");

  const footerHome = tFooter("links.home");
  const footerAbout = tFooter("links.about");
  const footerPrinciples = tFooter("links.principles");
  const footerServices = tFooter("links.services");
  const footerEvents = tFooter("links.events");
  const footerCommunity = tFooter("links.community");
  const footerContact = tFooter("links.contact");

  const tNav = useTranslations("Navigation");
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
      <Login />
    </div>
  );
};

export default LoginPage;
