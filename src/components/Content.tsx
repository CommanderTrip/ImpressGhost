import PropTypes from "prop-types"
import {ReactNode} from "react"

// Logging this page shows that its children are all the pages that can exist...
// Is this bad for performance? The switch in App.js knows what to render though.
const Content = ({page}: {page: ReactNode}) => {

	return (
		<div className={"page-deliverable"}>
			{page}
		</div>
	)
}


Content.propTypes = {
	page: PropTypes.object
}

export default Content