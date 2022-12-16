import React,{useState} from 'react'
import './styles.scss'
import { BsPlusLg } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { FaClipboardList } from 'react-icons/fa';


const INDEX = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if(!inputData){

    }else{
      setItems([...items, inputData]);
      setInputData('');
    }
    
  }

  const deleteItem =(id)=>{
    const updateditems = items.filter((elem,index)=>{
      return index !== id;
    });
    setItems(updateditems)
  }
  const removeAll =()=>{
    setItems([]);
  }
  return (
    <div className="main-div">
      <div className="child-div">
        <div className="header">
          <figure>
            <span><FaClipboardList/></span>
            <figcaption> 📝 TO DO List</figcaption>
          </figure>

        </div>
        <div className="todoinput">
          <input type="text" placeholder="🧾 Add Items"
          value={inputData}
          onChange={(e)=>{setInputData(e.target.value)}}
          />
          <span onClick={addItem}><BsPlusLg /></span>

        </div>
        <div className="showItems">

          {
            items.map((elem, index)=>{
              return(
                <div className="eachItem" key={index}>
                <h3>{elem}</h3>
                <span onClick={()=> deleteItem(index)}><AiFillDelete /></span>
              </div>
              )
            })
          }
         
        </div>

        <div className="showItems">
          <button className='btn' onClick={removeAll}><span>REMOVE ALL</span></button>
        </div>

      </div>

    </div>
  )
}

export default INDEX
