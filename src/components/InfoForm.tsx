import * as React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import WeightForm from "./weightForm";

const mockMeat = ["None", "beef", "chicken", "pork", "fish", "lamb"];
const mockVeg = ["None", "tomato", "potato", "onion", "carrot", "broccoli"];
const mockFruit = ["None", "apple", "banana", "orange", "grape", "strawberry"];

export default function InfoForm() {
  const [meat, setMeat] = React.useState<string>("");
  const [veg, setVeg] = React.useState<string>("");
  const [fruit, setFruit] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent, label: string) => {
    if (label === "Meat") setMeat(event.target.value as string);
    else if (label === "Vegetable") setVeg(event.target.value as string);
    else
      setFruit(event.target.value as string);
  };

  // function fetchIngredient() {
  //   const url = "https://api.spoonacular.com/food/ingredients/";
  //   let key: string | undefined = getSpoonApiKey();
  //   if (key !== undefined) {
  //     const response = fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-api-key": key,
  //       },
  //     });
  //   }
  // }

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
          value={label === "Meat" ? meat : label === "Vegetable" ? veg : fruit}
          onChange={(e) => handleChange(e, label)}
          label="Meat"
        >
          {renderData(mockData)}
        </Select>
      </FormControl>
    );
  }

  return (
    <Container>
      <>
        <Row>
          <Col sm="7">{renderCategory(mockMeat, "Meat")}</Col>
          <Col sm="5">
            <WeightForm />
          </Col>
        </Row>
        <Row>
          <Col sm="7">{renderCategory(mockVeg, "Vegetable")}</Col>
          <Col sm="5">
            <WeightForm />
          </Col>
        </Row>
        <Row>
          <Col sm="7">{renderCategory(mockFruit, "Fruit")}</Col>
          <Col sm="5">
            <WeightForm />
          </Col>
        </Row>
      </>
    </Container>
  );
}
