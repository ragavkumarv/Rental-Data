// const newArr = [[100,101],[102,103],[104,105]]
// 								.map(val=>{			
// 														let innerFilter = val.filter(val=>val>102);
// 														console.log(innerFilter);
// 														return innerFilter;
// 														})
// 									.filter(val=>val.length>0);

// console.log(newArr);

const companies = [{
	"companyBasic": {
		"id": 659,
		"author": "Vlad",
		"name": "Sanchez",
		"aliasName": "Flowers",
		"businessType": "SULTRAXIN",
		"serviceType": "ICOLOGY",
		"industryType": "EXODOC",
		"noOfEmployees": 8,
		"accountOwner": "Marcella",
		"group": "NETROPIC",
		"logo": "http://placehold.it/32x32"
	},
	"companyRegistration": {
		"pfRegNo": 109,
		"esiRegNo": 546,
		"eccNo": 211,
		"panNo": 919,
		"vatNo": 527,
		"tanNO": 283,
		"serviceTaxNo": 679,
		"cstBstNo": 751
	},
	"mca": {
		"cinNo": 989,
		"rocCode": 506,
		"regNo": 863,
		"companyCategory": "SINGAVERA",
		"companySubCategory": "INTERODEO",
		"classOfCompany": "private",
		"authorizedCapital": "$1,019.46",
		"paidUpCapital": "$2,719.99",
		"noOfMember": 25,
		"dateOfIncorporation": "Sunday, October 2, 2016 9:47 PM",
		"listed": "not listed"
	},
	"bank": [{
		"accountNo": 820204,
		"accountType": "current",
		"ifscCode": "5848fe546675da641cc1b41d",
		"accountHoldersName": "Jacobs",
		"bankName": "REPETWIRE",
		"bankAddress": "993 Everett Avenue, Knowlton, Marshall Islands, 1221"
	}, {
		"accountNo": 234864,
		"accountType": "savings",
		"ifscCode": "5848fe54d03f6747c4a54d8a",
		"accountHoldersName": "Saunders",
		"bankName": "ACCUPHARM",
		"bankAddress": "545 Lake Street, Frystown, Colorado, 9257"
	}, {
		"accountNo": 392212,
		"accountType": "savings",
		"ifscCode": "5848fe548b9561a98089f868",
		"accountHoldersName": "Perry",
		"bankName": "FISHLAND",
		"bankAddress": "468 Pineapple Street, Brethren, North Carolina, 3790"
	}, {
		"accountNo": 551820,
		"accountType": "savings",
		"ifscCode": "5848fe54efd637c91f406a16",
		"accountHoldersName": "Rosa",
		"bankName": "NETBOOK",
		"bankAddress": "376 Minna Street, Talpa, Utah, 9118"
	}],
	"document": [{
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "pdf",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "pdf",
		"document": "http://placehold.it/32x32"
	}],
	"feedback": [{
		"question": "Lorem veniam amet velit et amet quis cillum do culpa",
		"options": "occaecat dolor incididunt id",
		"comment": "nisi irure cupidatat laboris eu voluptate excepteur do ad enim nostrud enim fugiat reprehenderit non magna ea consectetur esse aliquip"
	}, {
		"question": "exercitation dolore adipisicing dolor veniam laboris adipisicing veniam enim fugiat",
		"options": "ipsum magna laborum anim",
		"comment": "occaecat exercitation sunt esse adipisicing aute duis duis sit anim reprehenderit cupidatat culpa non ea ullamco quis est pariatur do"
	}, {
		"question": "eiusmod non anim ipsum proident consectetur incididunt do cupidatat laborum",
		"options": "exercitation irure aute est",
		"comment": "pariatur eu voluptate labore esse fugiat aute nisi sit ad ad est reprehenderit irure pariatur aliquip quis culpa mollit sint"
	}, {
		"question": "cupidatat officia proident ut magna deserunt aute ea deserunt sint",
		"options": "officia officia esse irure",
		"comment": "magna dolor ullamco dolor Lorem pariatur dolor proident esse nulla amet consequat eiusmod pariatur nulla fugiat tempor fugiat Lorem proident"
	}],
	"site": [{
		"addressLabel": 356,
		"addressLine1": "Ashland Place",
		"addressLine2": "Portland Avenue",
		"addressline3": 2945,
		"landmark": "ad enim",
		"city": "Jacksonburg",
		"state": "New Hampshire",
		"countrty": "velit",
		"pincode": 916630,
		"stdCode": 576269,
		"landline1": "+91 (972) 523-3395",
		"landline2": "+91 (953) 495-2554",
		"fax1": "+0422 (835) 594-2616",
		"fax2": "+0422 (981) 404-2134",
		"mobile1": 8021784718,
		"mobile2": 8744830932,
		"email1": "qui@proident.com",
		"email2": "adipisicing@ipsum.com",
		"addressType": "Office"
	}, {
		"addressLabel": 502,
		"addressLine1": "Cass Place",
		"addressLine2": "Sackett Street",
		"addressline3": 711,
		"landmark": "velit eiusmod",
		"city": "Hartsville/Hartley",
		"state": "Delaware",
		"countrty": "consequat",
		"pincode": 931919,
		"stdCode": 673491,
		"landline1": "+91 (988) 549-3910",
		"landline2": "+91 (866) 470-2354",
		"fax1": "+0422 (973) 466-2307",
		"fax2": "+0422 (900) 552-2884",
		"mobile1": 9420130050,
		"mobile2": 9283835692,
		"email1": "consequat@duis.com",
		"email2": "cillum@dolore.com",
		"addressType": "Office"
	}, {
		"addressLabel": 975,
		"addressLine1": "Clinton Avenue",
		"addressLine2": "Guider Avenue",
		"addressline3": 3036,
		"landmark": "id pariatur",
		"city": "Geyserville",
		"state": "New York",
		"countrty": "ut",
		"pincode": 499661,
		"stdCode": 634075,
		"landline1": "+91 (916) 455-2042",
		"landline2": "+91 (909) 565-3028",
		"fax1": "+0422 (895) 533-2591",
		"fax2": "+0422 (958) 539-3777",
		"mobile1": 9724424903,
		"mobile2": 9927610670,
		"email1": "velit@laboris.com",
		"email2": "laboris@proident.com",
		"addressType": "Office"
	}, {
		"addressLabel": 800,
		"addressLine1": "Amity Street",
		"addressLine2": "Kingsland Avenue",
		"addressline3": 1534,
		"landmark": "ullamco amet",
		"city": "Goochland",
		"state": "Arizona",
		"countrty": "adipisicing",
		"pincode": 815722,
		"stdCode": 523953,
		"landline1": "+91 (958) 475-2823",
		"landline2": "+91 (894) 511-3853",
		"fax1": "+0422 (812) 546-3830",
		"fax2": "+0422 (869) 598-2247",
		"mobile1": 9805087944,
		"mobile2": 7946940269,
		"email1": "adipisicing@ullamco.com",
		"email2": "pariatur@id.com",
		"addressType": "Office"
	}],
	"person": [{
		"firstName": "Evangeline",
		"lastName": "Waller",
		"dept": "OMNIGOG",
		"post": "JTO",
		"addressLabel": 489,
		"addressLine1": "Autumn Avenue",
		"addressLine2": "Prince Street",
		"addressline3": 1793,
		"landmark": "exercitation nostrud",
		"city": "Beaverdale",
		"state": "Connecticut",
		"countrty": "aliqua",
		"pincode": 984819,
		"stdCode": 668302,
		"landline1": "+91 (912) 552-3716",
		"landline2": "+91 (812) 518-3199",
		"fax1": "+0422 (997) 471-2918",
		"fax2": "+0422 (899) 591-2495",
		"mobile1": 7968454136,
		"mobile2": 9768042127,
		"email1": "laboris@commodo.com",
		"email2": "minim@in.com",
		"addressType": "home"
	}, {
		"firstName": "Janna",
		"lastName": "Hardy",
		"dept": "AUSTEX",
		"post": "AGM",
		"addressLabel": 488,
		"addressLine1": "Harkness Avenue",
		"addressLine2": "Williamsburg Street",
		"addressline3": 3494,
		"landmark": "sunt labore",
		"city": "Wheaton",
		"state": "Mississippi",
		"countrty": "do",
		"pincode": 628934,
		"stdCode": 969126,
		"landline1": "+91 (817) 530-2672",
		"landline2": "+91 (901) 501-2551",
		"fax1": "+0422 (940) 559-2146",
		"fax2": "+0422 (892) 463-2133",
		"mobile1": 7800444034,
		"mobile2": 8384460355,
		"email1": "excepteur@deserunt.com",
		"email2": "irure@consequat.com",
		"addressType": "office"
	}, {
		"firstName": "Knox",
		"lastName": "Cannon",
		"dept": "NIKUDA",
		"post": "DE",
		"addressLabel": 923,
		"addressLine1": "Hampton Place",
		"addressLine2": "Bay Avenue",
		"addressline3": 9418,
		"landmark": "quis officia",
		"city": "Coyote",
		"state": "Maryland",
		"countrty": "exercitation",
		"pincode": 576760,
		"stdCode": 798197,
		"landline1": "+91 (966) 462-2079",
		"landline2": "+91 (880) 502-3626",
		"fax1": "+0422 (804) 479-3754",
		"fax2": "+0422 (875) 427-3913",
		"mobile1": 8131107085,
		"mobile2": 9136044870,
		"email1": "laborum@irure.com",
		"email2": "sint@incididunt.com",
		"addressType": "office"
	}, {
		"firstName": "Gretchen",
		"lastName": "Turner",
		"dept": "MIRACULA",
		"post": "Manager",
		"addressLabel": 222,
		"addressLine1": "Lenox Road",
		"addressLine2": "Noll Street",
		"addressline3": 7415,
		"landmark": "dolor cillum",
		"city": "Bascom",
		"state": "Tennessee",
		"countrty": "aute",
		"pincode": 581832,
		"stdCode": 607224,
		"landline1": "+91 (845) 511-2782",
		"landline2": "+91 (835) 529-3193",
		"fax1": "+0422 (880) 478-3155",
		"fax2": "+0422 (918) 486-2515",
		"mobile1": 8425019702,
		"mobile2": 9961679399,
		"email1": "nulla@eu.com",
		"email2": "qui@amet.com",
		"addressType": "home"
	}]
}, {
	"companyBasic": {
		"id": 118,
		"author": "Nasta",
		"name": "Kelly",
		"aliasName": "Martinez",
		"businessType": "MENBRAIN",
		"serviceType": "FOSSIEL",
		"industryType": "SLUMBERIA",
		"noOfEmployees": 28,
		"accountOwner": "Mercado",
		"group": "PORTALIS",
		"logo": "http://placehold.it/32x32"
	},
	"companyRegistration": {
		"pfRegNo": 880,
		"esiRegNo": 810,
		"eccNo": 977,
		"panNo": 618,
		"vatNo": 721,
		"tanNO": 939,
		"serviceTaxNo": 553,
		"cstBstNo": 164
	},
	"mca": {
		"cinNo": 444,
		"rocCode": 836,
		"regNo": 583,
		"companyCategory": "COMBOGEN",
		"companySubCategory": "ADORNICA",
		"classOfCompany": "private",
		"authorizedCapital": "$3,536.46",
		"paidUpCapital": "$2,166.10",
		"noOfMember": 72,
		"dateOfIncorporation": "Tuesday, October 27, 2015 7:23 PM",
		"listed": "listed"
	},
	"bank": [{
		"accountNo": 305001,
		"accountType": "savings",
		"ifscCode": "5848fe548f938864ef39c77d",
		"accountHoldersName": "Sharlene",
		"bankName": "ARTIQ",
		"bankAddress": "118 Quentin Road, Celeryville, Iowa, 6677"
	}, {
		"accountNo": 892974,
		"accountType": "savings",
		"ifscCode": "5848fe54e3120cb2d2be2ede",
		"accountHoldersName": "Patton",
		"bankName": "MANTRO",
		"bankAddress": "189 Kingston Avenue, Fairhaven, Louisiana, 1723"
	}, {
		"accountNo": 341863,
		"accountType": "savings",
		"ifscCode": "5848fe5431658b67bf23aee2",
		"accountHoldersName": "Dickerson",
		"bankName": "FIBRODYNE",
		"bankAddress": "444 Tapscott Street, Ruffin, Palau, 3435"
	}, {
		"accountNo": 834679,
		"accountType": "savings",
		"ifscCode": "5848fe549e1a974525fd4094",
		"accountHoldersName": "Ellison",
		"bankName": "QUILITY",
		"bankAddress": "165 Bush Street, Wakulla, New Jersey, 6970"
	}],
	"document": [{
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "pdf",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}],
	"feedback": [{
		"question": "ad enim exercitation qui eu aliqua nulla anim cillum consectetur",
		"options": "consequat irure Lorem eiusmod",
		"comment": "elit est et non irure mollit laborum enim aliqua aute mollit reprehenderit irure culpa non anim exercitation labore et ipsum"
	}, {
		"question": "ad ullamco do sit aliquip eu duis anim magna non",
		"options": "cillum ad sint quis",
		"comment": "ea anim magna ad id adipisicing sit aliqua laborum duis labore in ullamco ullamco ut ea do laborum officia aute"
	}, {
		"question": "id est aliquip nostrud non ea ad quis fugiat ut",
		"options": "consectetur cillum fugiat ex",
		"comment": "est et est aute fugiat aliqua et elit laborum proident eiusmod aute adipisicing ad eu exercitation ex labore officia incididunt"
	}, {
		"question": "quis sint labore pariatur minim cillum tempor labore eiusmod culpa",
		"options": "consectetur elit incididunt qui",
		"comment": "laborum veniam est ad mollit pariatur ut id proident laborum occaecat do irure minim pariatur velit ullamco velit exercitation dolor"
	}],
	"site": [{
		"addressLabel": 446,
		"addressLine1": "Mersereau Court",
		"addressLine2": "Jackson Court",
		"addressline3": 9586,
		"landmark": "ea consequat",
		"city": "Snelling",
		"state": "Pennsylvania",
		"countrty": "in",
		"pincode": 478409,
		"stdCode": 870064,
		"landline1": "+91 (977) 551-2413",
		"landline2": "+91 (939) 502-3914",
		"fax1": "+0422 (823) 600-2231",
		"fax2": "+0422 (994) 522-3035",
		"mobile1": 8226001412,
		"mobile2": 9195516194,
		"email1": "nisi@duis.com",
		"email2": "exercitation@adipisicing.com",
		"addressType": "Office"
	}, {
		"addressLabel": 295,
		"addressLine1": "Jay Street",
		"addressLine2": "Auburn Place",
		"addressline3": 2523,
		"landmark": "quis fugiat",
		"city": "Kingstowne",
		"state": "Guam",
		"countrty": "cillum",
		"pincode": 780478,
		"stdCode": 779843,
		"landline1": "+91 (821) 540-2979",
		"landline2": "+91 (936) 406-2760",
		"fax1": "+0422 (892) 588-2670",
		"fax2": "+0422 (856) 413-3598",
		"mobile1": 9134953121,
		"mobile2": 9707957623,
		"email1": "minim@ea.com",
		"email2": "sit@minim.com",
		"addressType": "Home"
	}, {
		"addressLabel": 832,
		"addressLine1": "Montgomery Street",
		"addressLine2": "Harbor Court",
		"addressline3": 3620,
		"landmark": "est in",
		"city": "Garfield",
		"state": "Kentucky",
		"countrty": "voluptate",
		"pincode": 806783,
		"stdCode": 302784,
		"landline1": "+91 (866) 431-2599",
		"landline2": "+91 (857) 469-3557",
		"fax1": "+0422 (845) 401-2678",
		"fax2": "+0422 (837) 519-2517",
		"mobile1": 9124062761,
		"mobile2": 8256608827,
		"email1": "excepteur@veniam.com",
		"email2": "voluptate@eu.com",
		"addressType": "Office"
	}, {
		"addressLabel": 552,
		"addressLine1": "Kossuth Place",
		"addressLine2": "Abbey Court",
		"addressline3": 9424,
		"landmark": "ex qui",
		"city": "Allison",
		"state": "Vermont",
		"countrty": "amet",
		"pincode": 106257,
		"stdCode": 896679,
		"landline1": "+91 (826) 538-3846",
		"landline2": "+91 (882) 537-2069",
		"fax1": "+0422 (972) 402-3450",
		"fax2": "+0422 (998) 553-2745",
		"mobile1": 8087780352,
		"mobile2": 8025635062,
		"email1": "velit@labore.com",
		"email2": "Lorem@nisi.com",
		"addressType": "Home"
	}],
	"person": [{
		"firstName": "Aguilar",
		"lastName": "Schultz",
		"dept": "RODEMCO",
		"post": "DE",
		"addressLabel": 285,
		"addressLine1": "Brown Street",
		"addressLine2": "Lamont Court",
		"addressline3": 7367,
		"landmark": "excepteur adipisicing",
		"city": "Kanauga",
		"state": "Alabama",
		"countrty": "eiusmod",
		"pincode": 723047,
		"stdCode": 793075,
		"landline1": "+91 (975) 543-3554",
		"landline2": "+91 (912) 575-3377",
		"fax1": "+0422 (968) 583-3765",
		"fax2": "+0422 (917) 409-3015",
		"mobile1": 9726817546,
		"mobile2": 9239505769,
		"email1": "pariatur@anim.com",
		"email2": "mollit@deserunt.com",
		"addressType": "home"
	}, {
		"firstName": "Serena",
		"lastName": "Sparks",
		"dept": "ENVIRE",
		"post": "AGM",
		"addressLabel": 414,
		"addressLine1": "Hemlock Street",
		"addressLine2": "Reeve Place",
		"addressline3": 1116,
		"landmark": "laboris esse",
		"city": "Thynedale",
		"state": "West Virginia",
		"countrty": "pariatur",
		"pincode": 298766,
		"stdCode": 670288,
		"landline1": "+91 (955) 504-2998",
		"landline2": "+91 (881) 544-3874",
		"fax1": "+0422 (914) 576-2756",
		"fax2": "+0422 (844) 402-2102",
		"mobile1": 8431783181,
		"mobile2": 9310965485,
		"email1": "aute@sunt.com",
		"email2": "excepteur@aliquip.com",
		"addressType": "office"
	}, {
		"firstName": "Sasha",
		"lastName": "Russell",
		"dept": "EXOTECHNO",
		"post": "JTO",
		"addressLabel": 774,
		"addressLine1": "Ocean Avenue",
		"addressLine2": "Covert Street",
		"addressline3": 4526,
		"landmark": "culpa elit",
		"city": "Nicholson",
		"state": "Northern Mariana Islands",
		"countrty": "fugiat",
		"pincode": 180000,
		"stdCode": 355441,
		"landline1": "+91 (829) 495-3341",
		"landline2": "+91 (973) 430-2187",
		"fax1": "+0422 (961) 526-2374",
		"fax2": "+0422 (947) 508-3623",
		"mobile1": 9279738444,
		"mobile2": 8777804160,
		"email1": "veniam@minim.com",
		"email2": "id@est.com",
		"addressType": "home"
	}, {
		"firstName": "Dixie",
		"lastName": "Lowery",
		"dept": "XSPORTS",
		"post": "Manager",
		"addressLabel": 413,
		"addressLine1": "Clymer Street",
		"addressLine2": "Commercial Street",
		"addressline3": 9918,
		"landmark": "sint cillum",
		"city": "Hampstead",
		"state": "Indiana",
		"countrty": "reprehenderit",
		"pincode": 152219,
		"stdCode": 393484,
		"landline1": "+91 (896) 582-2467",
		"landline2": "+91 (930) 447-2514",
		"fax1": "+0422 (974) 550-3917",
		"fax2": "+0422 (888) 538-2565",
		"mobile1": 9550147257,
		"mobile2": 9828405570,
		"email1": "anim@ex.com",
		"email2": "ullamco@incididunt.com",
		"addressType": "office"
	}]
}, {
	"companyBasic": {
		"id": 538,
		"author": "Andrey",
		"name": "Lily",
		"aliasName": "Rivas",
		"businessType": "LUNCHPAD",
		"serviceType": "EXTRAWEAR",
		"industryType": "ANIMALIA",
		"noOfEmployees": 33,
		"accountOwner": "Snow",
		"group": "NIPAZ",
		"logo": "http://placehold.it/32x32"
	},
	"companyRegistration": {
		"pfRegNo": 625,
		"esiRegNo": 565,
		"eccNo": 589,
		"panNo": 389,
		"vatNo": 809,
		"tanNO": 728,
		"serviceTaxNo": 115,
		"cstBstNo": 158
	},
	"mca": {
		"cinNo": 677,
		"rocCode": 987,
		"regNo": 402,
		"companyCategory": "COGNICODE",
		"companySubCategory": "ROUGHIES",
		"classOfCompany": "private",
		"authorizedCapital": "$1,213.09",
		"paidUpCapital": "$3,947.70",
		"noOfMember": 32,
		"dateOfIncorporation": "Sunday, February 23, 2014 9:01 PM",
		"listed": "not listed"
	},
	"bank": [{
		"accountNo": 236067,
		"accountType": "current",
		"ifscCode": "5848fe54b9fbb0929e248827",
		"accountHoldersName": "Wilkinson",
		"bankName": "ZOID",
		"bankAddress": "565 Stillwell Place, Fairmount, North Dakota, 1444"
	}, {
		"accountNo": 959749,
		"accountType": "current",
		"ifscCode": "5848fe54adeea4b89168251b",
		"accountHoldersName": "Cardenas",
		"bankName": "SPORTAN",
		"bankAddress": "522 Schermerhorn Street, Hiseville, Nevada, 1658"
	}, {
		"accountNo": 279034,
		"accountType": "current",
		"ifscCode": "5848fe5461bd3e84eb7da748",
		"accountHoldersName": "Delores",
		"bankName": "FURNAFIX",
		"bankAddress": "879 Coleman Street, Ironton, California, 1887"
	}, {
		"accountNo": 356819,
		"accountType": "savings",
		"ifscCode": "5848fe5443c455f43e92287d",
		"accountHoldersName": "Mooney",
		"bankName": "LUXURIA",
		"bankAddress": "554 Lancaster Avenue, Rodanthe, Rhode Island, 5728"
	}],
	"document": [{
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "pdf",
		"document": "http://placehold.it/32x32"
	}],
	"feedback": [{
		"question": "non incididunt culpa aliquip magna ea occaecat cillum esse do",
		"options": "nostrud laborum dolore ea",
		"comment": "id aliquip sit deserunt labore magna proident excepteur sint incididunt occaecat laborum eu officia nulla excepteur cupidatat ullamco eu minim"
	}, {
		"question": "aliqua fugiat consectetur minim pariatur consectetur do laborum est ea",
		"options": "eu occaecat proident ea",
		"comment": "minim dolor aute reprehenderit occaecat ipsum est nisi nulla excepteur pariatur ex eu duis aliquip eiusmod incididunt aute in sit"
	}, {
		"question": "et labore nisi et sint aliquip cupidatat duis tempor cupidatat",
		"options": "cupidatat Lorem laborum sit",
		"comment": "voluptate ipsum ad eu eiusmod sit voluptate nostrud pariatur eu minim officia aliquip nisi irure id fugiat sint non ipsum"
	}, {
		"question": "nisi nisi nostrud nisi labore non ad ea labore id",
		"options": "eu sunt ex magna",
		"comment": "qui consequat enim laborum incididunt ullamco dolore dolore dolore voluptate ullamco reprehenderit dolor minim est cupidatat velit aute enim laboris"
	}],
	"site": [{
		"addressLabel": 676,
		"addressLine1": "Homecrest Avenue",
		"addressLine2": "Hausman Street",
		"addressline3": 2181,
		"landmark": "non est",
		"city": "Bentonville",
		"state": "Alaska",
		"countrty": "incididunt",
		"pincode": 466696,
		"stdCode": 369087,
		"landline1": "+91 (877) 416-2088",
		"landline2": "+91 (820) 414-2997",
		"fax1": "+0422 (839) 411-2525",
		"fax2": "+0422 (983) 525-2421",
		"mobile1": 8056274146,
		"mobile2": 7864625178,
		"email1": "aute@ad.com",
		"email2": "eu@in.com",
		"addressType": "Office"
	}, {
		"addressLabel": 748,
		"addressLine1": "Meserole Avenue",
		"addressLine2": "Locust Avenue",
		"addressline3": 4744,
		"landmark": "proident eu",
		"city": "Templeton",
		"state": "South Carolina",
		"countrty": "amet",
		"pincode": 897219,
		"stdCode": 120781,
		"landline1": "+91 (821) 553-2541",
		"landline2": "+91 (955) 455-2382",
		"fax1": "+0422 (957) 565-3700",
		"fax2": "+0422 (878) 450-3658",
		"mobile1": 9109661202,
		"mobile2": 9720725895,
		"email1": "id@reprehenderit.com",
		"email2": "voluptate@enim.com",
		"addressType": "Home"
	}, {
		"addressLabel": 760,
		"addressLine1": "Townsend Street",
		"addressLine2": "Virginia Place",
		"addressline3": 9692,
		"landmark": "labore excepteur",
		"city": "Wescosville",
		"state": "Georgia",
		"countrty": "ullamco",
		"pincode": 115188,
		"stdCode": 672903,
		"landline1": "+91 (939) 502-3358",
		"landline2": "+91 (812) 492-2938",
		"fax1": "+0422 (975) 439-2626",
		"fax2": "+0422 (871) 463-2198",
		"mobile1": 8869795224,
		"mobile2": 8379926189,
		"email1": "id@proident.com",
		"email2": "mollit@exercitation.com",
		"addressType": "Home"
	}, {
		"addressLabel": 346,
		"addressLine1": "Varick Street",
		"addressLine2": "College Place",
		"addressline3": 9585,
		"landmark": "fugiat et",
		"city": "Bowden",
		"state": "Texas",
		"countrty": "nulla",
		"pincode": 652629,
		"stdCode": 419637,
		"landline1": "+91 (959) 439-2028",
		"landline2": "+91 (852) 443-2309",
		"fax1": "+0422 (876) 522-3853",
		"fax2": "+0422 (992) 496-3768",
		"mobile1": 9136260900,
		"mobile2": 9480930958,
		"email1": "ullamco@occaecat.com",
		"email2": "magna@duis.com",
		"addressType": "Home"
	}],
	"person": [{
		"firstName": "Mabel",
		"lastName": "Mayo",
		"dept": "NEUROCELL",
		"post": "Manager",
		"addressLabel": 181,
		"addressLine1": "Sutton Street",
		"addressLine2": "Hinckley Place",
		"addressline3": 9582,
		"landmark": "velit officia",
		"city": "Ellerslie",
		"state": "Kansas",
		"countrty": "ut",
		"pincode": 597871,
		"stdCode": 516530,
		"landline1": "+91 (976) 425-2384",
		"landline2": "+91 (829) 459-2100",
		"fax1": "+0422 (817) 450-2249",
		"fax2": "+0422 (868) 552-2069",
		"mobile1": 8563082705,
		"mobile2": 8424932891,
		"email1": "exercitation@ut.com",
		"email2": "sint@irure.com",
		"addressType": "office"
	}, {
		"firstName": "Garrison",
		"lastName": "Berry",
		"dept": "ZILENCIO",
		"post": "Manager",
		"addressLabel": 317,
		"addressLine1": "Arlington Place",
		"addressLine2": "Lloyd Street",
		"addressline3": 1400,
		"landmark": "tempor adipisicing",
		"city": "Oberlin",
		"state": "Federated States Of Micronesia",
		"countrty": "anim",
		"pincode": 441045,
		"stdCode": 403925,
		"landline1": "+91 (951) 511-3662",
		"landline2": "+91 (990) 509-3996",
		"fax1": "+0422 (898) 466-2660",
		"fax2": "+0422 (931) 443-3769",
		"mobile1": 8694141159,
		"mobile2": 8183072996,
		"email1": "Lorem@irure.com",
		"email2": "nulla@nisi.com",
		"addressType": "office"
	}, {
		"firstName": "Calderon",
		"lastName": "Harper",
		"dept": "CORPULSE",
		"post": "JTO",
		"addressLabel": 934,
		"addressLine1": "Keen Court",
		"addressLine2": "Lee Avenue",
		"addressline3": 8557,
		"landmark": "minim dolor",
		"city": "Healy",
		"state": "Wyoming",
		"countrty": "voluptate",
		"pincode": 563497,
		"stdCode": 621807,
		"landline1": "+91 (866) 577-2064",
		"landline2": "+91 (899) 504-2714",
		"fax1": "+0422 (911) 496-2008",
		"fax2": "+0422 (938) 435-3155",
		"mobile1": 9687919129,
		"mobile2": 9702824356,
		"email1": "enim@veniam.com",
		"email2": "ipsum@ipsum.com",
		"addressType": "home"
	}, {
		"firstName": "Johanna",
		"lastName": "Wong",
		"dept": "ZENCO",
		"post": "JTO",
		"addressLabel": 566,
		"addressLine1": "Garland Court",
		"addressLine2": "Lombardy Street",
		"addressline3": 7966,
		"landmark": "pariatur ad",
		"city": "Tyro",
		"state": "South Dakota",
		"countrty": "velit",
		"pincode": 165647,
		"stdCode": 142065,
		"landline1": "+91 (811) 439-2261",
		"landline2": "+91 (961) 572-2460",
		"fax1": "+0422 (990) 589-2504",
		"fax2": "+0422 (900) 537-3063",
		"mobile1": 9681205231,
		"mobile2": 9214106634,
		"email1": "ut@duis.com",
		"email2": "aute@eu.com",
		"addressType": "office"
	}]
}, {
	"companyBasic": {
		"id": 674,
		"author": "Andrey",
		"name": "Tanisha",
		"aliasName": "Whitfield",
		"businessType": "ZYTREK",
		"serviceType": "TECHMANIA",
		"industryType": "LOTRON",
		"noOfEmployees": 81,
		"accountOwner": "Parker",
		"group": "FIBEROX",
		"logo": "http://placehold.it/32x32"
	},
	"companyRegistration": {
		"pfRegNo": 149,
		"esiRegNo": 224,
		"eccNo": 625,
		"panNo": 952,
		"vatNo": 170,
		"tanNO": 841,
		"serviceTaxNo": 404,
		"cstBstNo": 658
	},
	"mca": {
		"cinNo": 650,
		"rocCode": 898,
		"regNo": 360,
		"companyCategory": "PYRAMAX",
		"companySubCategory": "TURNABOUT",
		"classOfCompany": "public",
		"authorizedCapital": "$1,418.87",
		"paidUpCapital": "$2,187.27",
		"noOfMember": 62,
		"dateOfIncorporation": "Saturday, February 28, 2015 4:09 PM",
		"listed": "listed"
	},
	"bank": [{
		"accountNo": 428546,
		"accountType": "current",
		"ifscCode": "5848fe543b42ed209bfe2ba9",
		"accountHoldersName": "Rosalie",
		"bankName": "PIVITOL",
		"bankAddress": "487 Tompkins Place, Cressey, Virginia, 3616"
	}, {
		"accountNo": 268785,
		"accountType": "current",
		"ifscCode": "5848fe546e44a85e12cd79c1",
		"accountHoldersName": "Klein",
		"bankName": "ROTODYNE",
		"bankAddress": "293 Jamaica Avenue, Klagetoh, Arkansas, 5728"
	}, {
		"accountNo": 929349,
		"accountType": "current",
		"ifscCode": "5848fe5494e241a9a099934f",
		"accountHoldersName": "Earnestine",
		"bankName": "CANDECOR",
		"bankAddress": "231 Prospect Avenue, Bloomington, Hawaii, 4836"
	}, {
		"accountNo": 355417,
		"accountType": "current",
		"ifscCode": "5848fe54335ed2820ec2fd01",
		"accountHoldersName": "Wilder",
		"bankName": "BRISTO",
		"bankAddress": "914 Village Court, Sexton, American Samoa, 7023"
	}],
	"document": [{
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "pdf",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "word",
		"document": "http://placehold.it/32x32"
	}, {
		"documentType": "pdf",
		"document": "http://placehold.it/32x32"
	}],
	"feedback": [{
		"question": "aliquip incididunt est do deserunt in cupidatat id sit nisi",
		"options": "ea dolor mollit incididunt",
		"comment": "ut veniam mollit laborum aute ullamco esse sint et veniam ex Lorem mollit veniam amet reprehenderit incididunt veniam eu laboris"
	}, {
		"question": "cillum incididunt enim reprehenderit nisi mollit sunt anim esse incididunt",
		"options": "cillum dolore excepteur aliqua",
		"comment": "culpa qui esse voluptate qui elit voluptate ipsum nisi nostrud ea consectetur quis veniam officia aliquip ad quis do labore"
	}, {
		"question": "deserunt adipisicing deserunt anim ad cupidatat exercitation nulla ipsum non",
		"options": "pariatur amet nisi esse",
		"comment": "non voluptate quis non do ex sit dolor sint eu exercitation sunt nisi officia consectetur consequat culpa veniam amet est"
	}, {
		"question": "aliqua incididunt cillum laborum occaecat quis nisi anim sunt ea",
		"options": "magna commodo ea eu",
		"comment": "qui eiusmod reprehenderit qui proident occaecat reprehenderit pariatur deserunt in ad proident veniam minim nulla pariatur reprehenderit excepteur exercitation veniam"
	}],
	"site": [{
		"addressLabel": 877,
		"addressLine1": "Battery Avenue",
		"addressLine2": "Sunnyside Avenue",
		"addressline3": 7072,
		"landmark": "nisi excepteur",
		"city": "Winston",
		"state": "Ohio",
		"countrty": "ipsum",
		"pincode": 162558,
		"stdCode": 275041,
		"landline1": "+91 (981) 530-2395",
		"landline2": "+91 (878) 481-3690",
		"fax1": "+0422 (931) 550-2143",
		"fax2": "+0422 (926) 450-2391",
		"mobile1": 9348372044,
		"mobile2": 9150575702,
		"email1": "est@aute.com",
		"email2": "excepteur@nulla.com",
		"addressType": "Home"
	}, {
		"addressLabel": 812,
		"addressLine1": "Ryder Street",
		"addressLine2": "Hewes Street",
		"addressline3": 9656,
		"landmark": "aliquip excepteur",
		"city": "Tetherow",
		"state": "Washington",
		"countrty": "ea",
		"pincode": 623060,
		"stdCode": 935124,
		"landline1": "+91 (943) 515-2823",
		"landline2": "+91 (952) 568-3853",
		"fax1": "+0422 (968) 453-2860",
		"fax2": "+0422 (875) 589-3654",
		"mobile1": 7897671529,
		"mobile2": 9717446953,
		"email1": "labore@aliquip.com",
		"email2": "esse@nisi.com",
		"addressType": "Home"
	}, {
		"addressLabel": 821,
		"addressLine1": "Sedgwick Street",
		"addressLine2": "Rutledge Street",
		"addressline3": 166,
		"landmark": "culpa cillum",
		"city": "Watrous",
		"state": "Nebraska",
		"countrty": "magna",
		"pincode": 982129,
		"stdCode": 235063,
		"landline1": "+91 (901) 578-2510",
		"landline2": "+91 (948) 465-3173",
		"fax1": "+0422 (956) 433-2243",
		"fax2": "+0422 (975) 433-2452",
		"mobile1": 7850985455,
		"mobile2": 9477477540,
		"email1": "elit@commodo.com",
		"email2": "nisi@tempor.com",
		"addressType": "Office"
	}, {
		"addressLabel": 762,
		"addressLine1": "Nassau Street",
		"addressLine2": "Doughty Street",
		"addressline3": 801,
		"landmark": "aliquip eu",
		"city": "Mulberry",
		"state": "Massachusetts",
		"countrty": "eiusmod",
		"pincode": 756016,
		"stdCode": 301041,
		"landline1": "+91 (981) 451-2424",
		"landline2": "+91 (888) 598-3577",
		"fax1": "+0422 (853) 448-3150",
		"fax2": "+0422 (951) 459-3887",
		"mobile1": 8295214478,
		"mobile2": 9635812144,
		"email1": "deserunt@cillum.com",
		"email2": "voluptate@aliqua.com",
		"addressType": "Office"
	}],
	"person": [{
		"firstName": "Tyler",
		"lastName": "Glass",
		"dept": "VANTAGE",
		"post": "Manager",
		"addressLabel": 910,
		"addressLine1": "Beadel Street",
		"addressLine2": "Bay Street",
		"addressline3": 1219,
		"landmark": "elit dolore",
		"city": "Carlton",
		"state": "Michigan",
		"countrty": "laborum",
		"pincode": 771477,
		"stdCode": 333739,
		"landline1": "+91 (957) 524-2744",
		"landline2": "+91 (904) 470-3695",
		"fax1": "+0422 (892) 540-3094",
		"fax2": "+0422 (802) 504-3160",
		"mobile1": 9698355994,
		"mobile2": 9432821986,
		"email1": "enim@sunt.com",
		"email2": "sunt@aute.com",
		"addressType": "office"
	}, {
		"firstName": "Angelita",
		"lastName": "Solis",
		"dept": "SHOPABOUT",
		"post": "JTO",
		"addressLabel": 491,
		"addressLine1": "Arkansas Drive",
		"addressLine2": "Concord Street",
		"addressline3": 5767,
		"landmark": "fugiat eiusmod",
		"city": "Bendon",
		"state": "Florida",
		"countrty": "ut",
		"pincode": 423196,
		"stdCode": 195213,
		"landline1": "+91 (837) 589-3278",
		"landline2": "+91 (988) 523-3284",
		"fax1": "+0422 (927) 560-2836",
		"fax2": "+0422 (864) 491-3818",
		"mobile1": 8012197975,
		"mobile2": 9472751159,
		"email1": "eiusmod@aute.com",
		"email2": "aliqua@nulla.com",
		"addressType": "home"
	}, {
		"firstName": "Erna",
		"lastName": "Richard",
		"dept": "ECOSYS",
		"post": "Manager",
		"addressLabel": 919,
		"addressLine1": "Brooklyn Avenue",
		"addressLine2": "Folsom Place",
		"addressline3": 1654,
		"landmark": "proident amet",
		"city": "Stockdale",
		"state": "Virgin Islands",
		"countrty": "id",
		"pincode": 515844,
		"stdCode": 932898,
		"landline1": "+91 (903) 591-2208",
		"landline2": "+91 (893) 478-3620",
		"fax1": "+0422 (913) 600-2628",
		"fax2": "+0422 (917) 590-3903",
		"mobile1": 9955178576,
		"mobile2": 9244661030,
		"email1": "culpa@sint.com",
		"email2": "labore@occaecat.com",
		"addressType": "home"
	}, {
		"firstName": "Lina",
		"lastName": "Serrano",
		"dept": "NEOCENT",
		"post": "CGM",
		"addressLabel": 798,
		"addressLine1": "Melrose Street",
		"addressLine2": "Degraw Street",
		"addressline3": 3061,
		"landmark": "sit fugiat",
		"city": "Santel",
		"state": "New Mexico",
		"countrty": "ullamco",
		"pincode": 802828,
		"stdCode": 915999,
		"landline1": "+91 (930) 460-3546",
		"landline2": "+91 (869) 460-2943",
		"fax1": "+0422 (929) 515-2202",
		"fax2": "+0422 (988) 543-2493",
		"mobile1": 9877078759,
		"mobile2": 7896657335,
		"email1": "ipsum@nostrud.com",
		"email2": "adipisicing@consequat.com",
		"addressType": "office"
	}]
}]

