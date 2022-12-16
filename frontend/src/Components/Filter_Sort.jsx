import {
  Box,
  Text,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  Divider,
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
    // console.log(e.target.value);
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
  }, [category, setSearchParams, sort]);

  return (
    <Box
      color={"white"}
      bg={"rgb(71, 93, 128)"}
      height={"100vh"}
      width={"20%"}
      pl={"25px"}
    >
      <Heading
        width={"100%"}
        textAlign={"left"}
        size={"md"}
        fontWeight={"500"}
        marginTop="20px"
        fontSize={{ base: "16px", md: "18px", lg: "20px" }}
      >
        Filter By Category
      </Heading>
      <Divider />
      <Box
        marginLeft={"3%"}
        marginTop="8%"
        width="70%"
        height={"150px"}
        fontSize={{ base: "16px", md: "18px", lg: "20px" }}
      >
        <Stack padding={"2%"} spacing={[2, 2]} direction={["column"]}>
          <Checkbox
            size="md"
            value={"food"}
            colorScheme="green"
            borderColor="black.600"
            onChange={handleFilter}
            defaultChecked={category.includes("food")}
            fontSize={{ base: "12px", md: "18px", lg: "20px" }}
          >
            Food
          </Checkbox>
          <Checkbox
            size="md"
            value={"Movies"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="black.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Movies")}
          >
            Movies
          </Checkbox>
          <Checkbox
            size="md"
            value={"Entertainment"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="black.1600"
            onChange={handleFilter}
            defaultChecked={category.includes("Entertainment")}
          >
            Entertainment
          </Checkbox>
          <Checkbox
            size="md"
            value={"Animal"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="black.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Animal")}
          >
            Animal
          </Checkbox>

          <Checkbox
            size="md"
            value={"Science"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="black.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Science")}
          >
            Science
          </Checkbox>
          <Checkbox
            size="md"
            value={"Technology"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="black.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Technology")}
          >
            Technology
          </Checkbox>

          <Checkbox
            size="md"
            value={" Economy"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="black.600"
            onChange={handleFilter}
            defaultChecked={category.includes(" Economy")}
          >
            Economy
          </Checkbox>

          <Checkbox
            size="md"
            value={"Other"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="black.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Other")}
          >
            Other
          </Checkbox>
        </Stack>
      </Box>

      <Text
        fontWeight={"500"}
        marginLeft={"3%"}
        marginTop={{ base: "80%", md: "75%", lg: "70%" }}
        fontSize={{ base: "16px", md: "18px", lg: "20px" }}
      >
        Sort By Title
      </Text>
      <Divider />
      <Box
        padding={"2%"}
        marginLeft={"3%"}
        marginTop="4%"
        width="70%"
        height={"100px"}
      >
        {/* <Text fontWeight={"800"} marginLeft={"2%"} marginTop="5%" fontSize={"20px"}>Filter By Category</Text> */}
        <RadioGroup marginTop={"8%"} onChange={setSort} value={sort}>
          <Stack direction="column">
            <Radio
              value={"title"}
              borderColor="black"
              defaultChecked={sort === "title"}
            >
              asc
            </Radio>
            <Radio
              value={"-title"}
              borderColor="black.600"
              defaultChecked={sort === "-title"}
            >
              dsc
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
    // </Box>
  );
};

export default Filter_Sort;
