"use client"
import Achievements from "@/components/achievements";
import Company from "@/components/company";
import Courses from "@/components/courses";
import Explore from "@/components/explore";
import Footer from "@/components/footer";
import Footer2 from "@/components/footer2";
import Footer3 from "@/components/footer3";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Review from "@/components/review";
import Social from "@/components/social";
import Team from "@/components/team";

export default function Home() {
  return (
    <div>
      <Social/>
      <Navbar/>
      <Hero/>
      <Company/>
      <Explore/>
      <Achievements/>
      <Courses/>
      <Team/>
      <Review/>
      <Footer/>
      <Footer2/>
      <Footer3/>
    </div>
  );
}


