import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CgSearchLoading } from "react-icons/cg";

interface SearchValueProps {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

const SearchValue: React.FC<SearchValueProps> = ({
  handleSearchChange,
  searchTerm,
}) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>
        <CgSearchLoading />
      </InputGroup.Text>
      <Form.Control
        placeholder="Enter email value"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </InputGroup>
  );
};

export default SearchValue;
