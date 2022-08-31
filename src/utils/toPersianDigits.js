export const toPersianDigits = (requestDigits) => {
	const persianDigits = ['۱','۲','۳','۴','۵','۶','۷','۸','۹','۰']
	return requestDigits.toString().replace(/\d/g , (e) => persianDigits[parseInt(e)])
}