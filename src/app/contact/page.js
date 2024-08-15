import React from "react";
import Footer from "../../components/footer/Footer";
import ContactBanner from "../../components/contact/ContactBanner/ContactBanner";
import MessageForm from "../../components/contact/MessageForm/MessageForm";
import Faq from "../../components/contact/Faq/Faq";

const Contact = () => {
  return (
    <div>
      <ContactBanner
        subHeading="JOIN US"
        heading="How can you join in?"
        par="There are many ways to help shape the forum. You can become active as a trainer, join or found a local group, you can help build the club, you can become part of the forum movement with your organization or support us with your ideas, your commitment or your money."
      />
      <MessageForm />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
};

export default Contact;
