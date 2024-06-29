import ProjectGlobalSearch from "./GlobalSearch";
import NavbarLeft from "./NavbarLeft"
import Sidebar from "./Sidebar";

const company = {
    name: "Tasty Donuts"
}

const Project = () => {
    return (
        <div>
            <NavbarLeft />

            <Sidebar company={company} />

            <ProjectGlobalSearch />
        </div>
    )
}

export default Project;

