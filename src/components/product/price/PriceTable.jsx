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
  Button,
  Checkbox,
  FormControlLabel,
  Tooltip,
} from "@mui/material";
import PriceProvider from "./PriceProvider";
import Price from "./Price";
import AvailabilityStatus from "./AvailabilityStatus";
import PriceHistoryModal from "./history/PriceHistoryModal";
import { priceHistoryObjectToArray } from "../../../utils";
import PriceRangeInfo from "./PriceRangeInfo";

function descendingComparator(a, b, orderBy) {
  if (orderBy === "priceProvider") {
    a = a.priceProvider.name;
    b = b.priceProvider.name;
  } else if (orderBy === "price") {
    a = a.amount;
    b = b.amount;
  } else if (orderBy === "status") {
    a = a.availabilityStatus;
    b = b.availabilityStatus;
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
    label: "Магазин",
  },
  {
    id: "priceHistory",
    sortable: false,
    disablePadding: true,
    label: "Історія цін",
  },
  {
    id: "status",
    sortable: true,
    disablePadding: false,
    label: "Статус",
  },
  {
    id: "price",
    sortable: true,
    disablePadding: false,
    label: "Ціна",
  },
  {
    id: "purchase",
    sortable: false,
    disablePadding: false,
    label: "",
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

export default function PriceTable({ prices, priceHistory }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("priceProvider");
  const [filterNotAvailable, setFilterNotAvailable] = useState(true);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleFilterChange = (event) => {
    setFilterNotAvailable(event.target.checked);
  };

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Box sx={{ float: "right" }}>
          <FormControlLabel
            label="Відображати лише пропозиції, які є в наявності"
            control={
              <Checkbox
                onChange={handleFilterChange}
                checked={filterNotAvailable}
              />
            }
          />
        </Box>
        <TableContainer>
          <Table aria-labelledby="tableTitle" size={"medium"}>
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
                .filter((price) => {
                  if (filterNotAvailable) {
                    return price.availabilityStatus === "AVAILABLE";
                  }
                  return true;
                })
                .map((price) => {
                  const isAvailable = price.availabilityStatus === "AVAILABLE";
                  const providerPriceHistory = priceHistoryObjectToArray(
                    priceHistory
                  ).filter((priceHistoryEntry) => {
                    return (
                      priceHistoryEntry.priceProvider.id ===
                      price.priceProvider.id
                    );
                  });

                  return (
                    <TableRow hover key={price.id}>
                      <TableCell align="center" width={150}>
                        <PriceProvider provider={price.priceProvider} />
                      </TableCell>
                      <TableCell align="center">
                        <PriceRangeInfo priceHistory={providerPriceHistory} />
                        <PriceHistoryModal
                          priceHistory={providerPriceHistory}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <AvailabilityStatus
                          availabilityStatus={price.availabilityStatus}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Price price={price} />
                      </TableCell>
                      <TableCell align="right" width={100}>
                        <Tooltip
                          title="Товару немає в наявності"
                          disableHoverListener={isAvailable}
                        >
                          <span>
                            <Button
                              href={price.purchaseUrl}
                              target="_blank"
                              variant="contained"
                              disabled={!isAvailable}
                            >
                              Купити
                            </Button>
                          </span>
                        </Tooltip>
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
