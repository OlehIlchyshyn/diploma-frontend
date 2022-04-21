import { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import HistoryTrendGraph from "./HistoryTrendGraph";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  maxWidth: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PriceHistoryModal = ({ priceHistory }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="text" onClick={handleOpen}>
        Переглянути деталі
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HistoryTrendGraph priceHistory={priceHistory} />
        </Box>
      </Modal>
    </div>
  );
};

export default PriceHistoryModal;
