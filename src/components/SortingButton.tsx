import { useTheme } from "../provider";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { CiMenuBurger } from "react-icons/ci";

interface SortingButtonProps {
  onUpdateData: (sortOrder: "asc" | "desc") => void;
}

const SortingButton: React.FC<SortingButtonProps> = ({ onUpdateData }) => {
  const { theme } = useTheme();

  const sortAsc = () => {
    onUpdateData("asc");
  };

  const sortDesc = () => {
    onUpdateData("desc");
  };

  return (
    <DropdownButton
      variant={theme === "dark" ? "light" : "dark"}
      id="dropdown-basic-button"
      title={<CiMenuBurger />}
    >
      <Dropdown.Item onClick={sortAsc}>A-Z</Dropdown.Item>
      <Dropdown.Item onClick={sortDesc}>Z-A</Dropdown.Item>
    </DropdownButton>
  );
};

export default SortingButton;