//const newCompanies = companies.filter(company=>company.site.filter(site=>console.log(site)));
// const rmAddressLabel=762;
// const newCompanies = companies.filter(company=>{
// 																	let companySite= company.site
// 																													.filter(site=>site.addressLabel!=rmAddressLabel)
// 																	console.log(companySite)
// 																});

// Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })

// const rmAddressLabel = 762;
// const newCompanies = companies.map((company) => {
// 	let companySite = company.site
// 		.filter(site => site.addressLabel != rmAddressLabel)
// 	// console.log(companySite);
// 	// console.log(company);
// 	let modified = Object.assign({}, company, {
// 		site: companySite
// 	})
// console.log(modified);
// 	return modified;
// });
// console.log(newCompanies);


const rmAddressLabel = 762;
const newSite = {
		"addressLabel": 812,
		"addressLine1": "Ryder Street",
		"addressLine2": "Hewes Street",
		"addressline3": 9656,
		"landmark": "aliquip excepteur",
		"city": "Tetherow",
		"state": "Washington",
		"countrty": "ea",
		"pincode": 623060,
		"stdCode": 935124,
		"landline1": "+91 (943) 515-2823",
		"landline2": "+91 (952) 568-3853",
		"fax1": "+0422 (968) 453-2860",
		"fax2": "+0422 (875) 589-3654",
		"mobile1": 7897671529,
		"mobile2": 9717446953,
		"email1": "labore@aliquip.com",
		"email2": "esse@nisi.com",
		"addressType": "Home"
	};

const newCompanies = companies.map((company) => {
		return Object.assign({}, company, {
		site:  company.site
						.filter(site => site.addressLabel != rmAddressLabel)
	});
});

console.log(newCompanies);
console.log(companies);


var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);

console.log(arr1);
const searchId = 659;

const addCompanies = companies.map((company) => {
	if(company.companyBasic.id==searchId){
		return Object.assign({}, company, {
		site:  [...company.site,newSite]
	});}
	return company;
});

console.log(addCompanies);
