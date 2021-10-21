import React, { useState, lazy, Suspense } from "react";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
// const GithubProfileCard = lazy(() =>
//   import("../../components/githubProfileCard/GithubProfileCard")
// );
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  return (
    <Contact />
  )
}
