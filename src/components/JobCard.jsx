import React, { useState } from 'react';
import { Card, Typography, Avatar, withStyles, Grid, Button } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  CardContainer: {
    padding: '20px',
    margin: '30px',
    backgroundColor: '#E1EBEE',
    maxWidth: '150px'
  },
  Image: {
    width: '250px',
    height: '250px',
    borderRadius: '50%'
  },
  Location: {
    fontSize: '20px',
    marginRight: '5px',
    color: 'green'
  },
  SkillButton: {
    marginRight: '3px',
    backgroundColor: "#008E97",
    color: "white"
  }
};

const JobCard = () => {
  const [showAdditionalSkills, setShowAdditionalSkills] = useState(false);
  const additionalSkills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6', 'Skill 7', 'Skill 8', 'Skill 9', 'Skill 10'];
  const defaultSkills = additionalSkills.slice(0, 3);
  const remainingSkills = additionalSkills.slice(3);

  const toggleAdditionalSkills = () => {
    setShowAdditionalSkills(prevState => !prevState);
  };

  return (
    <Card className={styles.CardContainer}>
      <Grid container spacing={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt="Person Image" src="https://img.freepik.com/free-photo/cheerful-business-woman-standing-isolated_171337-8492.jpg" className={styles.Image} />
            <div style={{ backgroundColor: 'lightblue', borderRadius: '25px', color: 'white', alignItems: "center", marginTop: '0', paddingLeft: "10px" }}>
              <Typography>Online</Typography>
            </div>
          </Grid>
          <Grid item>
            <div>
              <Typography>Web Designer | UI/UX Designer</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
              <LocationOnIcon className={styles.Location} />
              <Typography variant="body2">Lativa in Europe</Typography>
            </div>
          </Grid>
          <Grid style={{ position: "relative", left: "750px", top: "40px", borderLeft: "black" }}>
            <p><strong style={{ fontSize: "30px", marginLeft: "30px" }}>$10.00</strong>/hr</p>
            <p style={{ marginLeft: "50px" }}>Hourly Price</p>
            <Button style={{ background: "lightblue", color: "white", width: "145px" }}>Hire</Button>
          </Grid>
        </Grid>
        <Typography style={{ marginTop: "30px" }}>Has 10 relevant skills to your job</Typography>
        <Grid container style={{ marginTop: '10px' }}>
          <Grid item>
            <div>
              {showAdditionalSkills
                ? additionalSkills.map((skill, index) => (
                    <Button key={index} className={styles.SkillButton}>
                      {skill}
                    </Button>
                  ))
                : defaultSkills.map((skill, index) => (
                    <Button key={index} className={styles.SkillButton}>
                      {skill}
                    </Button>
                  ))
              }
              {!showAdditionalSkills && remainingSkills.length > 0 && (
                <Button onClick={toggleAdditionalSkills} style={{ margin: '5px' }}>
                  +{remainingSkills.length}
                </Button>
              )}
            </div>
          </Grid>
         </Grid>
      </Grid>
    </Card>
  );
};

export default withStyles(styles)(JobCard);
