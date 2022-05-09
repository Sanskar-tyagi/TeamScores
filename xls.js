let xlsx = require("json-as-xlsx")
let dataEXcel = [
  {
    sheet: "Team_One",

    columns: [
      { label: "Name", value: "Name" }, // Top level data
      { label: "Rating", value:"rating"  }, // Custom format
      { label: "K|D|A", value:"KdA"  }, // Run functions
      { label: "K/D", value:"k_D" },
      { label: "HS%", value:"HSp"  },
    ],
    content: [T1_Players
        ],
  },
  {
    sheet: "Team_Two",
    columns: [
      { label: "Name", value: "Name1" }, // Top level data
      { label: "Rating", value:"rating1"  }, // Custom format
      { label: "K|D|A", value:"KdA1"  }, // Run functions
      { label: "K/D", value:"K_D1" },
      { label: "HS%", value:"HSp1"  },
    ],
    content: [ T2_Players
      
    ],
  },
]

let settings = {
  fileName: "APEC_Challegers", // Name of the resulting spreadsheet
  extraLength: 3, // A bigger number means that columns will be wider
  writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
}

xlsx(dataEXcel, settings) // Will download the excel file