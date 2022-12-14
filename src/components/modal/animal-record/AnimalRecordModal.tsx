import { useState, useEffect, useMemo } from "react";
import { Pet } from "../../../models/Pet";
import { AnimalRecordModalBackdrop, GlobalStyles, InputField, InputCol, InputRow, IconContainer } from "./components"
import Logic from "./Logic";
import { animateModalVariant } from "../animationVariants"
import { motion } from "framer-motion"
import colorNameList from 'color-name-list';
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
      age: 0,
      description: '',
      // status: '',
      healthNotes: '',
      imageUrl: null,
      animal_history: '',
      medical_history: '',
      // condition: null,
      traits: '',
    }
  )


  const { onSubmit, handleInputChange,
    handleSelectChange,
    handleTextAreaChange, } = Logic({ setRecordData, recordData, toast, setOpenAnimalRecordModal })

  const [colorList, setColorList] = useState<any[]>([])

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

  const fetchColorList = useMemo(() => {
    return colorNameList?.map((color) => <option value={color.name}>{color?.name}</option>)
  }, [colorList])

  // const [breeds, setBreeds] = useState([])

  // useEffect(() => {
  //   const breeds = () =>
  //     fetch('https://dog.ceo/api/breeds/list/all')
  //       .then((response) => response.json())
  //       .then(({ message }) =>
  //         Object.entries(message).reduce((acc: any, [breed, subbreeds]: any) => {
  //           if (subbreeds.length) {
  //             for (const subbreed of subbreeds) {
  //               acc.push(`${breed} ${subbreed}`)
  //             }
  //           } else {
  //             acc.push(breed)
  //           }
  //           return acc
  //         }, [])
  //       )
  //   breeds().then(data => setBreeds(data))
  // }, [])

  // const fetchBreeds = useMemo(() => breeds.map((breed) => <option value={breed}>{breed}</option>), [breeds])

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
          <button className="submit">Save</button>
        </IconContainer>

        <InputField>
          {
            typeof recordData.imageUrl == 'string' ? <img src={recordData.imageUrl} /> : <img src="/images/content/insert-image-here.jpg" />
          }

          <InputCol>
            <input type="text" placeholder="Name" name="name" onChange={handleInputChange} />
            <input type="text" placeholder="Breed" name="breed" onChange={handleInputChange} />
          </InputCol>
          <input type="file" name="imageUrl" className="imgUploader" accept="image/png, image/jpeg" onChange={handleInputChange} />
        </InputField>

        {/* <InputField>
          <label htmlFor="">Breed</label>

          <InputRow>
            <select name="breed" onChange={handleSelectChange}>
              <option value="">Select breed</option>
             {fetchBreeds}
            </select>
          </InputRow>

        </InputField>
 */}
        <InputField>
          <label htmlFor="">Overview</label>
          <InputCol>
            <select name="traits" onChange={handleSelectChange}>
              <option value="">Select traits</option>
              <option value="good with children">good with children</option>
              <option value="good with elderly">good with elderly</option>
              <option value="people, good with PWDs.">people, good with PWDs.</option>
            </select>
            
            <input type="text" placeholder="Age" name="age" onChange={handleInputChange} />
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
          </InputRow>

        </InputField>

        <InputField>
          <label htmlFor="">Animal Type</label>
          <InputRow>

            <select name="type" onChange={handleSelectChange}>
              <option value="">Select Pet</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </select>
          </InputRow>
        </InputField>


        {/* <InputField>
          <label htmlFor=""></label>
          <InputRow>
            <select name="status" onChange={handleSelectChange}>
              <option value="">Select status</option>
              <option value="PENDING">Pending</option>
              <option value="READY">Ready</option>
              <option value="ADOPTED">Adopted</option>
            </select>
            
          </InputRow>

        </InputField> */}

        {/* <InputField>
        <label htmlFor=""></label>
          <InputRow>
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
        </InputField> */}

        <InputField>
          <label htmlFor="">Animal History</label>

          <InputRow>
            <select name="animal_history" onChange={handleSelectChange}>
              <option value="">Select history</option>
              <option value="Found in Slum Area">Found in Slum Area</option>
              <option value="Found on the Street">Found on the Street</option>
              <option value="Rescued">Rescued</option>
            </select>
          </InputRow>

        </InputField>

        <InputField>
          <label htmlFor="">Medical History</label>

          <InputRow>
            <select name="medical_history" onChange={handleSelectChange}>
              <option value="">Select history</option>
              <option value="Vaccinated">Vaccinated</option>
              <option value="Spayed">Spayed</option>
              <option value="Deworm">Deworm</option>
              <option value="Complete (Vaccinated, Deworm, & Spayed)">Complete (Vaccinated, Deworm, & Spayed)</option>
            </select>
          </InputRow>

        </InputField>


        <InputField>
          <label htmlFor="">Description (color)</label>
          <InputRow>
            {/* <input type="text" placeholder="Color" name="description" onChange={handleInputChange} /> */}
            <select name="description" onChange={handleSelectChange}>
              <option value="">Select Color</option>
              {
                fetchColorList
              }
            </select>
          </InputRow>
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
