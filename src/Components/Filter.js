import React from 'react'

function Filter({ sorts, sorting, filtering, cat}) {

    return (
        <div className="select_filter">
            <select value={cat} onChange={filtering}>
                <option value="all">All</option>
                <option value="earphones">Earphones</option>
                <option value="mobile">Mobile</option>
                <option value="usb">Usb Cable</option>
                <option value="powerbank">PowerBank</option>

            </select>
            <select value={sorts} onChange={sorting}>
                <option value="all">All</option>
                <option value="low">Low to high</option>
                <option value="high">High to low</option>
            </select>
        </div>
    )
}

export default Filter
