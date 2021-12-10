import { useState, useEffect } from "react";
import "../src/App.css";

import { colorizeTextsAndBackground } from "./util/colorizer";
import { shuffleArray } from "./util/shuffleArray";
import {
  fetchRandomQuote,
  getAuthorList,
  getAuthorsQuotes,
} from "./service/quote";

import Header from "./components/Header";

const App = () => {
  const [quote, setQuote] = useState({});
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAutor] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getQuote = () => {
    if (selectedAuthor) {
      handleOnChange(selectedAuthor);
      return;
    }
    colorizeTextsAndBackground();
    handleFetchQuote();
  };

  const handleFetchQuote = async () => {
    try {
      setIsLoading(true);
      const response = await fetchRandomQuote();
      setQuote(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Something went wrong!");
    }
  };

  const handleFetchAuthor = async () => {
    try {
      setIsLoading(true);
      const response = await getAuthorList();
      setAuthors(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Something went wrong!");
    }
  };

  useEffect(() => {
    handleFetchQuote();
    handleFetchAuthor();
  }, []);

  const handleOnChange = async (authorSlug = "") => {
    const response = await getAuthorsQuotes(authorSlug);

    setSelectedAutor(authorSlug);
    setQuote(shuffleArray(response.data.results)[0]);
  };

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  return (
    <div className="App">
      <Header />
      <div>
        <p className="space">{quote?.content}</p>

        <div></div>
        <p className="content">{quote?.author}</p>

        <button className="button" onClick={getQuote}>
          Get Quote
        </button>

        <select
          className="authorList"
          onChange={(event) => {
            handleOnChange(event.target.value);
          }}
        >
          {authors?.results?.map((author) => (
            <option value={author.slug} key={author._id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
