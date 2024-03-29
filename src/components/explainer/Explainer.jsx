import React, {useState} from 'react';
import axios from 'axios';
import './explainer.css';

const Explainer = () => {
	const [annoucement, setAnnoucement] = useState(false);
	const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSummarizeClick = () => {
    setLoading(true);
    axios
        .post('https://textxtract-backend.onrender.com/api/summary', {
          text: inputText,
        })
        .then((response) => {
          console.log(response);
          setSummary(response.data.summary);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
  };

const handlesummarizebuttonclick = () => {
 setLoading(true);
const key = import.meta.env.VITE_OPENAI_API;
const options = {
  method: "POST",
  url: "https://api.edenai.run/v2/text/summarize",
  headers: {
        authorization: `Bearer ${key}`,
  },
  data: {
    output_sentences: 3,
    providers: "openai",
    text: inputText,
    language: "en",
    fallback_providers: "",
  },
};

axios
  .request(options)
  .then((response) => {
      setSummary(response.data.openai.result);
      setLoading(false);
      })
  .catch((error) => {
    console.error(error);
  setLoading(false); }); 


  }




  return (
    <div className="demo__page-layout">
      <div className="demo__grid">
        <div className="demo__grid-column-1">
          <div className="demo__headline">
            <h1 className="gradient__text">
              {' '}
              TextXtract: Generate Summaries of Long Texts with AI
            </h1>
          </div>
          <p className="demo__description">
            TextXtract is a powerful web application that uses advanced AI
            algorithms to generate summaries of long articles, research papers,
            and other texts. With TextXtract, you can input any text and receive
            a concise summary that captures the most important information in
            just a few sentences. Whether you're a student, researcher, or just
            a busy professional, TextXtract is the perfect tool to save time and
            stay on top of your reading.<br></br>
            <br />{' '}
            <strong>
              Try it today and experience the power of GPT-based text
              summarization!{' '}
            </strong>
          </p>
        </div>
        <div className="demo__grid-column-2">
          <textarea
            className="demo__text"
            required
            minLength={200}
            placeholder="input the text that you want to summarize here"
            value={inputText}
            onChange={handleInputChange}
          ></textarea>
          <div className="button_container">
            <button
              className="demo__submit"
              onClick={handlesummarizebuttonclick}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Summarize'}
            </button>
          </div>
        </div>
      </div>
      {/* The summary section starts here*/}

	  {annoucement && <h1 className="annoucement-header"> This service is currently offline, but you can view the repository <a target="_blank"  href="https://github.com/NathanVRyver/GPT-based-text-summarization"> here </a></h1>}
      {summary && (
        <div className="demo__summary">
          <div className="gradient__text">
            <h2 className="summary_headline">Summarized Version:</h2>
          </div>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Explainer;
