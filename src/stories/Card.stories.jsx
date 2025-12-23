import Card from "../components/Card";
import products from "../data/products";
import { MemoryRouter } from "react-router-dom";

//Plantas como ejemplo
const dypsis = products.find((p) => p.name === "DYPSIS LUTESCENS");
const kalanchoe = products.find((p) => p.name === "KALANCHOE");
const ficusBambino = products.find(
  (p) => p.name === "FICUS LYRATA BAMBINO"
);

export default {
  title: "Componentes/Card",
  tags: ["autodocs"],
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    image: {
      control: "text",
      name: "Imagen",
    },
    name: {
      control: "text",
      name: "Nombre",
    },
    price: {
      control: "text",
      name: "Precio",
    },
    to: {
      table: { disable: true },
    },
    children: {
      control: "text",
      name: "Descripción extra",
    },
  },
};

export const MedianaGrande = {
    name: "Planta mediana/grande",
    args: {
      image: dypsis.image,
      name: dypsis.name,
      price: dypsis.price,
      to: `/plantas/${dypsis.id}`,
      children: dypsis.description,
    },
  };
  
  export const ConFlores = {
    name: "Planta con flores",
    args: {
      image: kalanchoe.image,
      name: kalanchoe.name,
      price: kalanchoe.price,
      to: `/plantas/${kalanchoe.id}`,
      children: kalanchoe.description,
    },
  };


  //Planta con información extra

  export const PlantaPequena = {
    name: "Planta pequeña",
    args: {
      image: ficusBambino.image,
      name: ficusBambino.name,
      price: ficusBambino.price,
      to: `/plantas/${ficusBambino.id}`,
      children: ficusBambino.information,
    },
  };
  
  