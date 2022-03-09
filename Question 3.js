var MARKET = [{cellId: 1, cell: 'Chicago'},
{cellId: 2,  cell: 'New York'},
{cellId: 3, cell: 'Los Angeles'},
{cellId: 4, cell: 'Atlanta'},
{cellId: 5, cell: 'Roanoke-Lynchburg'},
{cellId: 6, cell: 'Yourtown'}];

var CELLS = [{cellId: 1, cell: 'Men 12-17'},
{cellId: 2, cell: 'Men 18-24'},
{cellId: 3, cell: 'Men 25-34'},
{cellId: 4, cell: 'Men 35-49'},
{cellId: 5, cell: 'Men 50-54'},
{cellId: 6, cell: 'Women 12-17'},
{cellId: 7, cell: 'Women 18-24'},
{cellId: 8, cell: 'Women 25-34'},
{cellId: 9, cell: 'Women 35-49'},
{cellId: 10, cell: 'Women 50-54'}
];

var MARKET_POP = [{marketId: 1, cellId: 1}, {marketId: 1, cellId: 2}, {marketId: 2, cellId: 4},];

/* Function efficiently checks present values in MARKET_POP table against values in both MARKET and CELLS
table. Generated new object pairing both tables with their cellId values. When I created these arrays
I mistakenly made cellId the key for both ID values but the logic is the same irregardless of name.
*/
let populateTable = (mrkTable, cellTable, marketPop) => {
    for (let i = 0; i < mrkTable.length; i++) {
        for (let j = 0; j < cellTable.length; j++) {
            if (!marketPop.find((element) => element.marketId === mrkTable[i]["cellId"] && element.cellId === cellTable[j]["cellId"])) {  
              marketPop.push({marketId: mrkTable[i]["cellId"], cellId: cellTable[j]["cellId"] })   
            }

        }
  
    }
}
    
populateTable(MARKET, CELLS, MARKET_POP);


