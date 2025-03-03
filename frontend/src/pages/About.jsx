import React from "react";
import { Title } from "../components/Title";
import { assets } from "../assets/assets";
import { NewsletterBox } from "../components/NewsletterBox";

export const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Forever, your one-stop destination for premium fashion,
            accessories, and lifestyle products. We believe in delivering style,
            quality, and affordability all in one place. Our carefully curated
            collections are designed to keep you ahead in the fashion game,
            ensuring that you always find something unique and trendy.
          </p>
          <p>
            {" "}
            At Forever, customer satisfaction is our priority. We offer a
            seamless shopping experience with easy navigation, secure payments,
            and fast delivery. Whether you're looking for everyday essentials or
            statement pieces, we bring you the best at unbeatable prices. Shop
            with confidence and make every moment Forever stylish!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Forever, we aim to make fashion accessible, trendy, and timeless.
            We focus on quality, affordability, and a seamless shopping
            experience while promoting sustainability and ethical sourcing. Our
            goal is to keep you stylish with confidence and care!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance :</b>
          <p className="text-gray-600">
            At Forever, we prioritize quality and craftsmanship in every
            product. Each item undergoes strict quality checks to ensure
            durability, comfort, and style. We source the finest materials and
            maintain high standards to provide you with the best shopping
            experience. Your satisfaction is our commitment!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            At Forever, we make shopping effortless with a user-friendly
            website, secure payments, and fast delivery. Our seamless experience
            ensures that you can browse, purchase, and receive your favorite
            products with ease and confidence. Enjoy hassle-free shopping
            anytime, anywhere!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            At Forever, customer satisfaction is our top priority. Our dedicated
            support team is always ready to assist you with queries, orders, and
            returns to ensure a smooth shopping experience. We value your trust
            and strive to provide quick, reliable, and friendly service every
            step of the way!
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};
