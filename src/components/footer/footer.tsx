import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <section className="flex flex-col py-5 px-20 justify-between bg-black text-white">
            <div className="bg-black text-off-white flex justify-between">
                <p>Build with 💖 by Taufiqurrahman a.k.a Virtuozs </p>
                <ul className="flex justify-end gap-10">
                    <li>
                    <Link to="https://www.linkedin.com/in/taufiqurrahman-8627191aa/">
                        <p>Linkedin</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="https://github.com/Virtuozs">
                        <p>Github</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="https://discord.com/users/385426070934913035">
                        <p>Discord</p>
                    </Link>
                    </li>
                    <li>
                    {/* <Link to="www.webflow.com"> */}
                        <p>Webflow</p>
                    {/* </Link> */}
                    </li>
                </ul>
            </div>
        </section>
      );
    }