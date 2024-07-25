import { FormControl, InputGroup, Dropdown, DropdownButton } from "react-bootstrap"

const DropDown = () => {
    return (
        <>
            <DropdownButton
                variant="info"
                title="Dropdown"
                >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

const Search = ({query, onChangeQuery}) => {
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl placeholder="Search" onChange={(event) => {
                    onChangeQuery(event.target.value)
                }} value={query} />
                <DropDown />
            </InputGroup>
        </>
    )
}

export default Search;