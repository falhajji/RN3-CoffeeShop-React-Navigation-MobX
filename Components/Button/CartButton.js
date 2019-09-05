import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text } from "native-base";

const CartButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => navigation.navigate("CoffeeCart")}>
      <Icon name="shoppingcart" type="AntDesign"></Icon>
    </Button>
  );
};

export default withNavigation(CartButton);
