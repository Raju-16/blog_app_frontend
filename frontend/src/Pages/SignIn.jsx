import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/AuthReducer/action";
import { LOGIN_USER_SUCCESS } from "../Redux/AuthReducer/actionType";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingfrom = location.state?.from?.pathname || "/";

  const handleOnSignIn = () => {
    if (email === "" || password === "") {
      alert("Please Fill All Credentials....");
    }
    if (email && password) {
      let payload;
      payload = {
        email,
        password,
      };
      dispatch(loginUser(payload)).then((res) => {
        if (res === LOGIN_USER_SUCCESS) {
          alert("Login Sucessfully");
          navigate(comingfrom, { replace: true });
        } else {
          alert("WRONG CREDENTIALS......");
        }
      });
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading color={"blue.500"} fontSize={"4xl"}>
            Sign in to your account
          </Heading>
          <br />
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              {/* <Checkbox>Remember me</Checkbox> */}
              <Flex width="100%">
                <Text ml={"200"}>Don't have an account?</Text>
                <Spacer />
                <Link color={"blue.500"}>Register</Link>
              </Flex>
            </Stack>
            <Button
              onClick={handleOnSignIn}
              colorScheme={"blue"}
              variant={"solid"}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
