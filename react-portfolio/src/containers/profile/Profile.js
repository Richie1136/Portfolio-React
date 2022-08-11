import { useState } from "react";
import Contact from "../contact/Contact";


export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  return (
    <Contact />
  )
}
