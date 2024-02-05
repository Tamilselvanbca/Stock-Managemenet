import productList from "../inventory/productList";

const customers = [{
    id:1,firstName: "Tamil",
    lastName: "Selvan",
    position: "Software Engineer",
    mobile: "+91 9715465762",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
},{
    id:2,firstName: "Manikandan",
    lastName: "Selvaraj",
    position: "Testing Engineer",
    mobile: "+6374828120",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
}
,{
    id:3,firstName: "Shankar",
    lastName: "Kumar",
    position: "Production",
    mobile: "+9867576876",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
},{
    id:4,firstName: "Karthick",
    lastName: "Thiyagi",
    position: "Software Engineer",
    mobile: "+9876543210",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
},{
    id:5,firstName: "kumari",
    lastName: "raja",
    position: "Software Engineer",
    mobile: "9876576852",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
}
,{
    id:6,firstName: "muniyandi",
    lastName: "kumar",
    position: "Ui developer",
    mobile: "97867875654",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
},{
    id:7,firstName: "Adhavan",
    lastName: "Thangarasu",
    position: "Security",
    mobile: "9715465762",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
},{
    id:8,firstName: "Umar",
    lastName: "Ahamad",
    position: "Painter",
    mobile: "7898765476",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
}
,{
    id:9,firstName: "Thangam",
    lastName: "RocketRaja",
    position: "Software Engineer",
    mobile: "9845675765",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
},{
    id:10,firstName: "sangeetha",
    lastName: "thangappan",
    position: "Software Engineer",
    mobile: "6780634568",
    orders:[{
        id: 1,
        products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],}
    ]
},
];
export default customers;