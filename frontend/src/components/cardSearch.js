import React from 'react'

const cardSearch = (props) => {
    return (
        <div className="controls_search">
            <div className="label_info">
                Busca una ciudad
            </div>
            <div className="search">
                <input id="search_city" className="input_searh" placeholder="Singapure" />
                <div className="icon_search">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
    )
}
export default cardSearch