import {
  Button,
  Input,
  Heading,
  Container,
  Center,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ComEthAddressContext } from "../../context/ComEthAddressContext";
import { useState, useContext } from "react";

const LoginTemplate = () => {
  const [address, setAddress] = useState("");
  const { setComEthAddress } = useContext(ComEthAddressContext);

  return (
    <>
      <Center>
        <Heading margin="3rem">Join ComEth</Heading>
      </Center>
      <Container>
        <Box boxShadow="dark-lg" w="35rem" rounded="lg">
          <Input
            boxShadow="lg"
            w="32rem"
            placeholder="enter Your ComEth address"
            margin="1rem"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Link to="/home">
            <Button
              margin="2rem"
              boxShadow="lg"
              onClick={setComEthAddress(address)}
            >
              Join Community
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default LoginTemplate;
