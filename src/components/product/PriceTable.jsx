import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
} from "@mui/material";
import PriceProvider from "./PriceProvider";
import Price from "./Price";

function descendingComparator(a, b, orderBy) {
  if (orderBy === "priceProvider") {
    a = a.priceProvider.name;
    b = b.priceProvider.name;
  } else if (orderBy === "price") {
    a = a.amount;
    b = b.amount;
  }
  if (b < a) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "priceProvider",
    sortable: true,
    disablePadding: true,
    label: "Store",
  },
  {
    id: "price",
    sortable: true,
    disablePadding: false,
    label: "Price",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              <div>{headCell.label} </div>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function PriceTable({ prices }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("priceProvider");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={prices.length}
            />
            <TableBody>
              {prices
                .slice()
                .sort(getComparator(order, orderBy))
                .map((price, index) => {
                  return (
                    <TableRow hover key={price.id}>
                      <TableCell align="center">
                        <PriceProvider provider={price.priceProvider} />
                      </TableCell>
                      <TableCell align="center">
                        <Price price={price} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
