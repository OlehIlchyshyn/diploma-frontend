import { Paper, Divider, Typography, List, Grid } from "@mui/material";

const SpecsGroup = ({ groupName, properties }) => {
  return (
    <Paper sx={{ margin: 3 }}>
      {groupName === "" ? (
        <></>
      ) : (
        <Divider textAlign="left">
          <Typography variant="body1">{groupName}</Typography>
        </Divider>
      )}

      <List sx={{ marginX: 3 }}>
        {Object.entries(properties).map(([name, value]) => (
          <>
            <Grid container key={name} textAlign={"left"}>
              <Grid item xs={6} pl={1}>
                {name}
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                style={{ marginRight: "-1px" }}
              />
              <Grid item xs={6} pl={1}>
                {value.includes("<br>") ||
                value.includes("<br />") ||
                value.includes("<b>") ? (
                  <span dangerouslySetInnerHTML={{ __html: value }} />
                ) : (
                  value
                )}
              </Grid>
            </Grid>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

const TechSpecsTable = ({ techSpecs }) => {
  return (
    <Paper>
      <Typography variant="h5" align="left" pt={2} pl={5}>
        Технічні характеристики
      </Typography>
      {Object.entries(techSpecs).map(([groupName, groupProperties]) => {
        return (
          <SpecsGroup
            groupName={groupName}
            properties={groupProperties}
            key={groupName}
          />
        );
      })}
    </Paper>
  );
};

export default TechSpecsTable;
