const rmAddressLabel = 762;
const newCompanies = companies.map((company) => {
	let companySite = company.site
		.filter(site => site.addressLabel != rmAddressLabel)
	// console.log(companySite);
	// console.log(company);
	let modified = Object.assign({}, company, {
		site: companySite
	})
console.log(modified);
	return modified;
});
console.log(newCompanies);
