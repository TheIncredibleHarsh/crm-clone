import InputDebounced from "@/shared/components/InputDebounced";
import { GlobalSearch, SearchInputContainer } from "./Styles";

const ProjectGlobalSearch = () =>{
    return (
        <GlobalSearch>
            <SearchInputContainer>
                <InputDebounced />
            </SearchInputContainer>
        </GlobalSearch>
    )
}

export default ProjectGlobalSearch;