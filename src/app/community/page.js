import React from "react";
import Footer from "../../components/footer/Footer";
import FooterBanner from "../../components/footerBanner/FooterBanner";
import CommunityBanner from "../../components/community/banner/CommunityBanner";
import CommunityList from "../../components/community/communityList/CommunityList";

const Community = () => {
  return (
    <div>
      <CommunityBanner />
      <CommunityList />
      <FooterBanner
        subHeading="JOIN ME"
        heading="How can you join in?"
        par="There are many ways to help shape the forum. You can become active as a trainer, join or found a local group, you can help build the club, you can become part of the forum movement with your organization or support us with your ideas, your commitment or your money."
      />
      <Footer />
    </div>
  );
};

export default Community;
