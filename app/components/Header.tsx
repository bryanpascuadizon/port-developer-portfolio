import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="my-5 grid grid-cols-2 secondary-text slide-in-from-right"
      style={{ animationDelay: `${0.5 * 0.5}s` }}
    >
      <div>
        <p></p>
      </div>
      <div className="flex justify-end gap-3">
        <Link
          href="mailto:bryanpascuadizon@gmail.com"
          target="_blank"
          className="link"
          aria-label="mailto:bryanpascuadizon@gmail.com"
        >
          <Mail />
        </Link>
        <Link
          href="https://github.com/bryanpascuadizon"
          target="_blank"
          className="link"
          aria-label="https://github.com/bryanpascuadizon"
        >
          <Github />
        </Link>
        <Link
          href="https://www.linkedin.com/in/danielle-bryan-dizon-236861164/"
          className="link"
          target="_blank"
          aria-label="https://www.linkedin.com/in/danielle-bryan-dizon-236861164/"
        >
          <Linkedin />
        </Link>
      </div>
    </div>
  );
};

export default Header;
