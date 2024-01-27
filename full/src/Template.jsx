import React, { useState } from "react";
import PagedTable from "./components/PagedTable";
import "./Template.css"
import Modal from "./components/ModalAdd";
import DeleteModal from "./components/ModalDelete";
import UpdateModal from "./components/ModalUpdate";


const Template=()=>{

    const [isModalOpen,setIsModalOpen]=useState(false)
    const [isUpdateModalOpen,setIsUpdateModalOpen]=useState(false)
    const [isDeleteModalOpen,setIsDeleteModalOpen]=useState(false)

    return(
        <div>
            <div>
                <PagedTable></PagedTable>
            </div>
            <div className="button-containers">
                <div>
                <button className="but" onClick={setIsModalOpen}>Add</button>
                {isModalOpen && (<Modal/>)}
                {isModalOpen && <button className="x" id="a" onClick={()=>setIsModalOpen(false)}>X</button>}
                </div>
                <button className="but" onClick={setIsUpdateModalOpen}>Update</button>
                {isUpdateModalOpen && (<UpdateModal/>)}
                {isUpdateModalOpen && <button className="x" id="a" onClick={()=>setIsUpdateModalOpen(false)}>X</button>}
                <button className="but" onClick={setIsDeleteModalOpen}>Delete</button>
                {isDeleteModalOpen && (<DeleteModal/>)}
                {isDeleteModalOpen && <button className="x" id="c" onClick={()=>setIsDeleteModalOpen(false)}>X</button>}
            </div>
        </div>
    )
}

export default Template