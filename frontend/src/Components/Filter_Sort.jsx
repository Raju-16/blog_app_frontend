import {
  Box,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter_Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlSort = searchParams.get("sort");
  const [category, setCategory] = useState(urlCategory || []);
  const [sort, setSort] = useState(urlSort || "");

  console.log("CATEGory", category);

  const handleFilter = (e) => {
    let option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category || sort) {
      let params = {};
      category && (params.category = category);
      sort && (params.sort = sort);
      setSearchParams(params);
    }
  }, [category, sort, setSearchParams]);

  return (
    <Box
      color={"white"}
      bg={"rgb(71, 93, 128)"}
      height={"100vh"}
      width={"100%"}
      pl={{ base: "5px", sm: "10px", md: "20px", lg: "25px" }}
      minW={"150px"}
    >
      <Heading
        width={"100%"}
        textAlign={"left"}
        size={"md"}
        fontWeight={"500"}
        pt="20px"
        fontSize={{ base: "16px", md: "18px", lg: "20px" }}
        textDecoration={"underline"}
      >
        Filter By Category
      </Heading>
      <Box
        marginLeft={"3%"}
        marginTop="8%"
        width="100%"
        fontSize={{ base: "16px", md: "18px", lg: "20px" }}
      >
        <Stack padding={"2%"} spacing={[2, 2]} direction={["column"]}>
          <Checkbox
            size="md"
            value={"Food"}
            colorScheme="green"
            borderColor="white.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Food")}
            fontSize={{ base: "12px", md: "18px", lg: "20px" }}
          >
            Food
          </Checkbox>
          <Checkbox
            size="md"
            value={"Movies"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="white.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Movies")}
          >
            Movies
          </Checkbox>
          <Checkbox
            size="md"
            value={"Animal"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="white.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Animal")}
          >
            Animal
          </Checkbox>
          <Checkbox
            size="md"
            value={"Technology"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="white.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Technology")}
          >
            Technology
          </Checkbox>

          <Checkbox
            size="md"
            value={"Cricket"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="white.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Cricket")}
          >
            Cricket
          </Checkbox>

          <Checkbox
            size="md"
            value={"Other"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="white.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Other")}
          >
            Other
          </Checkbox>
        </Stack>
      </Box>

      <Box>
        <RadioGroup
          onChange={setSort}
          value={sort}
          width={"100%"}
          defaultValue="2"
        >
          <Heading
            width={"100%"}
            textAlign={"left"}
            size={"md"}
            fontWeight={"500"}
            marginTop="20px"
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            textDecoration={"underline"}
            mb={"18px"}
          >
            Sort by Title
          </Heading>
          <Stack pl={"10px"} spacing={[1, 5]} direction={["column"]}>
            <Radio colorScheme="blue" value="title">
              Acc
            </Radio>
            <Radio colorScheme="blue" value="-title">
              Dec
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Filter_Sort;
