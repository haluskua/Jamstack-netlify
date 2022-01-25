import React, { useEffect, useState } from "react";
import LinkForm from "./components/LinkForm";
//Grab all of the links
//display all of the links
//add delete and archive functionality
import LinkList from "./components/LinkList";

function App() {
  //to keep track of state we mush use useState
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await fetch("/api/getLinks");
      const links = await res.json();
      setLinks(links);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List 0'</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />
    </div>
  );
}

export default App;
