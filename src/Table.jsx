import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableCell1 = withStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
    fontSize: 14,
  },
}))(TableCell);
const StyledTableCell2 = withStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  // root: {
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // },
}))(TableRow);

function createData(id, name) {
  return { id, name};
}

const algorithms = [
  createData('GRA', 'GRASP'),
  createData('GA', 'Genetic Algorithm'),
  createData('TS', 'Tabu Search'),
  createData('SA', 'Simulated Annealing'),
  createData('ACO', 'Ant Colony'),
  createData('PSO', 'Particle Swarm'),
  createData('FA', 'Firefly Algorithm	')
];

const problems = [
  createData('TSP', 'Traveling Salesman'),
  createData('SAT', 'Satisfiability'),
  createData('JSP', 'Jobshop Sheduling'),
  createData('QAP', 'Quadratic Assignment'),
  createData('VRP', 'Vehicle Routing'),
  createData('GCP', 'Graph Colouring')
];

const cells = {
  'GRA':{'TSP':'~', 'SAT':'~', 'JSP':'', 'QAP':'', 'VRP':'', 'GCP':''},
  'GA': {'TSP':'OK', 'SAT':'OK', 'JSP':'OK', 'QAP':'', 'VRP':'', 'GCP':''},
  'TS': {'TSP':'OK', 'SAT':'OK', 'JSP':'OK', 'QAP':'~', 'VRP':'', 'GCP':''},
  'SA': {'TSP':'OK', 'SAT':'OK', 'JSP':'~', 'QAP':'~', 'VRP':'', 'GCP':''},
  'ACO':{'TSP':'OK', 'SAT':'OK', 'JSP':'x', 'QAP':'', 'VRP':'', 'GCP':''},
  'PSO':{'TSP':'~', 'SAT':'', 'JSP':'', 'QAP':'~', 'VRP':'', 'GCP':''},
  'FA': {'TSP':'~', 'SAT':'', 'JSP':'', 'QAP':'~', 'VRP':'', 'GCP':''},
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const renderResult = (result) => {
  switch(result) {
    case 'OK':      
      return <CheckCircleIcon color="secondary"/>;
    case '~':
      return <PauseCircleOutlineIcon color="primary"/>;
    case 'x':
      return <ErrorOutlineIcon color="primary" />;
    default:
  };
  return <span />;
};

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow key="head">
            <StyledTableCell1 width="200"></StyledTableCell1>
            {algorithms.map(row => (
              <StyledTableCell align="center" key={row.name}>{row.name}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {problems.map((problem) => (
            <StyledTableRow key={problem.id}>              
              <StyledTableCell2>
                {problem.name}
              </StyledTableCell2>
              {algorithms.map(algorithm => (
                <StyledTableCell align="center">{renderResult(cells[algorithm.id][problem.id])}</StyledTableCell>
              ))}              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
     </TableContainer>
  );
}

    /*<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell1></StyledTableCell1>
            {rows.map(column => (
              <StyledTableCell align="right">{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>              
              <StyledTableCell2>
                {row.name}
              </StyledTableCell2>
              {columns.map(column => (
                <StyledTableCell align="right">{cells[row.id][column]}</StyledTableCell>
              ))}              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  */