import React, { Component } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import { getLifetimeData } from "./services/lifetimeDataService";
import { getCountryData } from "./services/countryService";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await getLifetimeData();
    this.setState({ data });
  }

  setCountryData = async (country) => {
    const data = await getCountryData(country);
    this.setState({ data, country });
  };

  setLifetimeData = async () => {
    const data = await getLifetimeData();
    this.setState({ data, country: "" });
  };

  handleCountryChange = async (country) => {
    const originalData = this.state;

    try {
      if (country) {
        await this.setCountryData(country);
      } else {
        await this.setLifetimeData();
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("Failed to fetch country");
      }
      this.setState({ originalData });
    }
  };

  render() {
    const { data, country } = this.state;

    return (
      <>
        <ToastContainer />
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
