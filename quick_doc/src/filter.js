import React, { useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import {FormControl, CardHeader, CardContent, CardMedia} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



const drawerWidth = 340;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 340,
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      },
  }));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 850, //the width of selection menu
    },
  },
};

const doctorCardStyles = makeStyles(theme => ({
  grid: {
    marginLeft: 250,
    marginTop: 75,
    paddingLeft: 60,
  },
  card:{
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 450,
    height: 250,
    paddingTop: 20,
  },
  content:{
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
}));

const DoctorCards = ({doctors, settingdoctor, pagestate}) => {
    const classes = doctorCardStyles();
    return(
        <Grid container spacing={2} className={classes.grid}>       
        {doctors.map(doctor =>
          (<Grid item xs={6}>
            <Card className={classes.card}>
              <h1><strong data-cy="docname">{doctor.profile.first_name + " " + doctor.profile.last_name}</strong></h1>
              <CardMedia><img src={doctor.profile.image_url}></img></CardMedia>
              <CardContent className={classes.content}>Located in {doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state}
                <Button variant="contained" color="primary" size="large" onClick={function(event){settingdoctor.setdoc(doctor);pagestate.setpage(3)}}>View Doctor Bio</Button>
              </CardContent>
            </Card>
        </Grid>))}
       </Grid>
    )
}

export const FilterMenu =({pagestate,doctors,settingdoctor})=>{

  const classes = useStyles();
  const theme = useTheme();
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [spec, setSpec] = React.useState([]);
  const handleSpecChange = event => {
    setSpec(event.target.value);
  };
//   const handleSpecChangeMultiple = event => {
//     const { options } = event.target;
//     const value = [];
//     for (let i = 0, l = options.length; i < l; i += 1) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//     setSpec(value);
//   };
  const [insu, setInsu] = React.useState([]);
  const handleInsuChange = event => {
    setInsu(event.target.value);
  };
  const getSpecList =() =>{
    var specialties = doctors.map(doctor=>(doctor.specialties));
    var specialtiesSet = new Set();
    for (var i=0; i<specialties.length; i++){
        specialties[i].map(specialty=>(specialtiesSet.add(specialty.name)));
    }

    
    return Array.from(specialtiesSet)
}
const getInsuList =() =>{
    var insurances= doctors.map(doctor=>(doctor.insurances));
    var insuranceSet = new Set();
    for (var i=0; i<insurances.length;i++){
        insurances[i].map(insurance=>(insuranceSet.add(insurance.insurance_plan.name)));
    }
    
    return Array.from(insuranceSet)
}
const specialties_list = getSpecList()
const insurance_list = getInsuList()
console.log(specialties_list)
console.log(insurance_list)

const matchInsu = (doctor) =>{
    var flag = 0
    doctor.insurances.map(insurance=>(insu.includes(insurance.insurance_plan.name) ? flag = 1 : false))
    if (flag===0){
        return false
    }
    else{
        return true
    }
}
const matchSpec = (doctor) =>{
    var flag = 0
    doctor.specialties.map(specialty=>(spec.includes(specialty.name) ? flag = 1 : false))
    if (flag===0){
        return false
    }
    else{
        return true
    }
    
}
const doctorSelector = () =>{
    if (insu.length != 0 && spec.length != 0)
    {
        return doctors.filter(doctor=>matchInsu(doctor)).filter(doctor=>matchSpec(doctor));
    }
    else if (insu.length != 0)
    {
        return doctors.filter(doctor=>matchInsu(doctor));
    }
    else if (spec.length != 0)
    {
        return doctors.filter(doctor=>matchSpec(doctor));
    }
    else
    {
        return doctors;
    }
    
}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Quick Doc
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

            <ListItem key='specialties'>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              {/* <ListItemText primary={text} /> */}
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">specialties</InputLabel>
                    <Select
                        multiple
                        value={spec}
                        onChange={handleSpecChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                    {specialties_list.map(specialties => (
                    <MenuItem key={specialties} value={specialties}>
                        <Checkbox checked={spec.indexOf(specialties) > -1} />
                        <ListItemText primary={specialties} />
                    </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </ListItem>
            <Divider/>
            <ListItem key='insurance'>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              {/* <ListItemText primary={text} /> */}

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">Insurance</InputLabel>
                    <Select
                        multiple
                        value={insu}
                        onChange={handleInsuChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                    {insurance_list.map(insurance => (
                    <MenuItem key={insurance} value={insurance} >
                        <Checkbox checked={insu.indexOf(insurance) > -1} />
                        <ListItemText primary={insurance} />                    
                    </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </ListItem>
          {/* ))} */}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
          <DoctorCards doctors = {doctorSelector()} settingdoctor = {settingdoctor} pagestate ={pagestate} cardStyle={classes.card} />
      </main>
    </div>
  );
}