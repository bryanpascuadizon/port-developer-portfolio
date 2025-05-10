import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="my-5 grid grid-cols-2 secondary-text">
      <div>
        <p></p>
      </div>
      <div className="flex justify-end gap-3">
        {" "}
        <Link href="https://github.com/bryanpascuadizon" target="_blank">
          {" "}
          <Github />
        </Link>
        <Link
          href="https://www.linkedin.com/in/danielle-bryan-dizon-236861164/"
          target="_blank"
        >
          <Linkedin />
        </Link>
      </div>
    </div>
  );
};

export default Header;
