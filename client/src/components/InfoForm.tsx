import * as React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Col, Container, Row } from "react-bootstrap";
import WeightForm from "./weightForm";
import { sendMessage } from "../utils/script";

const mockMeat = ["None", "beef", "chicken", "pork", "fish", "lamb"];
const mockVeg = ["None", "tomato", "potato", "onion", "carrot", "broccoli"];
const mockCondiment = ["None", "ketchup", "mayonnaise", "mustard", "soy sauce"];

export default function InfoForm() {
  const [meat, setMeat] = React.useState<[string, string]>(["", ""]);
  const [veg, setVeg] = React.useState<[string, string]>(["", ""]);
  const [condiment, setCondiment] = React.useState<[string, string]>(["", ""]);
  const [menu, setMenu] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent, label: string) => {
    if (label === "Meat") setMeat([event.target.value as string, ""]);
    else if (label === "Vegetable") setVeg([event.target.value as string, ""]);
    else setCondiment([event.target.value as string, ""]);
  };

  const handleSubmit = async () => {
    // format the ingredient information before passing to chat gpt api
    const ingredients = [meat, veg, condiment];
    const formattedIngredients = ingredients
      .filter((ingredient) => ingredient[0] !== "None")
      .map((ingredient) => {
        return `${ingredient[0]} ${ingredient[1]}g`;
      });

    // pass formatted ingredients to chat gpt api
    const result = await sendMessage(formattedIngredients);
    if (result !== undefined) {
      setMenu(result);
    }
  };

  function renderCategory(mockData: string[], label: string) {
    if (mockData === null) return <div></div>;
    function renderData(mockData: string[]) {
      return mockData.map((data) => {
        return <MenuItem value={data}>{data}</MenuItem>;
      });
    }
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 360 }}>
        <InputLabel id="simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="simple-select-standard-label"
          id="simple-select-standard"
          value={
            label === "Meat"
              ? meat[0]
              : label === "Vegetable"
              ? veg[0]
              : condiment[0]
          }
          onChange={(e) => handleChange(e, label)}
          label="Meat"
        >
          {renderData(mockData)}
        </Select>
      </FormControl>
    );
  }

  return (
    <Container className="justify-content-center">
      <>
        <Row>
          <Col sm="7" className="text-center">{renderCategory(mockMeat, "Meat")}</Col>
          <Col sm="5">
            <WeightForm ingredient={meat} setWeight={setMeat} />
          </Col>
        </Row>
        <Row>
          <Col sm="7" className="text-center">{renderCategory(mockVeg, "Vegetable")}</Col>
          <Col sm="5">
            <WeightForm ingredient={veg} setWeight={setVeg} />
          </Col>
        </Row>
        <Row>
          <Col sm="7" className="text-center">{renderCategory(mockCondiment, "Condiment")}</Col>
          <Col sm="5">
            <WeightForm ingredient={condiment} setWeight={setCondiment} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="4">
            <Button
              className="w-100 mt-4"
              variant="contained"
              color="secondary"
              endIcon={<SendIcon />}
              onClick={() => handleSubmit()}
            >
              Send
            </Button>
          </Col>
        </Row>
        {menu !== "" && (
          <Row className="justify-content-center mt-5">
            <Col sm="12">
              <pre>{menu}</pre>
            </Col>
          </Row>
        )}
      </>
    </Container>
  );
}
