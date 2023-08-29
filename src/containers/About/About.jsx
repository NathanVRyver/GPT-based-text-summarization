import React from "react";
import Feature from "../../components/feature/Feature";
import "./about.css";

export default function AboutSection() {
  // trigger redeployment with new vars
  return (
    <div className="gpt3__whatgpt3 section__margin" id="xtract-about">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is TextXtract"
          text="TextXtract is a web application that allows users to summarize long pieces of text using state-of-the-art AI technologies. With a simple and user-friendly interface, TextXtract enables users to generate concise and accurate summaries of articles, research papers, and other text-based documents."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Effortless"
          text="Quickly generate a summary of any article or research paper by simply copying and pasting the text into TextXtract. No more wasting time reading through lengthy documents!"
        />
        <Feature
          title="Customizable"
          text="Customize your summary by adjusting the length and level of detail. Tailor your summary to your specific needs and preferences."
        />
        <Feature
          title="Highly Accurate"
          text=" Get accurate and comprehensive summaries every time with the power of GPT-based technology. Trust TextXtract to give you the information you need in a concise and digestible format."
        />
      </div>
    </div>
  );
}
