import { Box, LinearProgress, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { ProductCondition } from "../ProductCondition";
import { Price } from "../Price";
import { withRow } from "../../hoc";
import { useProducts } from "../../hooks";

// eslint-disable-next-line react/prop-types
const ProductImgae = ({ imageUrl, name }) => <img src={imageUrl} alt={name} />;
// eslint-disable-next-line react/prop-types
const ProductPrice = ({ price }) => <Price value={price} />;

// eslint-disable-next-line react/prop-types
const ProductDescription = ({ id, name, description }) => (
  <Box>
    <Link to={`/products/${id}`}>{name}</Link>
    <br />
    <Typography>{description}</Typography>
  </Box>
);
export default function HomePage() {
  const { isLoading, isError, data: products } = useProducts();

  if (isLoading) return <LinearProgress />;
  if (isError) return <>...Errooor</>;

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch("http://localhost:3001/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   fetchProducts();
  //   // .then((response) => response.json())
  //   // .then((data) => setProducts(data));
  // }, []);

  const columns = [
    {
      field: "imageUrl",
      headerName: "Image produit",
      renderCell: withRow(ProductImgae),
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      renderCell: withRow(ProductDescription),
    },
    {
      field: "price",
      headerName: "Prix",
      renderCell: withRow(ProductPrice),
    },
    {
      field: "condition",
      headerName: "Etat",
      renderCell: withRow(ProductCondition),
    },
    { field: "stock", headerName: "Stock" },
  ];
  return (
    <>
      <Typography variant="h1">HomePage</Typography>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          disableRowSelectionOnClick
          autoHeight
        />
      </Box>
    </>
  );
}
