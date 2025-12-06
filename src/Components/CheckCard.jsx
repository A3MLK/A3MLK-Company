import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
const CheckCard = ({boxPar}) => {
  return (
    <div className="check-box-item">
        <div className="box-icon">
            <FaCheckCircle/>
        </div>
         <p className='box-para'>{boxPar}</p>
    </div>
  )
}

export default CheckCard