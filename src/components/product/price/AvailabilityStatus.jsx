const statusUkrainianTranslation = {
  AVAILABLE: "В наявності",
  OUT_OF_STOCK: "Закінчився",
};

const AvailabilityStatus = ({ availabilityStatus }) => {
  return <span>{statusUkrainianTranslation[availabilityStatus]}</span>;
};

export default AvailabilityStatus;
