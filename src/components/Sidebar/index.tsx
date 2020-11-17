import React from "react";
import { Link, useHistory } from "react-router-dom";
import photo from "../../images/photo.svg";
import { FiArrowLeft } from "react-icons/fi";
import { AppSidebar } from "./styles";

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <AppSidebar>
      <Link to="/"><img src={photo} alt="Happy" /></Link>

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </AppSidebar>
  );
};

export default Sidebar;
