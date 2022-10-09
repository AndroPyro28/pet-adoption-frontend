import { useState, useEffect } from "react";
import { Pet } from "../../../models/Pet";
import { AnimalRecordModalBackdrop, GlobalStyles, InputField, InputCol, InputRow, IconContainer } from "./components"
import Logic from "./Logic";
import {animateModalVariant} from "../animationVariants"
import {motion} from "framer-motion"
interface modalProps {
  toast: any,
  setOpenAnimalRecordModal: React.Dispatch<React.SetStateAction<Boolean>>
}
function AnimalRecordModal({ toast, setOpenAnimalRecordModal }: modalProps) {
  const [recordData, setRecordData] = useState<Pet>(
    {
      name: '',
      breed: '',
      type: '',
      gender: '',
      age: null,
      description: '',
      status: '',
      healthNotes: '',
      imageUrl: null,
      condition: null,
      traits: '',
    }
  )
  const { onSubmit, handleInputChange,
    handleSelectChange,
    handleTextAreaChange, } = Logic({ setRecordData, recordData, toast, setOpenAnimalRecordModal })

  useEffect(() => {
    try {
      if (recordData.imageUrl != null) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(recordData.imageUrl);

        fileReader.onloadend = async () => {
          if (fileReader.result) {
            if (!fileReader.result.toString().includes("image")) {
              throw new Error("Please set an image to this product");
            }

            if (fileReader.result.toString().includes("image")) {
              setRecordData(prev => ({ ...prev, imageUrl: fileReader.result }))
            }
          }
        };
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }, [recordData.imageUrl]);
  
  return (
    <AnimalRecordModalBackdrop>
      <GlobalStyles />
      <motion.div
      className="AnimaRecordForm"
      variants={animateModalVariant}
      initial="initial"
      animate="animate"
      >
      
        <IconContainer onClick={() => setOpenAnimalRecordModal(false)}>
          <i className="fa-solid fa-arrow-left back"></i>
        </IconContainer>
        <h1>Add record</h1>
        <IconContainer onClick={onSubmit}>
          <i className="fa-solid fa-check submit"></i>
        </IconContainer>

        <InputField>
          {
            typeof recordData.imageUrl == 'string' ? <img src={recordData.imageUrl} /> : <img src="/images/img/upload.png" />
          }

          <InputCol>
            <input type="text" placeholder="Name" name="name" onChange={handleInputChange} />
            <input type="text" placeholder="Breed" name="breed" onChange={handleInputChange} />
          </InputCol>
          <input type="file" name="imageUrl" className="imgUploader" accept="image/png, image/jpeg" onChange={handleInputChange} />
        </InputField>

        <InputField>
          <label htmlFor="">Overview</label>

          <InputCol>
            <input type="text" placeholder="Traits" name="traits" onChange={handleInputChange} />
            <input type="number" placeholder="Age" name="age" onChange={handleInputChange} />
          </InputCol>
        </InputField>

        <InputField>
          <label htmlFor="">Information</label>

          <InputRow>
            <select name="gender" onChange={handleSelectChange}>
              <option value="">Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>

            <select name="type" onChange={handleSelectChange}>
              <option value="">Select Pet</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </select>
          </InputRow>
        </InputField>

        <InputField>
        <label htmlFor=""></label>
          <InputRow>
            <select name="status" onChange={handleSelectChange}>
              <option value="">Select status</option>
              <option value="PENDING">Pending</option>
              <option value="READY">Ready</option>
              <option value="ADOPTED">Adopted</option>
            </select>
            <select name="condition" onChange={handleSelectChange}>
              <option value="">Select condition</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </InputRow>

        </InputField>

        <InputField>
          <label htmlFor="">Description</label>
          <InputCol>
            <input type="text" placeholder="Color" name="description" onChange={handleInputChange} />
          </InputCol>
        </InputField>

        <InputField>
          <label htmlFor="">Health Notes</label>
          <InputCol>
            <textarea placeholder="Health Notes" name="healthNotes" onChange={handleTextAreaChange} />
          </InputCol>
        </InputField>

      </motion.div>
    </AnimalRecordModalBackdrop>
  );
}

export default AnimalRecordModal;
