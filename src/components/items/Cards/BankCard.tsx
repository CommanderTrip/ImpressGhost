/**
 * This card is intended to look and feel like a credit card. The card is to be horizontal with an image the fills the
 * background and information is displayed across the front. Similar to this: https://levelup.video/library
 * @constructor
 */
const BankCard = ({title, desc}: {title: string, desc: string}) => {
	return <>
		<p>{title}</p>
		<p>{desc}</p>
	</>
}

export default BankCard