import React, { Fragment } from 'react'


//import faStyles from 'font-awesome/css/font-awesome.css'

import './social.css'


const SocialIcons = () => {
    return (
        <Fragment>
            <span className="d-inline">
            <i className="fas fa-users"></i>
            </span>
            {/* <span className='d-inline'>
                <Link to='/' className='icon'>
                    <FontAwesomeIcon icon={{FaGithubSquare}} size='lg' />
                </Link>
            </span>
            <span className="d-inline">
                <Link to="/" className="icon">
                    <FontAwesomeIcon icon={[FaInstagramSquare]} size="lg" />
                </Link>
            </span> */}
        </Fragment>
    )
}

export default SocialIcons