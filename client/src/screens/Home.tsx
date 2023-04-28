import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { RootState } from "../interfaces/auth.interface";
import { MenuInterface } from "../interfaces/menu.interface";
import "../assets/css/home.css";
import friedEggRice from "../assets/images/menus/fried-egg-rice.png";
import friedShrimpRice from "../assets/images/menus/fried-shrimp-rice.png";
import plainChickenCurry from "../assets/images/menus/plain-chicken-curry.png";
import somFishCurry from "../assets/images/menus/som-fish-curry.jpeg"


export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => {
    return state.auth;
  });
  const mockImageList = [friedEggRice, friedShrimpRice, plainChickenCurry, somFishCurry]
  const mockMenu: MenuInterface[] = [
    {
      name: "ข้าวผัดไข่",
      image: "fired-egg-rice.png",
      ingredient: `ไข่ไก่ 1 ฟอง
      น้ำมันพืช 1 ช้อนโต๊ะ
      ข้าวสวย 1 ถ้วย
      ผักกาดขาว 1/2 ถ้วย
      หอมแดง 1/4 ถ้วย
      พริกไทย 1/4 ช้อนชา`,
      nutrient: `ไข่ไก่ (1 ฟอง) 70 kcal, 5.5 g โปรตีน, 0.5 g ไขมัน
      น้ำมันพืช (1 ช้อนโต๊ะ) 120 kcal, 14 g ไขมัน
      ข้าวสวย (1 ถ้วย) 240 kcal
      ผักกาดขาว (1/2 ถ้วย) 7.5 kcal, 0.5 g โปรตีน, 0.1 g ไขมัน
      หอมแดง (1/4 ถ้วย) 14 kcal, 0.4 g โปรตีน, 0.1 g ไขมัน
      พริกไทย (1/4 ช้อนชา) 1.25 kcal`,
      calories: 452,
      description:
        "ข้าวผัดไข่เป็นอาหารที่มีชื่อเสียงและเป็นที่รู้จักในวงการอาหารไทย อาหารนี้จะใช้เนื้อสัตว์ประเภทไข่และน้ำมันพืช และผักสดเป็นวัตถุดิบหลัก",
    },
    {
      name: "ข้าวผัดกุ้ง",
      image: "fired-shrimp-rice.png",
      ingredient: `- ข้าวสวย 1 ถ้วย
      - กุ้ง 100 กรัม
      - ไข่ไก่ 1 ฟอง
      - กระเทียม 3-4 กลีบ
      - หอมใหญ่ 1/2 หัว
      - พริกไทย 1/2 ช้อนชา
      - ซอสปรุงรส 2 ช้อนโต๊ะ
      - น้ำมันพืช 2 ช้อนโต๊ะ
      - ผักสด (เช่น กะเพรา, ผักบุ้ง) ใส่ตามต้องการ`,
      nutrient: `Carbs, Protein, Fat, Fiber, Vitamins and Minerals
      - Carbs: 64 g
      - Protein: 28 g
      - Fat: 14 g
      - Fiber: 3 g
      - Vitamins and Minerals: สารอาหารหลักเช่น วิตามิน A, B, C, และแร่ธาตุเช่น เหล็ก, แคลเซียม, แมกนีเซียม, และฟอสฟอรัส`,
      calories: 593,
      description:
        "ข้าวผัดกุ้งทำจากข้าวสวย, กุ้ง, ไข่, กระเทียม, หอมใหญ่, พริกไทย, ซอสปรุงรส, น้ำมันพืช และผัก (เช่น กะเพรา, ผักบุ้ง)",
    },
    {
      name: "แกงจืดไก่",
      image: "plain-chicken-curry.png",
      ingredient: `ไก่อกไก่: 200 กรัม
        วุ้นเส้น: 50 กรัม
        ผักหลากหลายชนิด (ต้นหอม กะหล่ำปลี ฟักทอง มะระขี้นก)
        พริกแกงเผ็ด: 2-3 เม็ด
        เครื่องเทศ (ผงชูรส ผงกระเทียม ผงพริกไทย ตะไคร้)`,
      nutrient: `โปรตีน: 36.3 g
      คาร์โบไฮเดรต: 18.9 g
      ไขมัน: 6.1 g
      ผัก: ต้นหอม กะหล่ำปลี ฟักทอง มะระขี้นก โดยปริมาณไม่เกิน 125 kcal`,
      calories: 505,
      description:
        "แกงจืดไก่เป็นอาหารไทยที่เป็นที่นิยมในการรับประทาน รสชาติเผ็ดร้อนจากพริกและเครื่องเทศต่างๆ และเนื้อไก่นุ่มๆ ผสมกับผักหลากหลายชนิด มีเส้นเล็กๆ (วุ้นเส้น) เป็นอาหารที่บำรุงสุขภาพได้ดี",
    },
    {
      name: "แกงส้มปลาช่อน",
      image: "sour-fish-curry.jpeg",
      ingredient: ` - ปลาช่อน 200 กรัม
      - ผักช่อน 200 กรัม
      - พริกชี้ฟ้า 5 เม็ด
      - หอมแดง 2 หัว
      - กระเทียม 5 กลีบ
      - มะกรูด 5 ใบ
      - น้ำปลา 1 ช้อนโต๊ะ
      - น้ำมะขามเปียก 1 ถ้วย`,
      nutrient: ` - โปรตีน: 18 กรัม 
      - คาร์โบไฮเดรต: 26 กรัม
      - ไขมัน: 12 กรัม
      - ใยอาหาร: 5 กรัม
      - วิตามินเอ: 100% 
      - วิตามินซี: 150%
      - เหล็ก: 15% 
      - แคลเซียม: 10%`,
      calories: 320,
      description:
        "แกงส้มปลาช่อนเป็นเมนูอาหารไทยที่มีรสชาติเปรี้ยวหวานกลมกล่อม ด้วยการใช้ผักช่อนและปลาช่อนในการปรุงรส เพิ่มความอร่อยด้วยส่วนผสมของพริกและมะกรูด รับประทานกับข้าวสวย หรือเสิร์ฟพร้อมกับผักสดตามชอบ",
    },
  ];

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, [user, navigate]);

  const renderMenu = () => {
    return (
      <Row className="flex-row justify-content-between">
        {mockMenu.map((menu: MenuInterface, index) => {
          console.log(menu.image);
          return (
            <Card style={{ width: "18rem" }} className="mb-4 p-0">
              <Card.Img variant="top" src={mockImageList[index]} />
              <Card.Body>
                <Card.Title>{menu.name}</Card.Title>
                <Card.Text>{menu.description}</Card.Text>
                <Button className=" align-self-bottom" variant="primary">
                  See more
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    );
  };

  return (
    <Container>
      <div className="user-calories flex-row w-auto mb-3">
        <h4 className="fw-semibold mb-2">Your calorie goal per meal</h4>
        <h5 className="ms-5"> 744 </h5>
      </div>
      <div className="user-nutrients mb-3">
        <h4 className="fw-semibold mb-2">Nutrient Needs</h4>
        <h5 className="ms-5"> Carb ≈ 160 kcal</h5>
        <h5 className="ms-5"> Protein minimum ≈ 148.8 kcal</h5>
        <h5 className="ms-5"> Oil ≈ 45 kcal </h5>
        <h5 className="ms-5"> Vegetables ≈ 125 kcal</h5>
      </div>

      <div>
        <h4 className="fw-semibold mb-3">Menu list</h4>
        <Container>{renderMenu()}</Container>
      </div>
    </Container>
  );
};
