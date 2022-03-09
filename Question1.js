let PROGRAM = [
  {
    programId: 1,
    stationId: 1,
    programName: "10 O'CLOCK NWS",
    flightDate: "3/11/1990",
  },
  {
    programId: 2,
    stationId: 1,
    programName: "ACCESS HOLLYWD",
    flightDate: "8/25/1991",
  },
  { programId: 3, stationId: 4, programName: "Jeop", flightDate: "6/30/1975" },
  {
    programId: 4,
    stationId: 3,
    programName: "C O' BRIEN-NBC Program",
    flightDate: "1/1/1989",
  },
  {
    programId: 5,
    stationId: 3,
    programName: "Frasier's",
    flightDate: "11/11/1991",
  },
  { programId: 6, stationId: 4, programName: "Barney", flightDate: "9/3/1966" },
  {
    programId: 7,
    stationId: 1,
    programName: "Just Shoot me",
    flightDate: "6/6/1996",
  },
  { programId: 8, stationId: 4, programName: "Wheel", flightDate: "6/30/1975" },
  {
    programId: 9,
    stationId: 3,
    programName: "Sesame Street",
    flightDate: "5/16/1971",
  },
];

/* Function sorts the table into alphabetical list and stores value in sortedTable. Then maps the 
  programName propery into an array, adds adds aprostrophes and then turns array into string.
  */

let ProcessProgramName = (Table) => {
  let sortedTable = Table.sort((a, b) => {
    let programNameA = a.programName;
    let programNameB = b.programName;
    if (programNameA < programNameB) {
      return -1;
    } else if (programNameA > programNameB) {
      return 1;
    }
    return 0;
  });

  let programsList = sortedTable.map((table) => {
    let program = table.programName;
    if (program.includes("'")) {
      program = program.replace("'", "''");
      return "'" + program + "'";
    }
    return "'" + program + "'";
  });
  programsList = programsList.toString();
  return programsList;
};

ProcessProgramName(PROGRAM);
