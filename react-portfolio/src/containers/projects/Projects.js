import React, { useState, useEffect } from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.log(error);
          setrepoFunction("Error");
          console.log(
            "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
          );
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Button
        text={"More Projects"}
        className="project-button"
        href={socialMediaLinks.github}
        newTab={true}
      />

    );
  } else {
    return <FailedLoading />;
  }
}
