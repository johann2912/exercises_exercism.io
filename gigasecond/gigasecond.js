//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (n_date) => { 
	let newDate = new Date(n_date.getTime() + 10**12);

	return newDate;
};
