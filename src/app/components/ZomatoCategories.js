import React from 'react';
import Proptypes from 'prop-types'

export const ZomatoCategories = (props) => {

    return (

        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props.cat.map(function (element,index) {
                    return <li  key= {index} className="breadcrumb-item">{element}</li>
                })}
            </ol>
        </nav>

    );
}

ZomatoCategories.propTypes = {
    cat: Proptypes.array
}