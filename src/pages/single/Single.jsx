import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./single.scss";
import Chart from "../../components/chart/Chart";
import Table from "../../components/Table/Table";

const Single = () =>{
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />

                <div className='top'>
                    <div className='left'>
                        <div className="editButton">Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
                                alt="user image"
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'>janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'>9999999999</span>
                                </div>
                                <div className="detailItem">
                                    <span className='itemKey'>Address:</span>
                                    <span className='itemValue'>HSR Sector 2</span>
                                </div>
                                <div className="detailItem">
                                    <span className='itemKey'>Country:</span>
                                    <span className='itemValue'>India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <Chart aspect={3 / 1} title="User spending (Last 6 Months)" />
                    </div>
                </div>
                <div className='bottom'>
                    <div className="title">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Single;