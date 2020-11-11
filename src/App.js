import React, { Component } from "react";
import { fetchData } from "./api";
import ThemeButton from "./components/common/ThemeButton";
import Header from "./components/Header";
import CardStack from "./components/CardStack";
import CountryPicker from "./components/CountryPicker";
import DisplayChart from "./components/DisplayChart";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Flex,
  Stack,
} from "@chakra-ui/core";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <>
        <ThemeProvider>
          <ColorModeProvider>
            <CSSReset />
            <ThemeButton />
            <Flex align="center" justifyContent="center" marginTop={12}>
              <Stack>
                <Header country={country} />
                <CardStack data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <DisplayChart data={data} country={country} />
              </Stack>
            </Flex>
          </ColorModeProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
