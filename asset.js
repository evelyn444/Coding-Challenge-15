//Create the Asset Module

export const assets = [ // array of stocks
    {id: 1, name: 'Apple', type: 'stock', price: 230, quantity: 20},
    {id: 2, name: 'Amazon', type: 'stock', price: 200, quantity: 25},
    {id: 3, name: 'Nvidia', type: 'stock', price: 500, quantity: 40},
    {id: 4, name: 'Microsoft', type: 'stock', price: 300, quantity: 20}
];

export function getAssetById(id) { // returns asset details based on id
    return assets.find (asset => asset.id === id);
};