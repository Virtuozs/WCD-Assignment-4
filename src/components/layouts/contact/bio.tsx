import { Link } from "react-router-dom";

import ContactProfile from "../../../assets/images/contactProfile.png"

function Bio() {
  return (
    <section className="flex flex-col w-1/2 ml-20 my-4" id="bio">
      <div className="w-[200px]">
        <img src={ContactProfile} alt="myself" className="w-full" />
      </div>
      <div className="mt-10">
        <p className="text-sm">Contact Details</p>
        <div className="text-lg">
          <Link to={"mailto:contact@virtuozs.com"}>
            contact@virtuozs.com
          </Link>
          <br />
          <Link to={"tel:+6287887373761"}>+62 87887373761</Link>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm">Social</p>
        <ul className="text-lg flex flex-col gap-2">
          <li>
            <Link to={"https://www.linkedin.com/in/taufiqurrahman-8627191aa/"}>Linkedin</Link>
          </li>
          <li>
            <Link to={"https://github.com/Virtuozs"}>Github</Link>
          </li>
          <li>
            <Link to={"https://discord.com/users/385426070934913035"}>Discord</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Bio;