import { BiBookmarkAlt } from "react-icons/bi";
import { CgLoadbarSound } from "react-icons/cg";
import { PiPersonThin } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="contentPadding !border-r-2 !px-8 !py-7 space-y-7">
      <div className="sidebarLink hover:sidebarLinkActive">
        <CgLoadbarSound size={25} />
        <p className="">Dashboard</p>
      </div>
      <div className="sidebarLinkActive">
        <PiPersonThin size={25} />
        <p className="">Skill Test</p>
      </div>
      <div className="sidebarLink hover:sidebarLinkActive">
        <BiBookmarkAlt size={25} />
        <p className="">Internship</p>
      </div>
    </div>
  );
};
export default Sidebar;
